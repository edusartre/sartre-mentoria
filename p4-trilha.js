/* Trilha prática da P4 — MÉTODO CUMULATIVO (mesma pegada da P3).
   Escreve desde a primeira linha; cada bloco novo recomeça refazendo por inteiro,
   com caso novo e valendo acerto, tudo o que já foi dominado: enquadramento,
   depois enquadramento+item 1, e assim até a peça inteira no tempo.
   5 acertos por passo, sem repetir o mesmo caso em acertos seguidos. */

window.P4_MODULOS = [
  { id: 'P', nome: 'Enquadramento', cor: '#3a6ea5', sub: 'Delimitar o caso' },
  { id: 'Q', nome: 'Item 1', cor: '#c8933f', sub: 'Resposta · fundamento · aplicação' },
  { id: 'R', nome: 'Item 2', cor: '#a35a3a', sub: 'Sem repetir fundamentação' },
  { id: 'S', nome: 'Item 3', cor: '#4a3a7a', sub: 'A peça se completa' },
  { id: 'T', nome: 'A prova', cor: '#1c1712', sub: 'P4 inteira' },
];

/* Casos de treino: contexto + comando com itens numerados + espelho resumido. */
window.P4_CASOS = [
  {
    id: 'cs5',
    area: 'Sistema financeiro · política monetária',
    titulo: 'Autonomia do Banco Central questionada após decisão de juros',
    contexto: 'Após decisão do comitê de política monetária de manter a taxa básica de juros em patamar elevado, parlamentares apresentaram projeto para submeter as decisões de juros à aprovação prévia do Congresso, alegando que a autoridade monetária "não responde a ninguém". Em paralelo, o presidente da autarquia foi convocado a prestar esclarecimentos e questionado sobre a compatibilidade entre a autonomia operacional e o controle democrático de suas decisões.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique o fundamento econômico da autonomia da autoridade monetária.' },
      { n: 2, verbo: 'distinguir', texto: 'distinga autonomia operacional de ausência de controle e indique os mecanismos de prestação de contas existentes.' },
      { n: 3, verbo: 'analisar', texto: 'analise os riscos da aprovação prévia das decisões de juros pelo Legislativo.' },
    ],
    espelho: [
      'Autonomia reduz o viés inflacionário da política monetária (inconsistência temporal): decisões técnicas de horizonte longo ficam protegidas do ciclo eleitoral; credibilidade ancora expectativas e barateia a desinflação.',
      'Autonomia operacional convive com mandato definido em lei (metas fixadas pelo CMN), relatórios periódicos, atas públicas, comparecimento ao Congresso e responsabilização dos dirigentes — accountability por transparência, não por subordinação.',
      'Aprovação prévia politizaria o instrumento, elevaria prêmio de risco e expectativas de inflação, criaria dominância política sobre a técnica e retardaria respostas a choques — o custo recairia sobre os mais pobres, principais vítimas da inflação.',
    ],
  },
  {
    id: 'cs6',
    area: 'Sistema financeiro · resolução',
    titulo: 'Banco de médio porte em crise de liquidez',
    contexto: 'Um banco múltiplo de médio porte sofreu saques expressivos após rumores em redes sociais sobre sua solvência. A instituição está enquadrada nos índices mínimos de capital, mas seus ativos são majoritariamente de baixa liquidez. A diretoria pediu ao supervisor acesso a linhas de liquidez e, em nota pública, negou qualquer problema. Analistas apontam risco de contágio a instituições semelhantes caso os saques continuem.',
    comando: [
      { n: 1, verbo: 'distinguir', texto: 'distinga crise de liquidez de crise de solvência e indique por que a distinção importa para a ação do supervisor.' },
      { n: 2, verbo: 'indicar', texto: 'indique os instrumentos à disposição da autoridade para conter o episódio.' },
      { n: 3, verbo: 'discorrer', texto: 'discorra sobre o risco de contágio e o papel do prestamista de última instância.' },
    ],
    espelho: [
      'Liquidez: incapacidade momentânea de honrar saques com ativos líquidos, embora patrimônio positivo; solvência: passivo supera ativo. A distinção define a resposta — liquidez se resolve com empréstimo; insolvência exige regime de resolução.',
      'Linhas de redesconto e assistência de liquidez contra garantias, monitoramento intensivo, requerimentos adicionais, e, se houver insolvência, regimes especiais (RAET, intervenção, liquidação extrajudicial); comunicação cautelosa para não validar o pânico.',
      'Contágio: corrida bancária é profecia autorrealizável e se transmite por semelhança percebida e exposições interbancárias; o prestamista de última instância empresta a solventes ilíquidos, a taxa punitiva e contra garantias, contendo o pânico sem criar risco moral.',
    ],
  },
  {
    id: 'cs7',
    area: 'Administração pública · licitações',
    titulo: 'Pregão com pesquisa de preços de uma única fonte',
    contexto: 'Em pregão eletrônico para aquisição de equipamentos de informática, o órgão estimou o valor de referência com base em três orçamentos solicitados a empresas do mesmo grupo econômico, todas com sócios em comum. O certame foi vencido por uma dessas empresas, com desconto de 2% sobre o valor estimado. Licitante derrotado representou ao tribunal de contas alegando sobrepreço e direcionamento. O pregoeiro alega que cumpriu o rito formal.',
    comando: [
      { n: 1, verbo: 'discorrer', texto: 'discorra sobre a função da pesquisa de preços na fase preparatória da licitação.' },
      { n: 2, verbo: 'apontar', texto: 'aponte os vícios do procedimento descrito.' },
      { n: 3, verbo: 'indicar', texto: 'indique as providências cabíveis pelo tribunal de contas e pelo próprio órgão.' },
    ],
    espelho: [
      'A pesquisa de preços forma o valor de referência que baliza a aceitabilidade das propostas; deve usar cesta de fontes diversificadas (painéis oficiais, contratações similares, sítios especializados), não apenas orçamentos de fornecedores.',
      'Orçamentos de empresas do mesmo grupo não são fontes independentes — viciam a estimativa; cumprimento do rito formal não convalida vício material; indícios de simulação de competitividade e possível sobrepreço.',
      'Tribunal: cautelar de suspensão, oitiva, determinação de repactuação ou anulação, e responsabilização; órgão: autotutela (anular o ato viciado), refazer a estimativa com fontes independentes e apurar responsabilidade funcional.',
    ],
  },
  {
    id: 'cs8',
    area: 'Servidor público · acumulação',
    titulo: 'Acumulação de cargo com aposentadoria e mandato',
    contexto: 'Servidora aposentada em cargo efetivo de professora de universidade federal tomou posse em cargo efetivo de analista em autarquia federal, aprovada em concurso. Dois anos depois, foi eleita vereadora do município onde reside, havendo compatibilidade de horários entre o mandato e o expediente. A unidade de gestão de pessoas questionou a regularidade da situação funcional, e a servidora sustenta que todas as fontes de renda têm origem lícita.',
    comando: [
      { n: 1, verbo: 'discorrer', texto: 'discorra sobre a regra geral de acumulação de cargos e a situação dos proventos de aposentadoria.' },
      { n: 2, verbo: 'analisar', texto: 'analise a acumulação do cargo de analista com o mandato de vereadora.' },
      { n: 3, verbo: 'concluir', texto: 'conclua sobre a regularidade da situação da servidora, fundamentando.' },
    ],
    espelho: [
      'Regra geral é a vedação de acumulação remunerada, com exceções constitucionais taxativas (dois de professor; um técnico/científico e um de professor; profissionais de saúde); proventos seguem a mesma lógica: aposentadoria de professor acumula com cargo técnico se a acumulação seria lícita na atividade.',
      'Vereador com compatibilidade de horários pode acumular cargo e mandato, percebendo as vantagens de ambos; sem compatibilidade, afasta-se do cargo com direito de opção remuneratória.',
      'Situação regular: aposentadoria de magistério + cargo técnico é acumulação constitucionalmente admitida, e o mandato de vereador com horário compatível soma-se licitamente; licitude da origem não é o critério — o critério é o rol taxativo constitucional.',
    ],
  },
  {
    id: 'cs9',
    area: 'Política econômica · fiscal',
    titulo: 'Renúncia fiscal sem estimativa de impacto',
    contexto: 'Projeto de lei estadual concedeu isenção tributária por dez anos a um setor industrial, aprovado sem estimativa de impacto orçamentário-financeiro e sem medidas de compensação. A justificativa foi a geração futura de empregos. Três anos depois, auditoria constatou que a arrecadação caiu, os empregos prometidos não se materializaram em escala relevante e não há mecanismo de avaliação ou de revisão do benefício.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique o conceito de gasto tributário e por que ele deve se submeter à mesma disciplina do gasto direto.' },
      { n: 2, verbo: 'apontar', texto: 'aponte as irregularidades na concessão descrita.' },
      { n: 3, verbo: 'propor', texto: 'proponha um desenho adequado para benefícios fiscais, indicando salvaguardas.' },
    ],
    espelho: [
      'Gasto tributário é a arrecadação de que se abre mão via benefícios — economicamente equivale a despesa, mas escapa do orçamento anual e da revisão periódica, tornando-se invisível e permanente se não for disciplinado.',
      'Concessão sem estimativa de impacto e sem compensação viola a responsabilidade fiscal; ausência de contrapartidas verificáveis, de prazo de revisão e de avaliação de resultados; promessa de empregos sem indicador nem consequência.',
      'Desenho adequado: estimativa prévia de impacto, compensação, prazo determinado com cláusula de caducidade, contrapartidas mensuráveis, avaliação periódica independente com publicação, e revisão/revogação quando as metas não se confirmam.',
    ],
  },
  {
    id: 'cs10',
    area: 'Sistema financeiro · conduta',
    titulo: 'Venda de produto de investimento inadequado ao perfil',
    contexto: 'Instituição financeira ofereceu a clientes aposentados, de perfil conservador, um produto estruturado de alto risco, apresentado por gerentes como "renda fixa garantida". As metas internas de venda do produto eram agressivas e vinculadas à remuneração variável dos gerentes. Com a desvalorização do produto, milhares de clientes registraram reclamações. A instituição alega que os clientes assinaram termo de ciência de risco.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique o dever de adequação (suitability) na distribuição de produtos financeiros.' },
      { n: 2, verbo: 'analisar', texto: 'analise a conduta da instituição e o valor jurídico do termo assinado.' },
      { n: 3, verbo: 'indicar', texto: 'indique as medidas cabíveis do supervisor de conduta.' },
    ],
    espelho: [
      'Suitability: recomendar apenas produtos compatíveis com perfil, objetivos e situação financeira do cliente; o dever é da instituição e é contínuo — não se transfere ao cliente pela assinatura de formulários.',
      'Venda ativa de produto de risco a conservadores, com informação enganosa ("garantida") e incentivos internos desalinhados, caracteriza falha grave de conduta e vício de consentimento; o termo de ciência não convalida a recomendação inadequada — formaliza sem informar.',
      'Determinações de cessação e revisão da política de incentivos, processo sancionador, ressarcimento/reversão das operações inadequadas, reforço de controles de conduta e responsabilização de administradores; supervisão temática sobre práticas de venda.',
    ],
  },
  {
    id: 'cs11',
    area: 'Administração pública · ato administrativo',
    titulo: 'Revogação de autorização com efeitos retroativos',
    contexto: 'Órgão regulador expediu autorização de funcionamento a uma empresa, que realizou investimentos com base nela. Um ano depois, novo dirigente do órgão editou ato "revogando" a autorização com efeitos retroativos à data da concessão, sob o argumento de que a orientação anterior era equivocada, e determinou a devolução dos valores auferidos no período. Não houve processo administrativo nem oitiva da empresa.',
    comando: [
      { n: 1, verbo: 'distinguir', texto: 'distinga revogação de anulação e seus efeitos no tempo.' },
      { n: 2, verbo: 'apontar', texto: 'aponte os vícios do ato do novo dirigente.' },
      { n: 3, verbo: 'discorrer', texto: 'discorra sobre a proteção da confiança legítima do administrado no caso.' },
    ],
    espelho: [
      'Revogação: juízo de conveniência sobre ato válido, efeitos ex nunc, respeitados direitos adquiridos; anulação: vício de legalidade, efeitos ex tunc, mas com modulação possível para preservar terceiros de boa-fé.',
      'Chamou de revogação o que operaria como anulação retroativa; mudança de interpretação não retroage para prejudicar situação consolidada; ausência de contraditório e ampla defesa; possível decadência do poder de anular após o prazo legal.',
      'Confiança legítima protege quem agiu amparado em ato estatal válido na aparência: investimentos feitos de boa-fé não se desfazem por reorientação do órgão; nova interpretação vale para o futuro, com regime de transição quando necessário.',
    ],
  },
  {
    id: 'cs12',
    area: 'Política econômica · câmbio e setor externo',
    titulo: 'Pressão por intervenção cambial permanente',
    contexto: 'Diante de depreciação acentuada da moeda nacional, entidades industriais defenderam que a autoridade monetária fixasse a taxa de câmbio em patamar "competitivo e estável", usando as reservas internacionais para sustentá-lo indefinidamente. Técnicos da autarquia contrapõem que o regime vigente é de câmbio flutuante e que as intervenções se limitam a episódios de disfuncionalidade do mercado.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique o funcionamento do regime de câmbio flutuante e o papel das reservas internacionais nele.' },
      { n: 2, verbo: 'analisar', texto: 'analise a proposta de fixação da taxa em patamar "competitivo", indicando seus riscos.' },
      { n: 3, verbo: 'discorrer', texto: 'discorra sobre a relação entre regime cambial e autonomia da política monetária.' },
    ],
    espelho: [
      'No câmbio flutuante o preço da moeda equilibra oferta e demanda e absorve choques externos; reservas funcionam como seguro — intervenções pontuais para prover liquidez e conter disfuncionalidade, não para fixar patamar.',
      'Fixar câmbio "competitivo" gasta reservas finitas contra fundamentos, convida ataques especulativos, importa inflação (se desvalorizado) e cria garantia implícita que estimula descasamentos privados; a história das âncoras cambiais registra colapsos custosos.',
      'Trilema de Mundell: com capitais livres, não se controla câmbio e juros ao mesmo tempo; o flutuante é o que permite política monetária autônoma voltada à meta de inflação — fixar o câmbio subordinaria os juros à defesa da paridade.',
    ],
  },
  {
    id: 'cs13',
    area: 'Servidor público · processo disciplinar',
    titulo: 'PAD com comissão irregular e pena agravada',
    contexto: 'Em processo administrativo disciplinar contra servidor acusado de abandono de cargo, a comissão foi composta por dois servidores, um deles subordinado direto da autoridade que determinou a instauração e outro sem estabilidade. O relatório final propôs suspensão de 60 dias, mas a autoridade julgadora aplicou demissão, sem motivar o agravamento. A defesa alega nulidade integral do processo.',
    comando: [
      { n: 1, verbo: 'apontar', texto: 'aponte os vícios na composição da comissão processante.' },
      { n: 2, verbo: 'analisar', texto: 'analise a possibilidade de a autoridade julgadora divergir do relatório da comissão.' },
      { n: 3, verbo: 'concluir', texto: 'conclua sobre a validade do processo e da penalidade aplicada.' },
    ],
    espelho: [
      'Comissão de PAD exige três servidores estáveis, com presidente de cargo ou escolaridade compatível; subordinação direta compromete a imparcialidade; composição irregular é vício formal que contamina o processo.',
      'A autoridade pode divergir do relatório, desde que motivadamente e com base nas provas dos autos — o relatório não vincula; sem motivação idônea, o agravamento é nulo por violação do dever de motivar e do devido processo.',
      'Nulidade da composição invalida o processo desde a instauração da instrução; a pena de demissão sem motivação agrava o vício; refazimento com comissão regular, aproveitando-se apenas os atos não decisórios compatíveis.',
    ],
  },
  {
    id: 'cs14',
    area: 'Governança · integridade',
    titulo: 'Programa de integridade de fachada em estatal',
    contexto: 'Empresa estatal federal mantém código de conduta publicado, canal de denúncias e comitê de ética formalmente instituídos. Auditoria constatou, porém, que o canal não registra tratamento de nenhuma denúncia em dois anos, o comitê nunca se reuniu, não há avaliação de riscos de integridade e a área responsável tem um único servidor, sem orçamento. No mesmo período, a imprensa revelou esquema de fraude em contratações da empresa.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique a diferença entre conformidade formal e efetividade em programas de integridade.' },
      { n: 2, verbo: 'apontar', texto: 'aponte as deficiências do programa descrito e sua relação com a fraude revelada.' },
      { n: 3, verbo: 'propor', texto: 'proponha medidas para tornar o programa efetivo, indicando responsáveis.' },
    ],
    espelho: [
      'Conformidade formal é a existência de instrumentos no papel; efetividade é o funcionamento real — detecção, tratamento e sanção. Programa de fachada pode até agravar a responsabilização, pois demonstra ciência do dever descumprido.',
      'Canal sem tratamento, comitê inoperante, ausência de gestão de riscos e de recursos revelam que os controles não operavam; a fraude prosperou exatamente nos espaços sem monitoramento — a deficiência é causa concorrente.',
      'Dotar a área de estrutura e independência com reporte ao conselho de administração, matriz de riscos de integridade, metas e indicadores de tratamento de denúncias, auditoria periódica de efetividade, responsabilização dos administradores omissos e vinculação da alta gestão (tone at the top).',
    ],
  },
  {
    id: 'cs15',
    area: 'Sistema financeiro · inovação',
    titulo: 'Fintech operando serviço de pagamento sem autorização',
    contexto: 'Uma empresa de tecnologia passou a oferecer contas digitais e emissão de instrumento de pagamento pós-pago, atingindo rapidamente volume de transações e número de clientes que superam os limites regulamentares para operar sem autorização. Notificada, alegou ser "empresa de tecnologia, não instituição financeira", e que a exigência de autorização sufocaria a inovação e a competição no setor.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique o princípio da regulação por atividade ("mesma atividade, mesmo risco, mesma regra").' },
      { n: 2, verbo: 'analisar', texto: 'analise o argumento da empresa e o dever da autoridade no caso.' },
      { n: 3, verbo: 'discorrer', texto: 'discorra sobre como conciliar estímulo à inovação e segurança do sistema de pagamentos.' },
    ],
    espelho: [
      'Regula-se a atividade e o risco, não o rótulo societário: quem capta recursos do público e presta serviço de pagamento gera os mesmos riscos (liquidez, operacional, lavagem) e atrai as mesmas regras, independentemente de se autodenominar empresa de tecnologia.',
      'O rótulo não afasta a incidência regulatória; ultrapassados os limites, a autorização é dever, e a operação irregular sujeita a empresa a sanções e à cessação compulsória; tolerância criaria arbitragem regulatória e concorrência desleal com os autorizados.',
      'Proporcionalidade regulatória: requisitos escalonados por porte e risco, sandbox regulatório para testes controlados, prazos de adequação — inovação se protege com porta de entrada graduada, não com isenção de regra.',
    ],
  },
  {
    id: 'cs1',
    area: 'Administração pública · processo',
    titulo: 'Contratação emergencial sem justificativa registrada',
    contexto: 'Uma autarquia federal contratou, por dispensa de licitação fundada em emergência, empresa de manutenção predial, após o vencimento do contrato anterior. O processo administrativo não registra o motivo da emergência nem demonstra que a situação era imprevisível. O gestor responsável alega que a interrupção do serviço causaria prejuízo e que agiu de boa-fé. O órgão de controle interno apontou a irregularidade seis meses depois, quando o contrato já havia sido integralmente executado e pago.',
    comando: [
      { n: 1, verbo: 'conceituar', texto: 'conceitue dispensa de licitação por emergência e indique seus requisitos.' },
      { n: 2, verbo: 'apontar', texto: 'aponte as irregularidades verificadas no caso descrito.' },
      { n: 3, verbo: 'discorrer', texto: 'discorra sobre a responsabilidade do gestor diante da alegação de boa-fé.' },
    ],
    espelho: [
      'Dispensa por emergência exige situação imprevisível, risco concreto e urgência que impeça o procedimento regular; é hipótese excepcional e de interpretação restritiva.',
      'A emergência não foi demonstrada nos autos; a chamada emergência fabricada, decorrente de desídia na renovação contratual, não legitima a dispensa; falta de motivação formal do ato.',
      'Boa-fé não afasta a responsabilidade quando há inércia administrativa; distinguir responsabilidade por dano ao erário, sanção administrativa e eventual improbidade, que exige elemento subjetivo.',
    ],
  },
  {
    id: 'cs2',
    area: 'Sistema financeiro · supervisão',
    titulo: 'Instituição de pagamento com falha de controles internos',
    contexto: 'Uma instituição de pagamento autorizada a funcionar apresentou, em inspeção, ausência de rotinas efetivas de monitoramento de operações atípicas. Foram identificadas transações fracionadas de valores próximos ao limite de comunicação obrigatória, envolvendo o mesmo grupo de contas, ao longo de quatro meses, sem que houvesse qualquer comunicação ao órgão competente. A diretoria alega que o sistema automatizado estava em fase de implantação e que não houve prejuízo a clientes.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique a finalidade dos controles internos e do monitoramento de operações atípicas.' },
      { n: 2, verbo: 'identificar', texto: 'identifique as falhas da instituição diante do caso relatado.' },
      { n: 3, verbo: 'indicar', texto: 'indicar as providências cabíveis pelo órgão supervisor.' },
    ],
    espelho: [
      'Controles internos servem à integridade do sistema financeiro e à prevenção de lavagem de dinheiro; o monitoramento é obrigação permanente e independe de dano concreto.',
      'Fracionamento é indício clássico de tentativa de evasão do dever de comunicação; a implantação de sistema não suspende a obrigação, que pode ser cumprida por rotina manual.',
      'Determinação de plano de regularização, exigência de adequação de governança, processo administrativo sancionador e possibilidade de responsabilização de administradores.',
    ],
  },
  {
    id: 'cs3',
    area: 'Servidor público · regime disciplinar',
    titulo: 'Servidor que exerce atividade privada incompatível',
    contexto: 'Servidor público federal ocupante de cargo efetivo, lotado em setor de análise de pedidos de autorização, passou a prestar consultoria remunerada a empresa do setor que regula, fora do horário de expediente. Não há registro de que tenha analisado processo da própria empresa. A chefia imediata tomou conhecimento por denúncia anônima e instaurou apuração preliminar. O servidor sustenta que a atividade ocorre em horário livre e não gerou prejuízo ao serviço.',
    comando: [
      { n: 1, verbo: 'discorrer', texto: 'discorra sobre os deveres e as proibições aplicáveis ao servidor no caso.' },
      { n: 2, verbo: 'analisar', texto: 'analise se a ausência de prejuízo e o horário livre afastam a irregularidade.' },
      { n: 3, verbo: 'apontar', texto: 'aponte o procedimento adequado para a apuração.' },
    ],
    espelho: [
      'Deveres de lealdade e moralidade; vedação de atuação como procurador ou de exercício de atividade incompatível com o cargo; conflito de interesses potencial, não apenas efetivo.',
      'O conflito de interesses configura-se pelo risco de comprometimento da imparcialidade, independentemente de dano ou de horário; a ausência de prejuízo pode influir na dosimetria, não na tipicidade.',
      'Apuração preliminar, sindicância e, havendo indício de infração punível com penalidade grave, processo administrativo disciplinar com contraditório e ampla defesa.',
    ],
  },
  {
    id: 'cs4',
    area: 'Política econômica · gestão',
    titulo: 'Programa de crédito subsidiado sem avaliação de resultado',
    contexto: 'Um programa federal de crédito subsidiado a pequenos produtores foi criado por decreto e opera há três anos, com renovação orçamentária anual. Não há indicadores de resultado definidos, nem avaliação de impacto; o único dado acompanhado é o volume de crédito concedido. Um relatório de auditoria observou concentração de mais da metade dos recursos em uma única região e ausência de justificativa técnica para os critérios de elegibilidade adotados.',
    comando: [
      { n: 1, verbo: 'explicar', texto: 'explique a diferença entre indicador de produto e indicador de resultado na avaliação de políticas públicas.' },
      { n: 2, verbo: 'apontar', texto: 'aponte as falhas de desenho e de controle do programa descrito.' },
      { n: 3, verbo: 'propor', texto: 'proponha medidas de correção, indicando responsáveis.' },
    ],
    espelho: [
      'Indicador de produto mede entrega (volume concedido); indicador de resultado mede a mudança pretendida (renda, produtividade, permanência da atividade). Medir só produto impede avaliar eficácia.',
      'Ausência de teoria de mudança e de indicadores; critérios de elegibilidade sem justificativa técnica; concentração regional sem parâmetro de equidade; renovação orçamentária sem avaliação.',
      'Definição de indicadores de resultado com linha de base, avaliação externa periódica, revisão dos critérios de elegibilidade e publicação de dados — com responsáveis nomeados por etapa.',
    ],
  },
];

window.P4_TRILHA = [
  /* ===== MÓDULO P — ENQUADRAMENTO, linha por linha ===== */
  { id: 'pp1', mod: 'P', kind: 'montar', set: 'enq', movs: [1], reps: 5,
    t: 'Sua primeira linha da P4',
    d: 'Sem aula antes: sorteie um caso e escreva a delimitação — UMA frase dizendo qual é o problema juridicamente relevante, sem recontar o enunciado. Cinco acertos, sem repetir o mesmo caso em seguida.',
    dica: 'Travou? Abra "▾ como escrever este movimento" dentro da caixa. Comece com "O caso trata de…" e vá ao núcleo, não à história.' },
  { id: 'pp2', mod: 'P', kind: 'montar', set: 'enq', movs: [1, 2], reps: 5,
    t: 'Delimitação + instituto aplicável',
    d: 'Caso novo, delimitação de novo — e agora o nome técnico do que rege a situação. Duas ou três linhas que substituem a introdução inteira e já costumam pontuar no espelho.',
    dica: '"Dispensa de licitação por emergência" pontua; "normas de contratação" não. A especificidade É o ponto.' },

  /* ===== MÓDULO Q — ITEM 1: o enquadramento volta inteiro, sempre ===== */
  { id: 'pq1', mod: 'Q', kind: 'montar', set: 'item', movs: [1], item: 1, cum: ['enq'], reps: 5,
    t: 'Enquadramento inteiro + a resposta direta',
    d: 'Caso novo: refaça o enquadramento POR INTEIRO (vale acerto) e escreva a primeira frase do item 1 — respondendo LITERALMENTE ao verbo do comando, com as palavras dele.',
    dica: 'Item pede "conceitue X"? Comece com "X é…". O examinador precisa achar o ponto na primeira linha do bloco.' },
  { id: 'pq2', mod: 'Q', kind: 'montar', set: 'item', movs: [1, 2], item: 1, cum: ['enq'], reps: 5,
    t: '+ a fundamentação',
    d: 'Tudo de novo (enquadramento + resposta direta, caso novo) e agora o que sustenta a resposta: o instituto, o requisito, o princípio — NOMEADO.',
    dica: '"O princípio da motivação dos atos administrativos" vale mais que "os princípios que regem a administração". Nomear é pontuar.' },
  { id: 'pq3', mod: 'Q', kind: 'montar', set: 'item', movs: [1, 2, 3], item: 1, cum: ['enq'], reps: 5,
    t: '+ a aplicação ao caso',
    d: 'O bloco completo do item 1: resposta, fundamento e a volta ao enunciado — a subsunção que separa resposta técnica de aula de teoria.',
    dica: 'Cite o elemento concreto do caso: "o processo não registra o motivo…" é aplicação; "houve irregularidade" é conclusão sem demonstração.' },
  { id: 'pq4', mod: 'Q', kind: 'parte', parte: 'item1', cum: ['enq'], reps: 5,
    t: 'Enquadramento + item 1, sem caixas',
    d: 'Caso novo, duas caixas grandes: o enquadramento inteiro e o item 1 inteiro (marcação, resposta, fundamento, aplicação), cada um escrito de uma vez.',
    dica: 'Abra o item com a marcação: "Quanto ao primeiro item, …". Três palavras que garantem que o examinador está no bloco certo do espelho.' },

  /* ===== MÓDULO R — ITEM 2: tudo volta, sem repetir fundamentação ===== */
  { id: 'pr1', mod: 'R', kind: 'parte', parte: 'item2', cum: ['enq', 'item1'], reps: 5,
    t: 'Tudo de novo + o item 2 inteiro',
    d: 'Caso novo: enquadramento, item 1 e agora o item 2 completo — referindo o conceito "já delimitado" em vez de redefini-lo. Repetição consome as linhas que faltarão no item 3.',
    dica: 'Marcação do 2º: "No que se refere ao segundo item, …". E economia: o que o item 1 já definiu, o item 2 só usa.' },

  /* ===== MÓDULO S — ITEM 3: a peça se completa ===== */
  { id: 'ps1', mod: 'S', kind: 'parte', parte: 'item3', cum: ['enq', 'item1', 'item2'], reps: 5,
    t: 'A P4 completa, bloco por bloco',
    d: 'Cada sessão agora é uma peça inteira: enquadramento e os três itens, na ordem do comando, tudo corrigido. A P4 termina no ponto final do item 3 — sem conclusão retórica.',
    dica: 'Antes de conferir, releia só o comando e conte: cada verbo tem uma resposta identificável? É o único erro fatal da P4.' },

  /* ===== MÓDULO T — A PROVA ===== */
  { id: 'pt1', mod: 'T', kind: 'parte', parte: 'p4', reps: 5,
    t: 'A P4 numa caixa só',
    d: 'A folha da prova: enquadramento + itens 1, 2 e 3, separados por linha em branco, escritos de uma vez. Eu identifico cada bloco e corrijo.',
    dica: 'Divida as linhas pelo número de itens ANTES de começar. Item 1 luxuoso e item 3 espremido é o padrão de quem não dividiu.' },
  { id: 'pt2', mod: 'T', kind: 'parte', parte: 'p4', tempo: 90, reps: 5,
    t: 'A P4 no tempo da prova — e à mão',
    d: 'Noventa minutos no relógio — o tempo real de uma situação-problema. E como na banca: escreva À MÃO no papel, depois digite aqui para conferir — ou fotografe e use a correção de manuscrito. Cinco aprovações aqui = pronto para a banca.',
    dica: 'Reserve os últimos dez minutos para a checagem tripla: itens respondidos, aplicação presente em cada um, revisão de escrita.' },
];
