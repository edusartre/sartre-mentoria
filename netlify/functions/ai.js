// Proxy serverless para esconder a chave de IA (Netlify Functions).
// Como ativar (opcional):
//  1. No painel do Netlify → Site settings → Environment variables, crie:
//       AI_KEY = sua chave (sk-ant-... para Anthropic OU AIza.../AQ... para Gemini)
//  2. Publique o site com esta pasta (netlify/functions/ai.js).
//  3. No app, como admin, defina a URL do proxy no localStorage:
//       mentoria-ai-proxy = https://SEUSITE.netlify.app/.netlify/functions/ai
//     (ou o botão "Configurar proxy de IA", se disponível)
//  Assim a chave fica só no servidor — nenhum aluno consegue lê-la.

exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'content-type': 'application/json',
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: '{"error":"method"}' };

  const key = process.env.AI_KEY || '';
  if (!key) return { statusCode: 500, headers: cors, body: '{"error":"no-server-key"}' };

  let opts;
  try { opts = JSON.parse(event.body || '{}'); } catch (e) { return { statusCode: 400, headers: cors, body: '{"error":"bad-json"}' }; }

  try {
    // Gemini (chave não começa com sk-ant)
    if (!/^sk-ant/.test(key)) {
      const models = ['gemini-2.5-flash-lite', 'gemini-2.0-flash-lite', 'gemini-1.5-flash-8b-latest', 'gemini-2.0-flash', 'gemini-2.5-flash'];
      const contents = (opts.messages || []).map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.content || '') }] }));
      if (opts.images && opts.images.length && contents.length) {
        const last = contents[contents.length - 1];
        (opts.images || []).forEach(im => last.parts.push({ inlineData: { mimeType: im.mime || 'image/jpeg', data: im.data } }));
      }
      const gbody = { contents, generationConfig: { maxOutputTokens: opts.max_tokens || 800 } };
      if (opts.system) gbody.systemInstruction = { parts: [{ text: opts.system }] };
      let lastStatus = 0, lastMsg = '';
      for (const model of models) {
        const gres = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + encodeURIComponent(key), {
          method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(gbody),
        });
        if (gres.ok) {
          const gdata = await gres.json();
          const cand = gdata.candidates && gdata.candidates[0];
          const text = (cand && cand.content && cand.content.parts && cand.content.parts.map(p => p.text || '').join('')) || '';
          return { statusCode: 200, headers: cors, body: JSON.stringify({ text }) };
        }
        lastStatus = gres.status;
        try { const ej = await gres.json(); lastMsg = (ej && ej.error && ej.error.message) || ''; } catch (e) {}
        if (gres.status !== 404 && gres.status !== 429) break;
      }
      return { statusCode: 502, headers: cors, body: JSON.stringify({ error: 'gemini-' + lastStatus, message: lastMsg }) };
    }
    // Anthropic
    const body = {
      model: opts.model || 'claude-3-5-sonnet-20241022',
      max_tokens: opts.max_tokens || 800,
      messages: (opts.messages || []).map((m, i) => {
        if (opts.images && opts.images.length && i === (opts.messages.length - 1) && m.role === 'user') {
          const arr = (opts.images || []).map(im => ({ type: 'image', source: { type: 'base64', media_type: im.mime || 'image/jpeg', data: im.data } }));
          arr.push({ type: 'text', text: String(m.content || '') });
          return { role: m.role, content: arr };
        }
        return { role: m.role, content: m.content };
      }),
    };
    if (opts.system) body.system = opts.system;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify(body),
    });
    if (!res.ok) return { statusCode: 502, headers: cors, body: JSON.stringify({ error: 'ai-http-' + res.status }) };
    const data = await res.json();
    const text = (data.content && data.content[0] && data.content[0].text) || '';
    return { statusCode: 200, headers: cors, body: JSON.stringify({ text }) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: String((e && e.message) || e) }) };
  }
};
