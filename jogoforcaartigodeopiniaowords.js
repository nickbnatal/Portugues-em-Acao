const wordList = [
    {
        word: "politica",
        hint: "Ciencia que estuda o governo e a organizacao das sociedades humanas."
    },
    {
        word: "censura",
        hint: "Ato de controlar e limitar a liberdade de expressao e a disseminacao de informacoes."
    },
    {
        word: "sustentabilidade",
        hint: "Pratica de usar recursos de maneira que eles sejam preservados para o futuro."
    },
    {
        word: "globalizacao",
        hint: "Processo de integracao mundial que afeta economias, culturas e politicas."
    },
    {
        word: "democracia",
        hint: "Sistema de governo onde o poder e exercido pelo povo, direta ou indiretamente."
    },
    {
        word: "corrupcao",
        hint: "Uso de poder para obter beneficios pessoais de forma ilegal ou desonesta."
    },
    {
        word: "liberdade",
        hint: "Direito de agir segundo sua propria vontade, dentro dos limites da lei."
    },
    {
        word: "igualdade",
        hint: "Condicao de ter os mesmos direitos e oportunidades para todos."
    },
    {
        word: "educacao",
        hint: "Processo de ensinar e aprender, fundamental para o desenvolvimento pessoal e social."
    },
    {
        word: "etica",
        hint: "Estudo dos principios que orientam o comportamento humano em sociedade."
    },
    {
        word: "preconceito",
        hint: "Opiniao formada sem conhecimento ou compreensao, geralmente negativa."
    },
    {
        word: "tecnologia",
        hint: "Aplicacao de conhecimentos cientificos para resolver problemas praticos."
    },
    {
        word: "cidadania",
        hint: "Conjunto de direitos e deveres dos individuos em uma sociedade."
    },
    {
        word: "justica",
        hint: "Principio moral e legal de dar a cada um o que lhe e devido."
    },
    {
        word: "diversidade",
        hint: "Variedade de elementos diferentes, especialmente em culturas e etnias."
    },
    {
        word: "tolerancia",
        hint: "Capacidade de respeitar opinioes e comportamentos diferentes dos proprios."
    },
    {
        word: "privacidade",
        hint: "Direito de manter informacoes pessoais longe do conhecimento publico."
    },
    {
        word: "comunicacao",
        hint: "Processo de transmitir informacoes e ideias entre individuos."
    },
    {
        word: "saude",
        hint: "Estado de completo bem-estar fisico, mental e social."
    },
    {
        word: "violencia",
        hint: "Uso de forca para causar danos ou intimidacao."
    },
    {
        word: "trabalho",
        hint: "Atividade realizada com o objetivo de produzir bens ou servicos."
    },
    {
        word: "cultura",
        hint: "Conjunto de costumes, crencas, arte e habitos de uma sociedade."
    },
    {
        word: "meio ambiente",
        hint: "Conjunto de condicoes naturais que influenciam a vida no planeta."
    },
    {
        word: "migracao",
        hint: "Deslocamento de pessoas de um lugar para outro, geralmente em busca de melhores condicoes de vida."
    },
    {
        word: "racismo",
        hint: "Discriminacao ou preconceito baseado na raca ou etnia."
    },
    {
        word: "economia",
        hint: "Ciencia que estuda a producao, distribuicao e consumo de bens e servicos."
    },
    {
        word: "patriotismo",
        hint: "Amor e devocao ao proprio pais."
    },
    {
        word: "pluralismo",
        hint: "Reconhecimento e coexistencia de diferentes grupos e ideias em uma sociedade."
    },
    {
        word: "opiniao",
        hint: "Julgamento ou ponto de vista sobre um assunto."
    },
    {
        word: "seguranca",
        hint: "Estado de estar livre de perigo ou risco."
    },
    {
        word: "liberdade de expressao",
        hint: "Direito de manifestar livremente opinioes e ideias."
    },
    {
        word: "empatia",
        hint: "Capacidade de compreender e compartilhar os sentimentos dos outros."
    },
    {
        word: "discriminacao",
        hint: "Tratamento desfavoravel dado a uma pessoa com base em caracteristicas especificas."
    },
    {
        word: "desigualdade",
        hint: "Diferenca na distribuicao de recursos e oportunidades entre grupos."
    },
    {
        word: "responsabilidade",
        hint: "Dever de responder pelas proprias acoes e suas consequencias."
    },
    {
        word: "empoderamento",
        hint: "Processo de aumentar a capacidade de individuos ou grupos de fazer escolhas e transforma-las em acoes."
    },
    {
        word: "inovacao",
        hint: "Ato de introduzir novas ideias, metodos ou produtos."
    },
    {
        word: "inclusao",
        hint: "Acao de integrar todos os individuos em uma sociedade, independentemente de suas diferencas."
    },
    {
        word: "pobreza",
        hint: "Condicao de falta de recursos materiais e economicos."
    },
    {
        word: "ideologia",
        hint: "Conjunto de ideias que orientam um movimento politico ou social."
    },
    {
        word: "debate",
        hint: "Discussao formal sobre um tema em que diferentes pontos de vista sao apresentados."
    },
    {
        word: "polarizacao",
        hint: "Divisao acentuada em duas ou mais posicoes opostas em um debate ou sociedade."
    },
    {
        word: "regulacao",
        hint: "Estabelecimento de normas para controlar ou administrar atividades."
    },
    {
        word: "fakenews",
        hint: "Noticias falsas ou enganosas disseminadas para desinformar."
    },
    {
        word: "consumismo",
        hint: "Ato de adquirir bens e servicos em excesso."
    },
    {
        word: "ciberseguranca",
        hint: "Medidas tomadas para proteger sistemas e dados contra ataques digitais."
    },
    {
        word: "solidariedade",
        hint: "Apoio mutuo entre pessoas ou grupos com um objetivo comum."
    },
    {
        word: "populismo",
        hint: "Estrategia politica que busca o apoio das massas, geralmente atraves de promessas simplistas."
    },
    {
        word: "imigracao",
        hint: "Entrada de pessoas em um pais com o objetivo de viver ou trabalhar."
    },
    {
        word: "bioetica",
        hint: "Estudo das implicacoes eticas das praticas e avancos biotecnologicos."
    },
    {
        word: "voluntariado",
        hint: "Atividade nao remunerada com a intencao de ajudar ou melhorar a sociedade."
    },
    {
        word: "multiculturalismo",
        hint: "Convivencia de diversas culturas em uma sociedade."
    },
    {
        word: "transparencia",
        hint: "Pratica de ser aberto e claro sobre as acoes e decisoes, especialmente no governo e nos negocios."
    },
    {
        word: "resiliencia",
        hint: "Capacidade de se recuperar ou adaptar diante de dificuldades ou mudancas."
    },
    {
        word: "autenticidade",
        hint: "Qualidade de ser genuino, verdadeiro ou fiel a si mesmo."
    },
    {
        word: "alienacao",
        hint: "Estado de distanciamento ou estranhamento em relacao a algo ou alguem."
    },
    {
        word: "polarizacao",
        hint: "Divisao acentuada em duas ou mais posicoes opostas em um debate ou sociedade."
    },
    {
        word: "sociabilidade",
        hint: "Capacidade de se relacionar bem com os outros em um contexto social."
    },
    {
        word: "biotecnologia",
        hint: "Uso de processos biologicos e sistemas para desenvolver produtos tecnologicos."
    },
    {
        word: "cosmopolitismo",
        hint: "Visao de que todas as pessoas pertencem a uma comunidade global."
    },
    {
        word: "midia",
        hint: "Meios de comunicacao que disseminam informacao ao publico."
    },
    {
        word: "analfabetismo",
        hint: "Incapacidade de ler e escrever."
    },
    {
        word: "autoritarismo",
        hint: "Sistema de governo em que o poder esta concentrado em um lider ou grupo sem responsabilidade perante o povo."
    },
    {
        word: "segregacao",
        hint: "Separacao de grupos de pessoas com base em caracteristicas como raca ou religiao."
    },
    {
        word: "urbanizacao",
        hint: "Processo de crescimento das cidades e deslocamento de populacoes rurais para areas urbanas."
    }
  ];
  