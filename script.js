const caixaPrincipal = document.querySelector("caixa-principal")
const caixaPerguntas = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaResultados = document.querySelector("caixa-resultados")
const textoResultados = document.querySelector("texto-resultados")

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

        enunciado: "Qual é a idade de Cristiano Ronaldo? ",

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

        enunciado: "aonde nasceu Cristiano Ronaldo?",

        alternativas:[
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

function mostraPergunta() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();

}

function mostraAlternativa() {
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();