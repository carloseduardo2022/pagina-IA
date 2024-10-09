const caixaPrincipal = document.querySelector("caixa-primcipal")
const caixaPerguntas = document.querySelector("caixa-perguntas")
const caixaAlternativas = document.querySelector("caixa-alternativas")
const caixaResultados = document.querySelector("caixa-resultados")
const textoResultados = document.querySelector("texto-resultados")

const perguntas = [
    {
        enunciado: "quantas champions tem o cr7 (Cristiano Ronaldo)?",
        
        alternativas:[
            "quatro",
            "cinco",
        ]

    },
    {

        enunciado: "quantas bolas de ouro tem o cr7 (cristiano ronaldo)",

        alternativas:[
            "quatro",
            "cinco"
        ]
    },
    {

        enunciado: "Qual é a idade de Cristiano Ronaldo? ",

        alternativas:[
            "37 anos",
            "39 anos"
        ]
    },
    {

        enunciado: "aonde nasceu Cristiano Ronaldo?",

        alternativas:[
            "ilha da madeira",
            "lisboa"
        ]
    }




]