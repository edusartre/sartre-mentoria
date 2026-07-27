// ============================================================================
// CONFIGURAÇÃO DO CONCURSO
// ----------------------------------------------------------------------------
// Este arquivo é a ÚNICA coisa que muda de um concurso para outro.
// O motor (Mentoria.dc.html) é idêntico em todos: plano, revisão espaçada,
// flashcards, questões, simulados, radar, socrático, discursivas.
//
// Para criar um novo concurso:
//   1. copie esta pasta;
//   2. troque os campos abaixo;
//   3. troque os arquivos de conteúdo (embedded-content*.js, quiz-counts.js);
//   4. gere o bundle offline.
// ============================================================================
window.CONCURSO = {
  id: 'bacen',
  nome: 'BACEN',
  nomeCompleto: 'Banco Central do Brasil',
  area: 'Bancária',
  banca: 'Cebraspe',
  bancasSecundarias: ['FGV'],
  edital: 'Edital 2024',
  marca: 'Sartre Aprovação',
  lema: 'Servir ao Brasil começa com uma decisão.',
  logo: './assets/bacen-logo.png',
  hero: './assets/bacen-hero-front.jpg',
  jornadaTitulo: 'Sua Jornada rumo ao BACEN',
  descricao: 'Plataforma de estudos para o concurso do Banco Central: plano guiado, questões comentadas, revisão espaçada, flashcards e simulados.',

  // Discursivas: formato das provas escritas desta banca.
  discursivas: {
    ativo: true,
    tipos: [
      { id: 'P3', title: 'Dissertação', linhas: 30 },
      { id: 'P4', title: 'Situação-problema', linhas: 30 },
    ],
  },

  // Peso de cada disciplina na prova objetiva.
  // itens = nº de questões; pct = participação na nota daquela prova.
  pesos: {
    'Língua Portuguesa': { itens: 25, pct: '20%', prova: 'P1' },
    'Noções de Lógica e Estatística': { itens: 10, pct: '20%', prova: 'P1' },
    'Direito Administrativo': { itens: 5, pct: '10%', prova: 'P1' },
    'Fundamentos de Microeconomia e Macroeconomia': { itens: 10, pct: '20%', prova: 'P1' },
    'Macroeconomia (Conhecimentos Específicos)': { itens: 18, pct: '25,7%', prova: 'P2' },
    'Finanças': { itens: 18, pct: '25,7%', prova: 'P2' },
    'Estatística e Econometria': { itens: 12, pct: '17,1%', prova: 'P2' },
    'Contabilidade de Instituições Financeiras (COSIF)': { itens: 12, pct: '17,1%', prova: 'P2' },
    'Microeconomia (Conhecimentos Específicos)': { itens: 10, pct: '14,3%', prova: 'P2' },
  },

  // Cores por bloco de prova (badges de peso).
  provaCores: {
    P1: { cor: '#b3701f', fundo: '#fbe9cb' },
    P2: { cor: '#2f6d5a', fundo: '#d9efe4' },
  },

  // Temas de maior peso — usados pela IA quando precisa escolher um assunto.
  temasQuentes: 'política monetária, SFN, regulação, economia ou atualidades econômicas',
};

// Rótulos derivados, usados nas instruções de IA. Não editar — vêm do bloco acima.
(function () {
  var c = window.CONCURSO;
  var bancas = [c.banca].concat(c.bancasSecundarias || []).join(' e ');
  c.ref = 'concurso do ' + c.nome;
  c.refLongo = 'concurso do ' + c.nomeCompleto + ' (' + c.nome + ')';
  c.bancasLabel = bancas;
  c.examinador = 'examinador da banca ' + c.banca + ' para o ' + c.ref;
})();
