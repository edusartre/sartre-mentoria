// ============================================================================
// CATÁLOGO DE CONCURSOS
// Lista de todos os apps publicados. O administrador vê todos; o aluno abre
// direto o link do concurso dele.
// Para adicionar: duplique a pasta do app, troque o concurso.js e o conteúdo,
// e acrescente uma entrada aqui.
// ============================================================================
window.CATALOGO = {
  marca: 'Sartre Aprovação',
  concursos: [
    {
      id: 'bacen',
      nome: 'BACEN',
      nomeCompleto: 'Banco Central do Brasil',
      area: 'Bancária',
      banca: 'Cebraspe',
      url: './index.html',
      logo: './assets/bacen-logo.png',
      status: 'ativo',
      resumo: '9 disciplinas · 327 aulas de teoria · mais de 8.500 questões comentadas.',
      cor: '#caa04a',
    },
  ],
};
