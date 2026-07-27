// Caveirões de redação — Prof. Adriana Figueiredo (esqueletos de parágrafo para o aluno preencher)
// Uso: modelos prontos por bloco na aba Discursivas. Conteúdo didático/estrutural (conectivos + lacunas).
window.CAVEIROES = {
  intro: [
    { nome: 'Cunho geral / definição + tese', modelo: 'AFIRMAÇÃO DE CUNHO GERAL ou DEFINIÇÃO. Diante disso, torna-se essencial discutir TESE.' },
    { nome: 'Citação de lei + tema', modelo: 'O artigo X, da Lei Y, assegura que ____. Nesse sentido, torna-se necessário refletir sobre a questão do TEMA.' },
    { nome: 'Citação de autor + tema', modelo: 'Para Fulano de tal, ____. Assim, discutir a importância de ____ revela-se fundamental diante de ____.' },
    { nome: 'Definição + tema', modelo: 'X consiste em ____. À luz desse princípio, torna-se pertinente discutir TEMA.' },
    { nome: 'Oposição (X/Y)', modelo: 'Embora a Lei ____ assegure X, a realidade revela Y. Diante desse contraste, impõe-se discutir TEMA.' },
    { nome: 'Genérico Cebraspe', modelo: 'A questão do ____ é assunto que deve ser discutido. Nesse contexto, vale salientar que ____.' },
  ],
  dev1: [
    { nome: 'Abertura do 1º tópico', modelo: 'Sob essa análise, deve-se discutir que TÓPICO FRASAL 1. Com efeito, ____. Exemplo disso é ____.' },
    { nome: 'Ordenador (Em primeiro lugar)', modelo: 'Em primeiro lugar, é preciso destacar que TÓPICO FRASAL 1. De fato, ____. Basta observar ____.' },
    { nome: 'Fundamentação por lei/autor', modelo: 'De acordo com a Lei tal, em seu artigo tal, ____, o que reforça ____.' },
    { nome: 'Fundamentação por exemplo', modelo: 'Para ilustrar, cite-se o caso prático de ____, que ____. Esse exemplo demonstra que ____.' },
    { nome: 'Fundamentação por dados', modelo: 'Dados de pesquisa da revista/órgão X mostram que ____, o que evidencia ____.' },
  ],
  dev2: [
    { nome: 'Abertura do 2º tópico', modelo: 'Ademais, convém observar que TÓPICO FRASAL 2. Nessa lógica, ____. Ainda nessa linha, ____.' },
    { nome: 'Ordenador (Em segundo lugar)', modelo: 'Em segundo lugar, cabe pontuar que TÓPICO FRASAL 2. Nessa linha, destaque-se que ____.' },
    { nome: 'Divisão (tópico com "S")', modelo: 'Sob essa análise, vale ressaltar dois parâmetros de ____: A e B. Quanto a A, destaque-se ____. No que se refere a B, pontue-se ____.' },
    { nome: 'Fundamentação por explicação', modelo: 'Isso significa que ____, o que reforça o conceito de ____. Em termos práticos, ____.' },
  ],
  concl: [
    { nome: 'Retomada + solução', modelo: 'Portanto, diante de todo o exposto, TEMA. Como solução viável para essa questão, aponta-se ____.' },
    { nome: 'Retomada + duas soluções', modelo: 'Diante de todo o exposto, TEMA. Uma das medidas possíveis é ____. Outra solução viável seria ____.' },
    { nome: 'Conclusão implícita', modelo: 'Por fim, ÚLTIMO TÓPICO FRASAL. Assim, os pontos expostos demonstram a relevância do TEMA.' },
    { nome: 'Conclusão explícita', modelo: 'À vista dessas considerações, é possível afirmar que TEMA.' },
  ],
  // Conectores por função (elementos de coesão — Prof. Adriana Figueiredo)
  conectores: [
    { fn: 'Realce / relevância', uso: 'Dar uma opinião ou enfatizar um ponto de vista', ex: 'Vale lembrar · De modo geral · É inegável · É certo · Decerto · Sem dúvida · Com toda a certeza · Por certo · Certamente' },
    { fn: 'Atenuadores de opinião', uso: 'Relativizar a opinião para não soar taxativa', ex: 'Muitas vezes · Em muitos casos · De certa forma · Pode-se dizer · Provavelmente · Possivelmente · É provável · De certo modo' },
    { fn: 'Enumeração / prioridade', uso: 'Ordenar mais de um ponto na redação', ex: 'Em primeiro plano · Em primeiro lugar · A princípio · Antes de tudo · Desde logo' },
    { fn: 'Adição / sequenciadores', uso: 'Adicionar uma ideia a outra já explicitada', ex: 'Além disso · Por outro lado · Ademais · Soma-se a isso · Em adição a isso · Cabe ressaltar · Ainda · Um outro aspecto é · Da mesma forma' },
    { fn: 'Negação / contraste / oposição', uso: 'Estabelecer diferenças, oposições ou negar o dito', ex: 'Não obstante · Ao contrário · De outra face · Entretanto · No entanto · Por outro lado · Diferente disso · Contudo · Pelo contrário · Em contrapartida' },
    { fn: 'Explicação', uso: 'Explicar de forma mais pormenorizada o que se afirmou', ex: 'Em verdade · Com efeito · De fato · Realmente · Isso sugere · Isso significa · Isso implica · Isso ocorre porque' },
    { fn: 'Semelhança / comparação', uso: 'Comparar dois elementos ressaltando similaridades', ex: 'Igualmente · Da mesma forma · Assim também · Do mesmo modo · Similarmente · Semelhantemente · Analogamente' },
    { fn: 'Conformidade', uso: 'Apresentar testemunhos de autoridade / citações', ex: 'Segundo · Conforme · De acordo com · Em conformidade com' },
    { fn: 'Exemplificação', uso: 'Deixar claro que se está exemplificando', ex: 'É o que se vê em · É o que se observa em · Prova disso é · Basta observar · Exemplo disso é · Como exemplo, pode-se citar' },
    { fn: 'Causa', uso: 'Apresentar uma causa', ex: 'Isso ocorre em função de · Graças a · Em virtude de · Devido a · Porque · Já que · Uma vez que · Visto que' },
    { fn: 'Consequência', uso: 'Apresentar uma consequência', ex: 'Consequentemente · Em decorrência disso · Em consequência · Por conseguinte · Como resultado' },
    { fn: 'Fecho / conclusão', uso: 'Fechar ou concluir a redação', ex: 'Por conseguinte · Por fim · Finalmente · Por tais razões · Por tudo isso · Em razão disso · Diante disso · Assim · Enfim · Sendo assim · Dessa forma · Desse modo' },
  ],
};
