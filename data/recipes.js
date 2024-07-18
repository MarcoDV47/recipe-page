import omelette from "../assets/images/image-omelette.jpeg"

export const recipes = [
    {
        name: "Receita de Omelete Simples",
        id: 1,
        description: "Um prato fácil e rápido, perfeito para qualquer refeição. Esta omelete clássica combina ovos batidos cozidos com perfeição, opcionalmente recheados com queijo, vegetais ou carnes à sua escolha.",
        image: {
            src: omelette,
            alt: "Omelete"
        },
        preparation: [
            "Total: Aproximadamente 10 minutos",
            "Preparação: 5 minutos",
            "Cozinhar: 5 minutos"
        ],
        ingredients: [
            "2-3 ovos grandes",
            "Sal a gosto",
            "Pimenta a gosto",
            "1 colher de sopa de manteiga ou óleo",
            "Recheios opcionais: queijo, legumes em cubos, carnes cozidas, ervas"
        ],
        instructions: [
            "Bata os ovos: Numa tigela, bata os ovos com uma pitada de sal e pimenta até ficarem bem misturados. Você pode adicionar uma colher de sopa de água ou leite para obter uma textura mais fofa.",
            "Aqueça a frigideira: coloque uma frigideira antiaderente em fogo médio e adicione manteiga ou óleo.",
            "Cozinhe a omelete: assim que a manteiga derreter e borbulhar, coloque os ovos. Incline a frigideira para garantir que os ovos cubram uniformemente a superfície.",
            "Adicione recheios (opcional): quando os ovos começarem a endurecer nas bordas, mas ainda estiverem um pouco moles no meio, polvilhe os recheios escolhidos sobre metade da omelete.",
            "Dobre e sirva: enquanto a omelete continua cozinhando, levante cuidadosamente uma das pontas e dobre-a sobre o recheio. Deixe cozinhar por mais um minuto e depois coloque-a em um prato.",
            "Aproveite: Sirva quente, com mais sal e pimenta se necessário."
        ],
        nutrition: {
            description: "A tabela abaixo mostra os valores nutricionais por porção sem recheios adicionais.",
            table: {
                values: {
                    calories: "277kcal",
                    carbs: "0g",
                    protein: "20g",
                    fat: "22g"
                }
            }
        }
    },
    {
        name: "Purê de batata",
        id: 2,
        description: "Acompanhamento ideal para várias receitas tradicionais e deliciosas, essa receita é simples e fácil! Com sua textura bem característica e um sabor único, este prato simples tem o poder de despertar memórias de refeições caseiras aconchegantes e momentos de celebração em família. ",
        image: {
            src: "https://img.cybercook.com.br/imagens/receitas/518/como-fazer-pure-de-batata-1.jpg",
            alt: "Purê de batata"
        },
        ingredients: [
            "1 kg de batata",
            "1/2 xícara de leite",
            "2 colheres (sopa) de margarina",
            "Sal a gosto",
            "1 dente de alho espremido"
        ],
        instructions: [
            "Cozinhe as batatas até ficarem bem moles.",
            "Descasque-as ainda quentes e esprema as batatas no espremedor.",
            "Despeje as batatas em um recipiente e acrescente a margarina, o sal e o alho, e mexa até que a margarina derreta por completo.",
            "Acrescente o leite aos poucos e continue mexendo.",
            "Sirva quente e, se preferir, adicione queijo."
        ]
    },
    {
        name: "Pudim",
        id: 3,
        description: "Fácil de preparar e com ingredientes simples, o pudim é uma opção perfeita para adoçar qualquer ocasião especial.",
        image: {
            src: "https://static.itdg.com.br/images/640-400/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg",
            alt: "Pudim"
        },
        preparation: [
            "Total: Aproximadamente 1 hora",
            "Preparo: 45min",
            "Espera: 15min"
        ],
        ingredients: [
            "1 lata de leite condensado",
            "3 ovos inteiros",
            "1 lata de leite (medida da lata de leite condensado)",
            "1/2 xícara de água",
            "1 xícara (chá) de açúcar"
        ],
        instructions: [
            "Primeiro, bata bem os ovos no liquidificador.",
            "Acrescente o leite condensado e o leite, e bata novamente.",
            "Derreta o açúcar na panela até ficar moreno, acrescente a água e deixe engrossar.",
            "Coloque em uma forma redonda e despeje a massa do pudim por cima.",
            "Asse em forno médio por 45 minutos, com a assadeira redonda dentro de uma maior com água.",
            "Espete um garfo para ver se está bem assado.",
            "Deixe esfriar e desenforme."
        ]
    },
]