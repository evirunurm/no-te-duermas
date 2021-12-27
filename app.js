    const Player = (() => {

    let choices = [
        {
            a: false,
            b: false,
        }, {
            a: false,
            b: false,
        }, {
            a: false,
            b: false,
        }, {
            a: false,
            b: false,
        }, {
            a: false,
            b: false,
        }, {
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
                text: "Te despiertas.<br/> Parece una mañana como cualquier otra.<br/> Pero hay algo diferente : Tienes una cita hoy.",
                mostrar: true,
                imgsrc: "./imgs/sleeping.png"
            },
            {
                id: 1,
                text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar.<br/> Qué desayunas?",
                mostrar: true,
                opciones: {
                    a: "Tostadas",
                    b: "Un vaso de leche",
                },
            },
            {
                id: '2a',
                text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato.<br/> Casi te olvidas de él.",
                mostrar: false,
            },
            {
                id: '2b',
                text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita.<br/> Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                mostrar: false,
            },
            {
                id: '3',
                text: "Has tardado en prepararte más de lo que crías que te iba a costar.<br/> Sales a la calle. ",
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
                text: "Miras la hora, son las 10:54. Habéis quedado a las 11 en un café a media hora de tu apartamento.<br/> Parece que estás llegando tarde. Otra vez.",
                mostrar: true,
            },
            {
                id: '6',
                text: "Quizá podrías coger el metro. Aunque no te queda mucho dinero.<br/> ¿Qué haces?",
                mostrar: true,
                opciones: {
                    a: "Metro",
                    b: "Ir andando"
                }
            },
            {
                id: '7a',
                text: "Bajas a la estación. Te sientas en uno de los bancos que hay a lo largo del andén.<br/> El próximo tren viene en 11 minutos. Decides esperar.",
                mostrar: false,
                imgsrc: "./imgs/metro.png"
            },
            {
                id: '7b',
                text: "Vas caminando hacia el café. Tienes bastante sueño, pero el ligero paso con el que vas hace que eso no importe tanto.",
                mostrar: false,
                imgsrc: "./imgs/walking.png"
            },
            {
                id: '8',
                affected: "7a",
                text: "Te pones los cascos y te hundes en la múscia. Tienes bastante sueño.<br/> Tus párpados pesan cada vez más y más.<br/> Los cierras.",
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
                text: "Estás en frente del local en el que habéis quedado. Miras tu móvil : Son las 11:20, y no tienes ninguna notificación. <br/>Qué raro. Supongo que también estará llegando tarde.",
                mostrar: true,
            },
            {
                id: '11',
                text: "Entras al café.",
                mostrar: true,
                imgsrc: "./imgs/bar.png"
            },
            {
                id: '12',
                text: "Está vacío. Completamente vacío. Tan vacío que se te hace incómodo estar dentro. Te empiezas a preguntar qué está pasando:<br/> “¿Debería estar aquí?”, “¿Seguro que era este sitio?”...",
                mostrar: true,
            },
            {
                id: '13',
                text: "Decides sentarte en una de las mesas.",
                mostrar: true,
            },
            {
                id: '14',
                text: "Decides sentarte en una de las mesas. La oscuridad del local, junto con el tinte rojo que le dan al ambiente las luces fluorescentes pegan en tus ojos. <br/>Qué vas a hacer ahora?",
                mostrar: true,
                opciones: {
                    a: "Esperar",
                    b: "Buscar personal del café"
                }
            },
            {
                id: '15a',
                text: "Decides ser paciente y esperar.",
                mostrar: false,
            },
            {
                id: '15b',
                text: "Te levantas y te diriges hacia la barra. La puerta que lleva a la cocina está abierta.<br/> “Perdon, ¿Hay alguien?”. ",
                mostrar: false,
            },
            {
                id: '16',
                affected: "15b",
                text: "Silencio. <br/>¿Qué haces?",
                mostrar: false,
                opciones: {
                    a: "Entrar en la cocina",
                    b: "Volver a tu mesa"
                }
            },
            {
                id: '17a',
                affected: "15b",
                text: "Te acercas a la puerta de la cocina. Notas algo raro.",
                mostrar: false,
            },
            {
                id: '17b',
                affected: "15b",
                text: "Decides no entrar en la cocina. Ellos sabrán qué hacen. Vuelves a tu mesa y te sientas.",
                mostrar: false,
            },
            {
                id: '18',
                affected: "17a",
                text: "Hay una persona tirada en el suelo. Tratas de acercarte para comprobar si está viva, pero al dar el primer paso te resbalas en el charo de aceite que hay en el suelo, justo a un lado de la persona.",
                mostrar: false,
            },
            {
                id: '19',
                affected: "17a",
                final: true,
                text: "Golpeas el suelo con la cabeza en seco. Te has dormido.",
                mostrar: false,
            },
            {
                id: '20',
                text: "Quizá sea buena idea llamarle. Le llamas... No contesta. Le llamas otra vez, tampoco contesta. Decides mandarle un mensaje : “Dónde estás? Vas a venir?”.",
                mostrar: true,
            },
        ];

        document.querySelector(".nextText").addEventListener("click", () => {
            showText();
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
                    text: "Te despiertas.<br/> Parece una mañana como cualquier otra.<br/> Pero hay algo diferente : Tienes una cita hoy.",
                    mostrar: true,
                },
                {
                    id: 1,
                    text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar.<br/> Qué desayunas?",
                    mostrar: true,
                    opciones: {
                        a: "Tostadas",
                        b: "Un vaso de leche",
                    },
                },
                {
                    id: '2a',
                    text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato.<br/> Casi te olvidas de él.",
                    mostrar: false,
                },
                {
                    id: '2b',
                    text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita.<br/> Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
                    mostrar: false,
                },
                {
                    id: '3',
                    text: "Has tardado en prepararte más de lo que crías que te iba a costar.<br/> Sales a la calle. ",
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
                    text: "Miras la hora, son las 10:54. Habéis quedado a las 11 en un café a media hora de tu apartamento.<br/> Parece que estás llegando tarde. Otra vez.",
                    mostrar: true,
                },
                {
                    id: '6',
                    text: "Quizá podrías coger el metro. Aunque no te queda mucho dinero.<br/> ¿Qué haces?",
                    mostrar: true,
                    opciones: {
                        a: "Metro",
                        b: "Ir andando"
                    }
                },
                {
                    id: '7a',
                    text: "Bajas a la estación. Te sientas en uno de los bancos que hay a lo largo del andén.<br/> El próximo tren viene en 11 minutos. Decides esperar.",
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
                    text: "Te pones los cascos y te hundes en la múscia. Tienes bastante sueño.<br/> Tus párpados pesan cada vez más y más.<br/> Los cierras.",
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
                    text: "Estás en frente del local en el que habéis quedado. Miras tu móvil : Son las 11:20, y no tienes ninguna notificación. <br/>Qué raro. Supongo que también estará llegando tarde.",
                    mostrar: true,
                },
                {
                    id: '11',
                    text: "Entras al café.",
                    mostrar: true,
                },
                {
                    id: '12',
                    text: "Está vacío. Completamente vacío. Tan vacío que se te hace incómodo estar dentro. Te empiezas a preguntar qué está pasando:<br/> “¿Debería estar aquí?”, “¿Seguro que era este sitio?”...",
                    mostrar: true,
                },
                {
                    id: '13',
                    text: "Decides sentarte en una de las mesas.",
                    mostrar: true,
                },
                {
                    id: '14',
                    text: "Decides sentarte en una de las mesas. La oscuridad del local, junto con el tinte rojo que le dan al ambiente las luces fluorescentes pegan en tus ojos. <br/>Qué vas a hacer ahora?",
                    mostrar: true,
                    opciones: {
                        a: "Esperar",
                        b: "Buscar personal del café"
                    }
                },
                {
                    id: '15a',
                    text: "Decides ser paciente y esperar.",
                    mostrar: false,
                },
                {
                    id: '15b',
                    text: "Te levantas y te diriges hacia la barra. La puerta que lleva a la cocina está abierta.<br/> “Perdon, ¿Hay alguien?”. ",
                    mostrar: false,
                },
                {
                    id: '16',
                    affected: "15b",
                    text: "Silencio. <br/>¿Qué haces?",
                    mostrar: false,
                    opciones: {
                        a: "Entrar en la cocina",
                        b: "Volver a tu mesa"
                    }
                },
                {
                    id: '17a',
                    affected: "15b",
                    text: "Te acercas a la puerta de la cocina. Notas algo raro.",
                    mostrar: false,
                },
                {
                    id: '17b',
                    affected: "15b",
                    text: "Decides no entrar en la cocina. Ellos sabrán qué hacen. Vuelves a tu mesa y te sientas.",
                    mostrar: false,
                },
                {
                    id: '18',
                    affected: "17a",
                    text: "Hay una persona tirada en el suelo. Tratas de acercarte para comprobar si está viva, pero al dar el primer paso te resbalas en el charo de aceite que hay en el suelo, justo a un lado de la persona.",
                    mostrar: false,
                },
                {
                    id: '19',
                    affected: "17a",
                    text: "El suelo te golpea la cabeza en seco. Te has dormido.",
                    mostrar: false,
                },
                {
                    id: '20',
                    affected: "15a",
                    affected: "17b",
                    text: "Quizá sea buena idea llamarle. Le llamas... No contesta. Le llamas otra vez, tampoco contesta. Decides mandarle un mensaje : “Dónde estás? Vas a venir?”.",
                    mostrar: true,
                },
            ];
        };

        const hideStartScreen = () => {
            appElement.classList.remove("dark");
            startScreen.style.display = "none";
            document.querySelector('.lvl').style.display = "flex";
        };

        // Quitado el parametro "level" que ensuciaba la función.
        //  Ahora depende del atributo "textLevel" directamente.
        const showText = () => {

            for(const text of texts) {
                console.log(textLevel)
                if (text.id == textLevel && !text.mostrar) {
                    textLevel++;
                    showText();
                    return;
                }
                if (text.id == textLevel && text.mostrar) {
                    const optionsElement = document.querySelector("#options");

                    // Vaciar el elemento del texto
                    optionsElement.innerHTML = "";
                    // Insertar texto
                    document.querySelector(".text").innerHTML = text.text;
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
                                showText(); // Mostrar siguiente
                            });
                        });
                        // Ocultar botón "siguiente"
                        document.querySelector(".nextText").style.display = "none";
                    }
                    // Si es el final
                    if ("final" in text) {
                        // Ocultar botón "siguiente"
                        document.querySelector(".nextText").style.display = "none";
                        // Mostrar botón "finalzar"
                        const endButton = document.createElement("button");
                        endButton.classList.add("button");
                        endButton.textContent = "Siguiente";
                        optionsElement.append(endButton);
                        endButton.addEventListener('click', () => {
                            Game.reset();
                        });
                    }
                    // Si tiene una imagen asociada
                    if ("imgsrc" in text) {
                        appElement.style.backgroundImage = `url(${text.imgsrc})`;
                    }
                }
            };
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
        Player.chooseChoice(currentDecision, decision);
        currentDecision++;
        takeRoute(Interface.getTextLevel(), decision);
        // Comporbar posible final
    };

    const reset = () => {
        Player.resetChoices();
        currentDecision = 0;
        Interface.setTextLevel(0);
        Interface.reset();
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


