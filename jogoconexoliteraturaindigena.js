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
        palavras: ["Mito", "Tradição", "Cultura", "Identidade"], 
        titulo: "Narrativas e Temáticas da Literatura Indígena",
        descricao: "Este contexto explora as narrativas e temáticas centrais da literatura indígena, incluindo mitos, tradições culturais e identidade. Destaca como essas histórias refletem a visão de mundo e os valores das comunidades indígenas, proporcionando uma perspectiva rica e autêntica de suas experiências e crenças."
    },
    { 
        palavras: ["Língua", "Dialeto", "Tradução", "Preservação"], 
        titulo: "A Diversidade Linguística na Literatura Indígena",
        descricao: "Aborda a diversidade linguística na literatura indígena, incluindo o uso de diferentes línguas e dialetos, os desafios da tradução e os esforços para a preservação das línguas indígenas através da literatura. Enfatiza a importância da linguagem na transmissão de conhecimento e cultura."
    },
    { 
        palavras: ["Ecologia", "Terra", "Espírito", "Sustentabilidade"], 
        titulo: "Conexão com a Natureza na Literatura Indígena",
        descricao: "Este contexto destaca a profunda relação entre os povos indígenas e a natureza, conforme retratada na literatura indígena. Explora temas como ecologia, espiritualidade e sustentabilidade, mostrando como esses elementos são integrados nas narrativas e práticas culturais."
    },
    { 
        palavras: ["Resistência", "Colonialismo", "Resiliência", "Autodeterminação"], 
        titulo: "Resistência e Resiliência na Literatura Indígena",
        descricao: "Aborda temas de resistência ao colonialismo e resiliência cultural na literatura indígena. Explora como as obras literárias refletem a luta pela autodeterminação, preservação da identidade cultural e os desafios enfrentados pelas comunidades indígenas ao longo da história."
    },
    { 
        palavras: ["Oralidade", "Tradição Oral", "Narrativa", "Transmissão"], 
        titulo: "A Importância da Oralidade na Literatura Indígena",
        descricao: "Explora a importância da tradição oral na literatura indígena, incluindo a narrativa e a transmissão de conhecimentos através de histórias contadas. Destaca como a oralidade desempenha um papel crucial na preservação e continuidade das culturas indígenas."
    },
    { 
        palavras: ["Espiritualidade", "Ritos", "Crenças", "Cosmovisão"], 
        titulo: "Espiritualidade e Ritos na Literatura Indígena",
        descricao: "Este contexto enfoca a espiritualidade, ritos e crenças refletidos na literatura indígena. Explora como esses aspectos são integrados nas histórias, oferecendo uma compreensão profunda da cosmovisão indígena e sua conexão com o sagrado."
    },
    { 
        palavras: ["Gêneros", "Poesia", "Conto", "Mito"], 
        titulo: "Diversidade de Gêneros na Literatura Indígena",
        descricao: "Aborda a diversidade de gêneros literários na literatura indígena, incluindo poesia, contos e mitos. Destaca como cada gênero contribui para a expressão cultural e a narrativa das experiências e valores indígenas."
    },
    { 
        palavras: ["Identidade", "Cultura", "Comunidade", "História"], 
        titulo: "A Formação da Identidade na Literatura Indígena",
        descricao: "Foca na formação da identidade individual e coletiva através da literatura indígena. Explora como a literatura serve como um meio de afirmar a cultura, fortalecer os laços comunitários e registrar a história e as experiências das comunidades indígenas."
    },
    { 
        palavras: ["Contemporânea", "Moderna", "Influências", "Adaptação"], 
        titulo: "Literatura Indígena Contemporânea",
        descricao: "Explora a literatura indígena contemporânea e moderna, suas influências e adaptações ao mundo atual. Analisa como os escritores indígenas estão incorporando novas perspectivas e desafios nas suas obras, mantendo viva a essência da tradição."
    },
    { 
        palavras: ["Papel", "Autores", "Voz", "Representação"], 
        titulo: "O Papel dos Autores Indígenas",
        descricao: "Este contexto aborda o papel crucial dos autores indígenas na preservação e promoção da literatura indígena. Explora como esses autores dão voz às suas comunidades, representando suas realidades e contribuindo para uma maior visibilidade e reconhecimento da literatura indígena."
    },
    { 
        palavras: ["Tradição", "Modernidade", "Influência", "Transformação"], 
        titulo: "Tradição e Modernidade na Literatura Indígena",
        descricao: "Foca na interação entre tradição e modernidade na literatura indígena. Examina como as tradições culturais são mantidas, reinterpretadas e transformadas na literatura contemporânea, refletindo a dinâmica das culturas indígenas no mundo moderno."
    },
    { 
        palavras: ["Desafios", "Educação", "Publicação", "Acesso"], 
        titulo: "Desafios na Literatura Indígena",
        descricao: "Explora os desafios enfrentados na criação, publicação e disseminação da literatura indígena, incluindo barreiras educacionais, de acesso e de mercado. Destaca as iniciativas e esforços para superar essas dificuldades e promover a literatura indígena."
    },
    { 
        palavras: ["Mitologia", "Criação", "Ancestrais", "Lendas"], 
        titulo: "Mitologia e Lendas na Literatura Indígena",
        descricao: "Este contexto examina a mitologia e lendas indígenas, explorando histórias de criação, figuras ancestrais e seres míticos. Essas narrativas oferecem uma visão profunda das crenças e valores que moldam a vida e o pensamento das comunidades indígenas."
    },
    { 
        palavras: ["Infantil", "Juvenil", "Educação", "Transmissão"], 
        titulo: "Literatura Indígena para Crianças e Jovens",
        descricao: "Aborda a literatura indígena voltada para o público infantil e juvenil, destacando seu papel na educação e na transmissão de valores culturais desde cedo. Examina como essas obras são usadas para ensinar tradições e histórias às novas gerações."
    },
    { 
        palavras: ["Heroísmo", "Aventura", "Cultura", "Tradição"], 
        titulo: "Heróis e Aventuras na Literatura Indígena",
        descricao: "Explora histórias de heroísmo e aventura na literatura indígena, destacando como essas narrativas refletem a cultura e as tradições das comunidades indígenas. Examina as figuras heroicas e suas jornadas, que inspiram e educam."
    },
    { 
        palavras: ["Simbologia", "Metáfora", "Alegoria", "Significado"], 
        titulo: "Simbologia e Metáforas na Literatura Indígena",
        descricao: "Aborda o uso de simbologia, metáforas e alegorias na literatura indígena para transmitir significados profundos e ensinamentos culturais. Explora como esses elementos enriquecem as histórias e oferecem camadas adicionais de interpretação."
    },
    { 
        palavras: ["Conflito", "Relações", "Território", "História"], 
        titulo: "Conflito e Território na Literatura Indígena",
        descricao: "Explora como os conflitos e as relações territoriais são representados na literatura indígena. Examina as narrativas sobre disputas por terras, a importância dos territórios sagrados e a luta pela preservação do espaço vital das comunidades."
    },
    { 
        palavras: ["Mulheres", "Perspectiva Feminina", "Papel", "Empoderamento"], 
        titulo: "Perspectivas Femininas na Literatura Indígena",
        descricao: "Este contexto enfoca as contribuições e perspectivas das mulheres na literatura indígena. Destaca o papel e a representação das mulheres, suas histórias de empoderamento e a luta por igualdade dentro das tradições e culturas indígenas."
    },
    { 
        palavras: ["Rituais", "Celebridades", "Tradições", "Ciclo da Vida"], 
        titulo: "Rituais e Celebrações na Literatura Indígena",
        descricao: "Aborda os rituais e celebrações retratados na literatura indígena, explorando como esses eventos marcam o ciclo da vida e a conexão com a comunidade e o espiritual. Destaca as tradições que moldam as identidades culturais e sociais."
    },
    { 
        palavras: ["Etnografia", "Relato", "Documentação", "Observação"], 
        titulo: "Etnografia na Literatura Indígena",
        descricao: "Explora o uso de técnicas etnográficas na literatura indígena para documentar e relatar aspectos da vida e cultura das comunidades indígenas. Examina como essas obras servem como registros valiosos das tradições e práticas culturais."
    },
    { 
        palavras: ["História", "Memória", "Testemunho", "Relatos"], 
        titulo: "História e Memória na Literatura Indígena",
        descricao: "Foca em como a história e a memória coletiva são preservadas e transmitidas na literatura indígena. Explora os relatos históricos e testemunhos que documentam as experiências e eventos significativos das comunidades indígenas."
    },
    { 
        palavras: ["Globalização", "Influência Externa", "Identidade", "Cultura"], 
        titulo: "Literatura Indígena e Globalização",
        descricao: "Examina o impacto da globalização na literatura indígena, explorando como influências externas afetam a identidade e a cultura indígena. Analisa as respostas literárias à modernidade e às mudanças culturais induzidas pela globalização."
    },
    { 
        palavras: ["Ensino", "Currículo", "Educação", "Inclusão"], 
        titulo: "Literatura Indígena no Ensino e Currículo",
        descricao: "Aborda a inclusão da literatura indígena no currículo escolar e universitário, destacando sua importância na educação e na promoção da diversidade cultural. Explora estratégias para integrar obras indígenas na educação formal."
    },
    { 
        palavras: ["Tecnologia", "Mídia Digital", "Adaptação", "Inovação"], 
        titulo: "Literatura Indígena e Tecnologia",
        descricao: "Explora como a literatura indígena está se adaptando às novas tecnologias e mídias digitais. Analisa a inovação nas formas de contar histórias e na preservação da literatura através de plataformas modernas."
    },
    { 
        palavras: ["Interculturalidade", "Diálogo", "Troca", "Influências"], 
        titulo: "Interculturalidade na Literatura Indígena",
        descricao: "Examina a interculturalidade na literatura indígena, explorando o diálogo e a troca de influências entre culturas indígenas e outras culturas. Analisa como essas interações enriquecem a literatura e promovem a compreensão mútua."
    },
    { 
        palavras: ["Economia", "Recursos", "Sustentabilidade", "Autossuficiência"], 
        titulo: "Economia e Sustentabilidade na Literatura Indígena",
        descricao: "Foca na representação de questões econômicas e de sustentabilidade na literatura indígena. Explora temas relacionados ao uso de recursos naturais, práticas de autossuficiência e a integração de princípios econômicos tradicionais."
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
