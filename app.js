import OriginalTexts from "./texts.js";


// Ajuste de volumen de la música

const btnMusic = document.querySelector('#music-play');
btnMusic.addEventListener('click', () => {
    const audio = document.querySelector('#audio');
    const sound = document.querySelector('#sound');
    const mute = document.querySelector('#mute');
    if (!audio.paused) {
        audio.pause();
        sound.style.display = "none";
        mute.style.display = "block";
    } else {
        audio.play();
        audio.volume = 0.2;
        sound.style.display = "block";
        mute.style.display = "none";
    }

});

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



    let texts = JSON.parse(JSON.stringify(OriginalTexts));

    // Listener del botón de PLAY para transición de primer lvl
    // se puede optimizar
    document.querySelector("#startgame").addEventListener("click", () => {
        transitionAnimation('.lvl');
    });

    document.querySelector(".nextText").addEventListener("click", () => {
        showText();
        transitionAnimation('.lvl'); // Animación de transición
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
        texts = JSON.parse(JSON.stringify(OriginalTexts));
    };

    const hideStartScreen = () => {
        appElement.classList.remove("dark");
        startScreen.style.display = "none";
        document.querySelector('.lvl').style.display = "flex";
    };

    // Quitado el parametro "level" que ensuciaba la función.
    //  Ahora depende del atributo "textLevel" directamente.
    const showText = () => {
        console.log(texts)
        for (const text of texts) {

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
                            transitionAnimation('.lvl'); // Animación de transición
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
        }
        textLevel++;
    };

    const transitionAnimation = (elementClass) => {
        const element = document.querySelector(elementClass);
        element.classList.add('visible');
        setTimeout(() => {
            element.classList.remove('visible');
        }, 1200);
    }

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
    return {}
})();


