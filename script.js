const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultados = document.querySelector (".caixa-resultados");
const textoResultados = document.querySelector (".texto-resultados");

const perguntas = [
    {
        enunciado: "quantas champions tem o cr7 (Cristiano Ronaldo)?",
        
        alternativas:[
            {
                texto:  "quatro",
                afirmacao: "afirmação"
            },
            {
                texto:  "cinco",
                afirmacao: "afirmação",
            }
           
        ]

    },
    {

        enunciado: "quantas bolas de ouro tem o cr7 (cristiano ronaldo)",

        alternativas:[
            {
                texto:  "quatro",
                afirmacao: "afirmação"
            },
            {
                texto:  "cinco",
                afirmacao: "afirmação",
            }
           
        ]
    },
    {

        enunciado: "Qual é a idade de cr7 (cristiano ronaldo)? ",

        alternativas:[
            {
                texto:  "37 anos",
                afirmacao: "afirmação"
            },
            {
                texto:  "39 anos",
                afirmacao: "afirmação",
            }
            
        ]
    },
    {

        enunciado: "aonde nasceu cr7 (cristiano ronaldo)?",

        alternativas:[Em 19999999
            {
                texto:  "ilha da madeira",
                afirmacao: "afirmação"
            },
            {
                texto:  "lisboa",
                afirmacao: "afirmação",
            }
           
        ]
    }


];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativa();

}

function mostraAlternativa() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionda){
            atual++;
            mostraPergunta();
            const afirmacoes = opcaoSelecionda.afirmacoes

        }
        function mostraResultado(){
            caixaPerguntas.textContent = "Cristiano Ronaldo um grande jogador de 39 anos, nascido na ilha da madeira, considerado o melhor jogador do mundo  foi 5x Vencedor da Champions-League, e 5x vencedor da Bolas de Ouro";
            textoResultado.textContent = historiaFinal +=afirmacoes +" ";
            caixaAlternativas ="";
        }
mostraPergunta();