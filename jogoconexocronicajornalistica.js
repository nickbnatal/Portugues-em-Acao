// Função para embaralhar um array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Lista de todos os contextos disponíveis
const todosContextos = [
    { 
        palavras: ["Investigação", "Reportagem", "Entrevista", "Jornalismo"], 
        titulo: "Aspectos do jornalismo.",
        descricao: "Este contexto destaca diferentes aspectos do jornalismo, incluindo investigação, reportagem, entrevista e práticas jornalísticas, ressaltando a importância da busca pela verdade e da divulgação de informações precisas." 
    },
    { 
        palavras: ["Narrador", "Personagem", "Cenário", "Enredo"], 
        titulo: "Elementos narrativos.",
        descricao: "Explora elementos essenciais da narrativa, como o narrador, personagens, cenários e enredo, enfatizando a construção de histórias e a criação de mundos ficcionais ou reais." 
    },
    { 
        palavras: ["Título", "Introdução", "Desenvolvimento", "Conclusão"], 
        titulo: "Estrutura textual.",
        descricao: "Foca na estrutura de um texto jornalístico ou crônica, destacando os diferentes estágios da escrita, desde a escolha do título até a introdução, desenvolvimento do tema e conclusão." 
    },
    { 
        palavras: ["Fato", "Opinião", "Citação", "Argumentação"], 
        titulo: "Componentes da argumentação.",
        descricao: "Este contexto aborda os componentes essenciais da argumentação, incluindo fatos, opiniões, citações e a construção de argumentos sólidos em um texto jornalístico ou crônica." 
    },
    { 
        palavras: ["Estilo", "Tom", "Voz", "Registro"], 
        titulo: "Aspectos de estilo e voz.",
        descricao: "Explora elementos de estilo e voz na escrita jornalística ou crônica, incluindo o tom do texto, a voz do autor e o registro linguístico, que influenciam a forma como a mensagem é transmitida." 
    },
    { 
        palavras: ["Entendimento", "Análise", "Interpretação", "Contextualização"], 
        titulo: "Processos de compreensão.",
        descricao: "Enfoca os processos de entendimento, análise, interpretação e contextualização de informações em textos jornalísticos ou crônicas, ressaltando a importância de examinar o conteúdo dentro de seu contexto." 
    },
    { 
        palavras: ["Fonte", "Credibilidade", "Verificação", "Checagem"], 
        titulo: "Credibilidade da informação.",
        descricao: "Aborda a importância de fontes confiáveis, credibilidade da informação, verificação de fatos e processos de checagem em textos jornalísticos ou crônicas, visando garantir a precisão e confiabilidade das informações." 
    },
    { 
        palavras: ["Ética", "Imparcialidade", "Responsabilidade", "Transparência"], 
        titulo: "Princípios éticos no jornalismo.",
        descricao: "Destaca os princípios éticos fundamentais no jornalismo, incluindo a imparcialidade, responsabilidade, transparência e respeito pelos direitos individuais, que orientam a conduta dos profissionais e a produção de conteúdo jornalístico." 
    },
    { 
        palavras: ["Impacto", "Repercussão", "Influência", "Alcance"], 
        titulo: "Impacto da mídia.",
        descricao: "Explora o impacto da mídia, suas repercussões na sociedade, influência sobre a opinião pública e alcance das mensagens veiculadas em textos jornalísticos ou crônicas, destacando seu papel na formação de ideias e na moldagem de percepções." 
    },
    { 
        palavras: ["Verdade", "Objetividade", "Precisão", "Transparência"], 
        titulo: "Busca pela verdade.",
        descricao: "Foca na busca pela verdade jornalística, enfatizando a importância da objetividade, precisão, transparência e honestidade na divulgação de informações em textos jornalísticos ou crônicas." 
    },
    { 
        palavras: ["Leitor", "Engajamento", "Interatividade", "Feedback"], 
        titulo: "Interatividade com o público.",
        descricao: "Aborda a interatividade com o público leitor, o engajamento dos leitores com o conteúdo, a importância do feedback e a comunicação bidirecional em textos jornalísticos ou crônicas, visando estabelecer uma relação mais próxima e participativa." 
    },
    { 
        palavras: ["Edição", "Revisão", "Diagramação", "Publicação"], 
        titulo: "Processos editoriais.",
        descricao: "Explora os processos editoriais envolvidos na produção de textos jornalísticos ou crônicas, incluindo edição, revisão, diagramação e publicação, que visam garantir a qualidade e apresentação adequada do conteúdo." 
    },
    { 
        palavras: ["Fonte", "Direitos autorais", "Plágio", "Referências"], 
        titulo: "Respeito aos direitos autorais.",
        descricao: "Destaca a importância do respeito aos direitos autorais, a citação adequada de fontes, a prevenção do plágio e a inclusão de referências em textos jornalísticos ou crônicas, garantindo o reconhecimento e a integridade intelectual." 
    },
    { 
        palavras: ["Notícia", "Reportagem", "Entrevista", "Análise"], 
        titulo: "Gêneros jornalísticos.",
        descricao: "Explora diferentes gêneros jornalísticos, incluindo notícia, reportagem, entrevista e análise, destacando suas características e objetivos na transmissão de informações em textos jornalísticos ou crônicas." 
    },
    { 
        palavras: ["Fonte", "Primária", "Secundária", "Terciária"], 
        titulo: "Tipos de fontes.",
        descricao: "Foca nos diferentes tipos de fontes utilizadas em textos jornalísticos ou crônicas, incluindo fontes primárias, secundárias e terciárias, e sua relevância na obtenção e verificação de informações." 
    },
    { 
        palavras: ["Discurso", "Disputa", "Diálogo", "Debate"], 
        titulo: "Discurso e debate.",
        descricao: "Explora a natureza do discurso, disputa, diálogo e debate na esfera pública, destacando a importância da comunicação e troca de ideias para o enriquecimento do debate democrático." 
    },
    { 
        palavras: ["Citação", "Referência", "Bibliografia", "Fonte"], 
        titulo: "Citação e referências bibliográficas.",
        descricao: "Enfoca a importância da citação adequada de fontes, a inclusão de referências e a elaboração de bibliografias em textos jornalísticos ou crônicas, visando dar crédito às fontes utilizadas e permitir a verificação da informação."
    },
    { 
        palavras: ["Objetividade", "Subjetividade", "Neutralidade", "Imparcialidade"], 
        titulo: "Perspectivas na escrita jornalística.",
        descricao: "Aborda as nuances entre objetividade e subjetividade na escrita jornalística, destacando a busca pela neutralidade e imparcialidade na apresentação dos fatos, mesmo diante das diferentes perspectivas."
    },
    { 
        palavras: ["Informação", "Conhecimento", "Sabedoria", "Inteligência"], 
        titulo: "Etapas do entendimento.",
        descricao: "Foca nas diferentes etapas do processo de entendimento, desde a obtenção da informação até a construção do conhecimento, sabedoria e inteligência a partir da análise e reflexão sobre os dados."
    },
    { 
        palavras: ["Ética", "Moral", "Responsabilidade", "Consciência"], 
        titulo: "Ética e responsabilidade.",
        descricao: "Explora os princípios éticos e morais que guiam a conduta dos profissionais de jornalismo, ressaltando a importância da responsabilidade e consciência sobre o impacto das informações veiculadas."
    },
    { 
        palavras: ["Inovação", "Tecnologia", "Digitalização", "Transformação"], 
        titulo: "Tecnologia na mídia.",
        descricao: "Aborda os avanços tecnológicos e a digitalização na mídia, destacando a inovação e transformação dos processos de produção, distribuição e consumo de conteúdo jornalístico e crônicas."
    },
    { 
        palavras: ["Audácia", "Coragem", "Perspicácia", "Determinação"], 
        titulo: "Qualidades do jornalista.",
        descricao: "Foca nas qualidades essenciais do jornalista, incluindo audácia, coragem, perspicácia e determinação, que são fundamentais para investigar, reportar e transmitir informações de forma eficaz."
    },
    { 
        palavras: ["Imagem", "Fotografia", "Ilustração", "Edição visual"], 
        titulo: "Elementos visuais na mídia.",
        descricao: "Explora o papel das imagens, fotografia, ilustrações e edição visual na complementação e enriquecimento do conteúdo jornalístico ou crônicas, oferecendo uma perspectiva visual aos leitores."
    },
    { 
        palavras: ["Entropia", "Caos", "Complexidade", "Ordem"], 
        titulo: "Dinâmicas sociais.",
        descricao: "Aborda as dinâmicas sociais, incluindo entropia, caos, complexidade e ordem, que influenciam a produção e recepção de informações na sociedade contemporânea."
    },
    { 
        palavras: ["Narrativa", "Factual", "Opinativa", "Interpretativa"], 
        titulo: "Abordagens na escrita.",
        descricao: "Foca nas diferentes abordagens de escrita, incluindo narrativa, factual, opinativa e interpretativa, que permitem uma variedade de estilos e perspectivas na apresentação de informações."
    },
    { 
        palavras: ["Diário", "Crônica", "Editorial", "Ensaio"], 
        titulo: "Gêneros de escrita.",
        descricao: "Explora diversos gêneros de escrita, como diário, crônica, editorial e ensaio, destacando suas características e finalidades na comunicação e expressão de ideias."
    }
];



// Embaralha todos os contextos e seleciona os primeiros 4
const contextosDoJogo = shuffleArray(todosContextos).slice(0, 4);

// Lista para armazenar as palavras selecionadas
let palavrasSelecionadas = [];

// Função chamada ao clicar em uma palavra disponível
function selecionarPalavra(palavra) {
    const palavraElement = document.getElementById(`btn${palavra}`);

    // Se a palavra já formou um contexto, não faz nada
    if (palavraElement.classList.contains('palavra-btn-contexto')) {
        return;
    }

    // Adiciona a classe de seleção para destacar a palavra
    palavraElement.classList.toggle('palavra-btn-selected');

    // Adiciona ou remove a palavra da lista de palavras selecionadas
    const index = palavrasSelecionadas.indexOf(palavra);
    if (index === -1) {
        palavrasSelecionadas.push(palavra);
    } else {
        palavrasSelecionadas.splice(index, 1);
    }

    // Se já houver 4 palavras selecionadas, verifica o contexto
    if (palavrasSelecionadas.length === 4) {
        // Faz uma cópia das últimas 4 palavras selecionadas
        const ultimasQuatroSelecionadas = palavrasSelecionadas.slice(-4);

        const contextoEncontrado = verificaContexto(ultimasQuatroSelecionadas, contextosDoJogo);

        // Se formou um contexto, cria um card com a descrição e as palavras
        if (contextoEncontrado) {
            const cardContexto = document.createElement('div');
            cardContexto.className = 'card-contexto';

            // Adiciona o título específico do contexto
            const tituloElement = document.createElement('h2');
            tituloElement.textContent = contextoEncontrado.titulo;
            cardContexto.appendChild(tituloElement);

            // Adiciona as palavras ao card do contexto
            contextoEncontrado.palavras.forEach(palavra => {
                const palavraElement = document.getElementById(`btn${palavra}`);
                palavraElement.classList.add('palavra-btn-contexto');
                cardContexto.appendChild(palavraElement);
            });

            // Adiciona a descrição
            const descricaoElement = document.createElement('p');
            descricaoElement.textContent = contextoEncontrado.descricao;
            cardContexto.appendChild(descricaoElement);

            // Adiciona o card do contexto ao topo do elemento de contextos
            document.getElementById('contextos').insertBefore(cardContexto, document.getElementById('contextos').firstChild);
        } else {
            // Se não formou um contexto, faz os últimos 4 botões piscarem em vermelho
            ultimasQuatroSelecionadas.forEach(palavra => {
                const palavraElement = document.getElementById(`btn${palavra}`);
                palavraElement.classList.add('palavra-btn-error');
            });

            // Define um timeout para remover a classe de erro após 500 milissegundos (meio segundo)
            setTimeout(() => {
                ultimasQuatroSelecionadas.forEach(palavra => {
                    const palavraElement = document.getElementById(`btn${palavra}`);
                    palavraElement.classList.remove('palavra-btn-error');
                });
            }, 500);
        }

        // Limpa a lista de palavras selecionadas
        palavrasSelecionadas.forEach(palavra => {
            const palavraElement = document.getElementById(`btn${palavra}`);
            palavraElement.classList.remove('palavra-btn-selected');
        });
        palavrasSelecionadas = [];
    }
}

// Função para verificar se 4 palavras fazem parte do contexto
function verificaContexto(palavrasSelecionadas, contextos) {
    // Verifica se cada conjunto de palavras forma um contexto
    return contextos.find(contexto => palavrasSelecionadas.every(palavra => contexto.palavras.includes(palavra)));
}

// Inicializa os botões com as palavras disponíveis
const palavrasDisponiveisElement = document.getElementById('palavrasDisponiveis');
const palavrasTodas = contextosDoJogo.flatMap(contexto => contexto.palavras);
shuffleArray(palavrasTodas);
palavrasTodas.forEach(palavra => {
    const botaoPalavra = document.createElement('button');
    botaoPalavra.textContent = palavra;
    botaoPalavra.id = `btn${palavra}`;
    botaoPalavra.className = 'palavra-btn';
    botaoPalavra.onclick = () => selecionarPalavra(palavra);
    palavrasDisponiveisElement.appendChild(botaoPalavra);
});

// Se formou um contexto, cria um card com a descrição e as palavras
const contextoEncontrado = verificaContexto(palavrasTodas.slice(0, 4), contextosDoJogo);
if (contextoEncontrado) {
    const cardContexto = document.createElement('div');
    cardContexto.className = 'card-contexto';

    // Adiciona o título
    const tituloElement = document.createElement('h2');
    tituloElement.textContent = 'Título do Contexto';
    cardContexto.appendChild(tituloElement);

    // Adiciona as palavras ao card do contexto
    contextoEncontrado.palavras.forEach(palavra => {
        const palavraElement = document.getElementById(`btn${palavra}`);
        palavraElement.classList.add('palavra-btn-contexto');
        cardContexto.appendChild(palavraElement);
    });

    // Adiciona a descrição
    const descricaoElement = document.createElement('p');
    descricaoElement.textContent = contextoEncontrado.descricao;
    cardContexto.appendChild(descricaoElement);

    // Adiciona o card do contexto ao topo do elemento de contextos
    document.getElementById('contextos').insertBefore(cardContexto, document.getElementById('contextos').firstChild);
}
