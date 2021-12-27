    const Player = (() => {

    let choices = [
        {
            a: false,
            b: false,
        },
        {
            a: false,
            b: false,
        },
    ];


    const chooseChoice = (level, choice) => {
        if (level < choices.length && choice in choices[level]) {
        choices[level][choice] = true;
        }
    };

    const resetChoices = () => {
        choices.forEach((level) => {
            Object.keys(level).forEach((choice) => {
                level[choice] = false;
            });
        });
    };

    return {
        choices,
        chooseChoice,
        resetChoices,
    };
    })();


    const Interface = (() => {
        let textLevel = 0;

        let texts = [
            {
                id: 0,
                text: "Te despiertas. Parece una mañana como cualquier otra. Pero hay algo diferente : Tienes una cita hoy.",
                mostrar: true,
            },
            {
                id: 1,
                text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar.\n Qué desayunas?",
                mostrar: true,
                opciones: {
                    a: "Tostadas",
                    b: "Un vaso de leche",
                },
            },
            {
                id: '2a',
                text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                mostrar: false,
            },
            {
                id: '2b',
                text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita. Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                mostrar: false,
            },
            {
                id: '3',
                text: "Has tardado en prepararte más de lo que crías que te iba a costar. Sales a la calle. ",
                mostrar: true,
            },
            {
                id: '4',
                affected: "2a",
                text: "Se te ha olvidado la tostada.",
                mostrar: false,
            },
            {
                id: '5',
                text: "Miras la hora, son las 10:54. Habéis quedado a las 11 en un café a media hora de tu apartamento. Parece que estás llegando tarde. Otra vez.",
                mostrar: true,
            },
            {
                id: '6',
                text: "Quizá podrías coger el metro. Aunque no te queda mucho dinero. ¿Qué haces?",
                mostrar: true,
                opciones: {
                    a: "Metro",
                    b: "Ir andando"
                }
            },
            {
                id: '7a',
                text: "Bajas a la estación. Te sientas en uno de los bancos que hay a lo largo del andén. El próximo tren viene en 11 minutos. Decides esperar.",
                mostrar: false,
            },
            {
                id: '7b',
                text: "Vas caminando hacia el café. Tienes bastante sueño, pero el ligero paso con el que vas hace que eso no importe tanto.",
                mostrar: false,
            },
            {
                id: '8',
                affected: "7a",
                text: "Te pones los cascos y te hundes en la múscia. Tienes bastante sueño. Tus párpados pesan cada vez más y más. Los cierras.",
                mostrar: false,
            },
            {
                id: '9',
                affected: "7a",
                final: true,
                text: "Te estás durmiendo...",
                mostrar: false,
            },
            {
                id: '10',
                text: "Llegas al café.",
                mostrar: true,
            },
        ];

        document.querySelector(".nextText").addEventListener("click", () => {
            showText(textLevel);
        });
        const appElement = document.querySelector("#app");
        const startScreen = document.querySelector(".startscreen");

        // Añado un getter para poder hacer referencia al objeto actualizado de texto,
        // hasta cuando no es el mismo lugar de la memoria. Mirar --> this.reset();
        const getTexts = () => {
            return texts;
        }

        const getTextLevel = () => {
            return textLevel;
        }

        const setTextLevel = (level) => {
            textLevel = level;
        }

        const reset = () => {
            appElement.classList.add("dark");
            startScreen.style.display = "flex";
            document.querySelector('.lvl').style.display = "none";
            // Resetea los cambios que se han hecho sobre los textos (visibilidad, ids...)
            // Mucho copia y pega, pero es lo que hay.
            texts = [
                {
                    id: 0,
                    text: "Te despiertas. Parece una mañana como cualquier otra. Pero hay algo diferente : Tienes una cita hoy.",
                    mostrar: true,
                },
                {
                    id: 1,
                    text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar.\n Qué desayunas?",
                    mostrar: true,
                    opciones: {
                        a: "Tostadas",
                        b: "Un vaso de leche",
                    },
                },
                {
                    id: '2a',
                    text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                    mostrar: false,
                },
                {
                    id: '2b',
                    text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita. Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                    mostrar: false,
                },
                {
                    id: '3',
                    text: "Has tardado en prepararte más de lo que crías que te iba a costar. Sales a la calle. ",
                    mostrar: true,
                },
                {
                    id: '4',
                    affected: "2a",
                    text: "Se te ha olvidado la tostada.",
                    mostrar: false,
                },
                {
                    id: '5',
                    text: "Miras la hora, son las 10:54. Habéis quedado a las 11 en un café a media hora de tu apartamento. Parece que estás llegando tarde. Otra vez.",
                    mostrar: true,
                },
                {
                    id: '6',
                    text: "Quizá podrías coger el metro. Aunque no te queda mucho dinero. ¿Qué haces?",
                    mostrar: true,
                    opciones: {
                        a: "Metro",
                        b: "Ir andando"
                    }
                },
                {
                    id: '7a',
                    text: "Bajas a la estación. Te sientas en uno de los bancos que hay a lo largo del andén. El próximo tren viene en 11 minutos. Decides esperar.",
                    mostrar: false,
                },
                {
                    id: '7b',
                    text: "Vas caminando hacia el café. Tienes bastante sueño, pero el ligero paso con el que vas hace que eso no importe tanto.",
                    mostrar: false,
                },
                {
                    id: '8',
                    affected: "7a",
                    text: "Te pones los cascos y te hundes en la múscia. Tienes bastante sueño. Tus párpados pesan cada vez más y más. Los cierras.",
                    mostrar: false,
                },
                {
                    id: '9',
                    affected: "7a",
                    final: true,
                    text: "Te estás durmiendo...",
                    mostrar: false,
                },
                {
                    id: '10',
                    text: "Llegas al café.",
                    mostrar: true,
                },
            ];
        };

        const hideStartScreen = () => {
            appElement.classList.remove("dark");
            startScreen.style.display = "none";
            document.querySelector('.lvl').style.display = "flex";
        };

        const showText = (level) => {

            texts.forEach((text) => {
                console.log(textLevel)
                if (text.id == level && !text.mostrar) {
                    showText(textLevel++);
                }
                if (text.id == level && text.mostrar) {
                    const optionsElement = document.querySelector("#options");

                    // Vaciar el elemento del texto
                    optionsElement.innerHTML = "";
                    // Insertar texto
                    document.querySelector(".text").textContent = text.text;
                    // Mostrar botón "siguiente"
                    document.querySelector(".nextText").style.display = "block";

                    // SI TIENE OPCIONES :
                    if ("opciones" in text) {
                        Object.keys(text.opciones).forEach((option) => {
                            const optionElement = document.createElement("LI");
                            optionElement.textContent = text.opciones[option];
                            optionsElement.append(optionElement);
                            optionElement.addEventListener('click', () => {
                                Game.makeDecision(option);
                                showText(textLevel); // Mostrar soguiente
                            });
                        });
                        // Ocultar botón "siguiente"
                        document.querySelector(".nextText").style.display = "none";
                    }
                    if ("final" in text) {
                        // Ocultar botón "siguiente"
                        document.querySelector(".nextText").style.display = "none";
                        // Mostrar botón "finalzar"
                        const endButton = document.createElement("button");
                        endButton.classList.add("button");
                        endButton.textContent = "PLAY AGAIN";
                        optionsElement.append(endButton);
                        endButton.addEventListener('click', () => {
                            Game.reset();
                        });
                    }
                }
            });
            textLevel++;
        };

        return {
            hideStartScreen,
            showText,
            reset,
            getTextLevel,
            setTextLevel,
            getTexts,
        };
    })();


    const Game = (() => {
    let currentDecision = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.showText(Interface.getTextLevel());
    };

    const makeDecision = (decision) => {
        console.log(currentDecision, decision)
        Player.chooseChoice(currentDecision, decision);
        console.log(Player.choices)
        currentDecision++;
        takeRoute(Interface.getTextLevel(), decision);
        // Comporbar posible final
    };

    const reset = () => {
        Player.resetChoices();
        currentDecision = 0;
        Interface.setTextLevel(0);
        Interface.reset();
        console.log(Interface.getTexts())
        Game.start();
    }

    const takeRoute = (nextLevel, choice) => {

        let text = Interface.getTexts().find(text => {
            return text.id === `${nextLevel}${choice}`;
        });
        Interface.getTexts()[Interface.getTexts().indexOf(text)].id = nextLevel;
        Interface.getTexts()[Interface.getTexts().indexOf(text)].mostrar = true;


        let affectedTexts = Interface.getTexts().filter(text => {
            return text.affected === `${nextLevel}${choice}`;
        });

        affectedTexts.forEach((text) => {
            Interface.getTexts()[Interface.getTexts().indexOf(text)].mostrar = true;
        });
        console.log(Interface.getTexts());

    };

    return {
        start,
        currentDecision,
        makeDecision,
        reset
    };
    })();

    const Main = (() => {
    const startButton = document.querySelector("#startgame");
    startButton.addEventListener("click", Game.start);

    return {};
    })();


