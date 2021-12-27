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
        const texts = [
            {
                id: 0,
                text: "Te despiertas. Parece una mañana como cualquier otra. Pero hay algo diferente : Tienes una cita hoy.",
                mostrar: true,
            },
            {
                id: 1,
                text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar. Qué desayunas?",
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
                text: "Vas corriendo ahaha",
                mostrar: true,
            },
            {
                id: '6',
                "final" : true,
                text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato. Casi te olvidas de él. Estás tardando en encontrar a Cherry",
                mostrar: true,
            },
        ];
        const nextTextButton = document.querySelector(".nextText");
        nextTextButton.addEventListener("click", () => {
            showText(textLevel);
        });
        const appElement = document.querySelector("#app");
        const startScreen = document.querySelector(".startscreen");


        const getTextLevel = () => {
            return textLevel;
        }

        const setTextLevel = (level) => {
            textLevel = level;
        }

        const reset = () => {
            appElement.classList.add("dark");
            startScreen.style.display = "flex";
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
                            let optionElement = document.createElement("LI");
                            optionElement.textContent = text.opciones[option];
                            optionsElement.append(optionElement);
                            optionElement.addEventListener('click', () => {
                                Game.makeDecision(option);
                                showText(textLevel); // Mostrar
                            });
                        });
                        // Ocultar botón "siguiente"
                        document.querySelector(".nextText").style.display = "none";
                    }
                }
            });
            textLevel++;
        };

        return {
            hideStartScreen,
            textLevel,
            showText,
            texts,
            reset,
            getTextLevel,
            setTextLevel,
        };
    })();


    const Game = (() => {
    let currentDecision = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.showText(Interface.textLevel);
    };

    const makeDecision = (decision) => {
        Player.chooseChoice(currentDecision, decision);
        currentDecision++;
        takeRoute(Interface.getTextLevel(), decision);
        // Comporbar posible final
    };

    const takeRoute = (nextLevel, choice) => {
        let text = Interface.texts.find(text => {
            return text.id === `${nextLevel}${choice}`;
        });
        Interface.texts[Interface.texts.indexOf(text)].id = 2;
        Interface.texts[Interface.texts.indexOf(text)].mostrar = true;

        let affectedTexts = Interface.texts.filter(text => {
            return text.affected === `${nextLevel}${choice}`;
        });

        affectedTexts.forEach((text) => {
            Interface.texts[Interface.texts.indexOf(text)].mostrar = true;
        });

    };

    return {
        start,
        currentDecision,
        makeDecision
    };
    })();

    const Main = (() => {
    const startButton = document.querySelector("#startgame");
    startButton.addEventListener("click", Game.start);

    return {};
    })();
