/* Trilha prática da P3 — MÉTODO CUMULATIVO.
   Regra do jogo: você escreve desde a primeira linha. Cada parte nova da redação
   começa REFAZENDO por inteiro, com tema novo e valendo acerto, tudo o que já foi
   dominado — introdução, depois introdução+D1, depois introdução+D1+D2, e assim
   até a prova inteira. Nada avança sem 5 acertos, cada um com tema diferente.
   A teoria mora dentro de cada caixa ("▾ como escrever este movimento"). */
window.PAR_MODULOS = [
  { id: 'A', nome: 'Introdução', cor: '#3a6ea5', sub: 'Apresentação' },
  { id: 'B', nome: 'Desenvolvimento 1', cor: '#c8933f', sub: 'Argumentação' },
  { id: 'C', nome: 'Desenvolvimento 2', cor: '#a35a3a', sub: 'Argumentação' },
  { id: 'D', nome: 'Conclusão', cor: '#2f7a52', sub: 'Encerramento' },
  { id: 'E', nome: 'A prova', cor: '#1c1712', sub: 'P3 inteira' },
];

window.PAR_TRILHA = [
  /* ===== MÓDULO A — INTRODUÇÃO, linha por linha ===== */
  { id: 'na1', mod: 'A', kind: 'montar', set: 'intro', movs: [1], reps: 5,
    t: 'Sua primeira linha',
    d: 'Sem aula antes: sorteie um tema e escreva. Uma ou duas frases que situam o problema — com recorte, sem muleta, sem estatística. Eu confiro na hora. Cinco acertos, cada um com tema diferente.',
    dica: 'Travou? Abra "▾ como escrever este movimento" dentro da caixa — a teoria mora ali, ao lado da mão na massa, não antes dela.' },
  { id: 'na2', mod: 'A', kind: 'montar', set: 'intro', movs: [1, 2], reps: 5,
    t: 'Recorte + tese',
    d: 'Tema novo, recorte de novo — e agora a frase que assume posição. É assim a trilha inteira: o que você já domina volta SEMPRE, valendo acerto.',
    dica: 'Tese é afirmação contestável sobre o tema. Se ninguém pode discordar, ainda é constatação — abra a explicação da caixa 2 para os testes.' },
  { id: 'na3', mod: 'A', kind: 'montar', set: 'intro', movs: [1, 2, 3], reps: 5,
    t: 'Recorte + tese + percurso',
    d: 'A introdução completa, movimento por movimento: situe, afirme e anuncie os DOIS eixos que os desenvolvimentos vão cumprir.',
    dica: '"Tanto… quanto…" é a forma mais segura de anunciar o percurso. O que você prometer aqui, o texto vai ter que entregar.' },
  { id: 'na4', mod: 'A', kind: 'parte', parte: 'intro', reps: 5,
    t: 'A introdução inteira, sem caixas',
    d: 'Agora como na prova: uma caixa só, os três movimentos emendados em 4 a 6 linhas. Cinco introduções aprovadas, cinco temas diferentes — e a introdução é sua para sempre.',
    dica: 'Escreva na ordem que você treinou: recorte → tese → percurso. Releia antes de conferir: tem muleta? Tem número? Tem os dois eixos?' },

  /* ===== MÓDULO B — DESENVOLVIMENTO 1: a introdução volta inteira, sempre ===== */
  { id: 'nb1', mod: 'B', kind: 'montar', set: 'dev', movs: [1], cum: ['intro'], reps: 5,
    t: 'Introdução inteira + a 1ª linha do D1',
    d: 'Tema novo: refaça a introdução POR INTEIRO (vale acerto — eu corrijo ela também) e escreva a primeira linha do primeiro desenvolvimento: o tópico frasal do eixo 1 que você anunciou.',
    dica: 'O tópico frasal do D1 desenvolve o PRIMEIRO eixo prometido no percurso. Se a introdução prometeu A e B, o D1 abre afirmando algo sobre A.' },
  { id: 'nb2', mod: 'B', kind: 'montar', set: 'dev', movs: [1, 2], cum: ['intro'], reps: 5,
    t: '+ o dado com fonte',
    d: 'Tudo de novo (introdução + tópico frasal, tema novo) e agora a prova da sua afirmação: número, instituição e ano, na mesma frase.',
    dica: 'Use o fato sorteado — os três elementos estão no cartão acima. Afirmo, depois comprovo: o dado nunca vem antes da afirmação.' },
  { id: 'nb3', mod: 'B', kind: 'montar', set: 'dev', movs: [1, 2, 3], cum: ['intro'], reps: 5,
    t: '+ a interpretação',
    d: 'O movimento que mais vale: depois do dado, a frase que diz o que ele PROVA. Repetir o número com outras palavras não é interpretar.',
    dica: 'Pergunte ao dado: "e daí?". A resposta — consequência, quem sente, o que muda — é a interpretação. Duas frases, no mínimo.' },
  { id: 'nb4', mod: 'B', kind: 'montar', set: 'dev', movs: [1, 2, 3, 4], cum: ['intro'], reps: 5,
    t: '+ a ressalva',
    d: 'Reconheça o limite do dado antes que o examinador o faça — e devolva a força à tese na mesma frase.',
    dica: 'Estrutura segura: "Contudo, [limite] — o que não invalida [tese], apenas [delimita/reforça]…". O campo "cuidado" do fato é exatamente esse limite.' },
  { id: 'nb5', mod: 'B', kind: 'montar', set: 'dev', movs: [1, 2, 3, 4, 5], cum: ['intro'], reps: 5,
    t: '+ a amarração',
    d: 'O parágrafo completo, movimento por movimento, com a introdução na frente. Você já está escrevendo mais da metade de uma P3 por sessão.',
    dica: 'A última frase conversa com a primeira: conectivo conclusivo + retomada da afirmação, com outras palavras.' },
  { id: 'nb6', mod: 'B', kind: 'parte', parte: 'dev1', cum: ['intro'], reps: 5,
    t: 'Introdução + D1, os dois sem caixas',
    d: 'Tema novo, duas caixas grandes: a introdução inteira e o desenvolvimento 1 inteiro, cada um escrito de uma vez, como na prova. Cinco sessões aprovadas fecham o módulo.',
    dica: 'No D1, confira você mesmo antes de mim: afirmação sem número → dado com fonte → o que prova → contudo → portanto.' },

  /* ===== MÓDULO C — DESENVOLVIMENTO 2: tudo volta, e o texto progride ===== */
  { id: 'nc1', mod: 'C', kind: 'montar', set: 'trans', movs: [1], cum: ['intro', 'dev1'], reps: 5,
    t: 'Tudo de novo + a transição do D2',
    d: 'Tema novo: introdução inteira, D1 inteiro (os dois valendo) e a primeira linha do segundo desenvolvimento — a ponte que retoma o D1 e afirma a nova ideia.',
    dica: '"Se [ideia do D1], [nova ideia é ainda mais direta]…" — ponte e tópico frasal na mesma frase. "Além disso" está proibido: soma, não progride.' },
  { id: 'nc2', mod: 'C', kind: 'parte', parte: 'dev2', cum: ['intro', 'dev1'], reps: 5,
    t: '+ o D2 inteiro',
    d: 'A sessão agora é três quartos de uma P3: introdução, D1 e o D2 completo — com transição, DADO DIFERENTE do D1 e os cinco movimentos.',
    dica: 'O D2 cumpre o SEGUNDO eixo anunciado na introdução. Mesma estatística nos dois desenvolvimentos = reprova na hora.' },

  /* ===== MÓDULO D — CONCLUSÃO: a redação inteira nasce aqui ===== */
  { id: 'nd1', mod: 'D', kind: 'montar', set: 'conc', movs: [1], cum: ['intro', 'dev1', 'dev2'], reps: 5,
    t: 'Tudo de novo + a retomada da tese',
    d: 'Tema novo, o texto quase inteiro: introdução, D1, D2 — e a primeira linha da conclusão, que reafirma a tese com OUTRAS palavras, agora comprovada.',
    dica: 'Não olhe para a sua introdução enquanto escreve a retomada. Depois compare: se houver frase igual, reescreva.' },
  { id: 'nd2', mod: 'D', kind: 'montar', set: 'conc', movs: [1, 2], cum: ['intro', 'dev1', 'dev2'], reps: 5,
    t: '+ a síntese dos dois eixos',
    d: 'A frase que amarra os dois desenvolvimentos e fecha o circuito aberto no anúncio do percurso.',
    dica: 'Retome as duas palavras-chave que a introdução prometeu. O examinador percebe o circuito fechado — isso é coerência pontuando.' },
  { id: 'nd3', mod: 'D', kind: 'montar', set: 'conc', movs: [1, 2, 3, 4], cum: ['intro', 'dev1', 'dev2'], reps: 5,
    t: '+ intervenção e fecho',
    d: 'A conclusão completa: retomada, síntese, proposta com agente + ação + meio + finalidade, e a frase final que encerra sem abrir assunto.',
    dica: 'Monte a intervenção na ordem: "Cabe a [agente] [ação], por meio de [meio], a fim de [finalidade]." Depois varie a sintaxe.' },
  { id: 'nd4', mod: 'D', kind: 'parte', parte: 'conc', cum: ['intro', 'dev1', 'dev2'], reps: 5,
    t: 'A P3 completa, parte por parte',
    d: 'Cada sessão daqui em diante é uma redação inteira: quatro caixas, quatro partes, tema novo, tudo corrigido. Cinco redações aprovadas fecham o módulo.',
    dica: 'Leia só as primeiras frases das quatro partes, em sequência. Se elas sozinhas contarem o raciocínio, o texto tem esqueleto.' },

  /* ===== MÓDULO E — A PROVA ===== */
  { id: 'ne1', mod: 'E', kind: 'parte', parte: 'p3', reps: 5,
    t: 'A P3 numa caixa só',
    d: 'Sem caixas por parte, sem rótulos: a folha em branco da prova. Escreva os quatro parágrafos separados por linha em branco — eu identifico e corrijo cada um.',
    dica: 'Proporção numa P3 de 30 linhas: introdução 4-5, cada desenvolvimento 9-10, conclusão 4-5.' },
  { id: 'ne2', mod: 'E', kind: 'parte', parte: 'p3', tempo: 60, reps: 5,
    t: 'A P3 no tempo da prova — e à mão',
    d: 'A mesma folha em branco, agora com 60 minutos no relógio. E faça como na banca: escreva À MÃO no papel (30 linhas, caneta), depois digite aqui para conferir — ou fotografe e use a correção de manuscrito. Letra legível e sem rasura também se treinam. Cinco aprovações = pronto para a banca.',
    dica: 'Reserve os últimos 8 minutos para reler: promessa do percurso cumprida? Dados diferentes nos dois desenvolvimentos? Intervenção com os quatro elementos?' },
];
