const wordList = [
    {
        word: "oralidade",
        hint: "Transmissão de histórias, tradições e conhecimentos através da fala e da performance."
    },
    {
        word: "mitologia",
        hint: "Conjunto de mitos e lendas que explicam a origem do mundo e dos seres humanos em diversas culturas africanas."
    },
    {
        word: "negritude",
        hint: "Movimento literário e cultural que celebra a identidade e a cultura africana."
    },
    {
        word: "panafricanismo",
        hint: "Ideologia que promove a união e solidariedade entre todos os povos de ascendência africana."
    },
    {
        word: "descolonizacao",
        hint: "Processo de independência das nações africanas do domínio colonial europeu."
    },
    {
        word: "identidade",
        hint: "Sentido de pertença e autodefinição com base em raízes culturais e étnicas africanas."
    },
    {
        word: "quilombos",
        hint: "Comunidades formadas por escravos fugitivos que resistiam à opressão colonial."
    },
    {
        word: "griots",
        hint: "Contadores de histórias tradicionais e guardiões da história oral em várias culturas africanas."
    },
    {
        word: "ubuntu",
        hint: "Filosofia africana que enfatiza a interconexão humana e a coletividade."
    },
    {
        word: "afrocentrismo",
        hint: "Perspectiva que centraliza as experiências e valores africanos na análise e compreensão do mundo."
    },
    {
        word: "bantu",
        hint: "Grande grupo etnolinguístico de povos africanos com ricas tradições culturais e literárias."
    },
    {
        word: "fabulas",
        hint: "Histórias com lições morais, frequentemente envolvendo animais com características humanas."
    },
    {
        word: "magia",
        hint: "Elemento comum na literatura africana que entrelaça o real e o sobrenatural."
    },
    {
        word: "xamanismo",
        hint: "Prática espiritual que conecta os humanos ao mundo espiritual através de rituais e cura."
    },
    {
        word: "esperanca",
        hint: "Tema recorrente nas narrativas africanas, refletindo a resiliência e a luta por um futuro melhor."
    },
    {
        word: "diaspora",
        hint: "Dispersão dos povos africanos pelo mundo e as suas contribuições culturais e literárias."
    },
    {
        word: "colonialismo",
        hint: "Dominação e exploração de nações africanas por potências europeias, influenciando profundamente a literatura."
    },
    {
        word: "realismomagico",
        hint: "Estilo literário que combina elementos realistas e fantásticos, presente em obras de autores africanos."
    },
    {
        word: "mitos",
        hint: "Narrativas tradicionais que explicam fenômenos naturais e sociais nas culturas africanas."
    },
    {
        word: "povos",
        hint: "Diversidade de tribos e nações que compõem a rica tapeçaria cultural da África."
    },
    {
        word: "sabedoria",
        hint: "Conhecimento acumulado passado de geração em geração através de provérbios e histórias."
    },
    {
        word: "contadores",
        hint: "Pessoas responsáveis por manter e narrar as histórias e tradições de suas comunidades."
    },
    {
        word: "ancestralidade",
        hint: "Importância dos ancestrais e da linhagem familiar na cultura e literatura africana."
    },
    {
        word: "resistencia",
        hint: "Atos de oposição ao colonialismo e à opressão, frequentemente retratados na literatura africana."
    },
    {
        word: "exilio",
        hint: "Tema de deslocamento e separação da terra natal, comum em muitos textos africanos."
    },
    {
        word: "traducao",
        hint: "Processo de adaptar obras literárias africanas a outras línguas e contextos culturais."
    },
    {
        word: "cerimonia",
        hint: "Rituais e celebrações que desempenham papéis centrais na vida comunitária e na literatura."
    },
    {
        word: "narrativa",
        hint: "Estrutura e estilo de contar histórias na tradição literária africana."
    },
    {
        word: "ritual",
        hint: "Práticas culturais e espirituais que reforçam a coesão social e a identidade comunitária."
    },
    {
        word: "historia",
        hint: "Narrativa dos eventos e tradições passadas de uma comunidade ou nação."
    },
    {
        word: "epico",
        hint: "Longos poemas narrativos que contam as façanhas de heróis e deuses."
    },
    {
        word: "dialeto",
        hint: "Variedades regionais de línguas faladas em diferentes partes da África."
    },
    {
        word: "escravatura",
        hint: "Prática histórica que teve impacto profundo na literatura e na cultura africana."
    },
    {
        word: "cosmogonia",
        hint: "Estudos sobre as origens e a estrutura do universo, presente em mitos africanos."
    },
    {
        word: "epopeia",
        hint: "Poema longo que narra feitos heroicos e é uma parte importante da tradição literária africana."
    },
    {
        word: "tradicao",
        hint: "Costumes e práticas transmitidos ao longo das gerações na cultura africana."
    },
    {
        word: "musica",
        hint: "Forma de expressão artística que frequentemente acompanha a narração de histórias na África."
    },
    {
        word: "desafio",
        hint: "Obstáculos enfrentados pelos personagens nas narrativas africanas, representando a luta contra adversidades."
    },
    {
        word: "proverbio",
        hint: "Frase curta e popular que transmite sabedoria e verdades sobre a vida."
    },
    {
        word: "tabu",
        hint: "Práticas proibidas ou restritas dentro de uma cultura, muitas vezes exploradas na literatura."
    },
    {
        word: "tradicaooral",
        hint: "Forma de transmissão de cultura e conhecimento através da fala e da performance."
    },
    {
        word: "dinastias",
        hint: "Linhas de governantes que desempenharam papéis significativos na história e na literatura africana."
    },
    {
        word: "guerra",
        hint: "Conflitos retratados na literatura africana, refletindo lutas históricas e contemporâneas."
    },
    {
        word: "cultura",
        hint: "Conjunto de costumes, crenças e práticas que definem as diversas comunidades africanas."
    },
    {
        word: "cerimonial",
        hint: "Atividades ritualísticas que são parte integrante das tradições culturais africanas."
    },
    {
        word: "geografia",
        hint: "Características físicas da África que influenciam a vida e as narrativas das suas comunidades."
    },
    {
        word: "heroismo",
        hint: "Feitos extraordinários de bravura e coragem, comuns nas histórias épicas africanas."
    },
    {
        word: "cosmologia",
        hint: "Estudo das origens e do desenvolvimento do universo, frequentemente explorado em mitos africanos."
    },
    {
        word: "camaradagem",
        hint: "Relação de amizade e solidariedade frequentemente representada na literatura africana."
    },
    {
        word: "inspiracao",
        hint: "Motivação e influência criativa derivada de figuras e histórias africanas."
    },
    {
        word: "melancolia",
        hint: "Sentimento de tristeza ou nostalgia, presente em muitas obras literárias africanas."
    },
    {
        word: "renascenca",
        hint: "Revitalização das artes e das letras africanas, especialmente após o período colonial."
    },
    {
        word: "realidade",
        hint: "Retrato autêntico das experiências vividas nas comunidades africanas."
    }
];
