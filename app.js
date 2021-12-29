import OriginalTexts from "./texts.js";

const Interface = (() => {
    let textLevel = 0;
    let texts = JSON.parse(JSON.stringify(OriginalTexts));
    let audioInterval;

    const appElement = document.querySelector("#app");
    const startScreen = document.querySelector(".startscreen");

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
        // Hace que la música no termine de bajar el volumen cuando al terminar historia
        // le das a "Siguiente" antes de que baje la música.
        clearInterval(audioInterval);
        document.querySelector('#audio').volume = 0.2;
        appElement.classList.add("dark");
        startScreen.style.display = "flex";
        document.querySelector('.lvl').style.display = "none";
        texts = JSON.parse(JSON.stringify(OriginalTexts));
    };

    const setup = () => {
        // Listener del botón de PLAY para transición de primer lvl
        // se puede optimizar
        document.querySelector("#startgame").addEventListener("click", () => {
            // Ocultar la información extra y botón
            document.querySelector('#faq-button').classList.add('none');
            document.querySelector('.faq').classList.add('none');
            document.querySelector('#faq').style = "";
            // Mostrar botón de reset
            document.querySelector('.btn-sleep').classList.remove('none');
            transitionAnimation('.lvl');
        });
        document.querySelector(".nextText").addEventListener("click", () => {
            showText();
            transitionAnimation('.lvl'); // Animación de transición
        });
        document.querySelector("#faq-button").addEventListener("click", () => {
            const faq = document.querySelector("#faq");
            if (getComputedStyle(faq).display === "none") {
                faq.style.display = "block";
            } else {
                faq.style.display = "none";
            }
        });
        // Ajuste de volumen de la música
        document.querySelector('#music-play').addEventListener('click', () => {
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
                audio.loop = true;
                sound.style.display = "block";
                mute.style.display = "none";
            }
        });
    }

    const hideStartScreen = () => {
        appElement.classList.remove("dark");
        startScreen.style.display = "none";
        document.querySelector('.lvl').style.display = "flex";
    };

    // Quitado el parametro "level" que ensuciaba la función.
    //  Ahora depende del atributo "textLevel" directamente.
    const showText = () => {
        let foundMatch = false;

        for (const text of texts) {
            if (text.id == textLevel && !text.mostrar) {
                textLevel++;
                showText();
                return;
            }
            if (text.id == textLevel) {
                foundMatch = true;
                const optionsElement = document.querySelector("#options");
                optionsElement.innerHTML = "";
                document.querySelector(".text").innerHTML = text.text;
                document.querySelector(".nextText").style.display = "block";

                if ("opciones" in text) {
                    Object.keys(text.opciones).forEach((option) => {
                        const optionElement = document.createElement("LI");
                        optionElement.textContent = text.opciones[option];
                        optionsElement.append(optionElement);
                        optionElement.addEventListener('click', () => {
                            Game.makeDecision(option);
                            showText();
                            transitionAnimation('.lvl'); // Animación de transición
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
                    endButton.setAttribute('id', 'btn-fin');
                    endButton.textContent = "Siguiente";
                    optionsElement.append(endButton);
                    endButton.addEventListener('click', () => {
                        Game.reset();
                    });
                    // Baja el volumen de la música 0.05 cada 1000ms.
                    const audio = document.querySelector('#audio');
                    audioInterval = setInterval(() => {
                        audio.volume -= 0.05;
                        if (audio.volume <= 0) clearInterval(audioInterval);
                    }, 1000);

                }
                if ("imgsrc" in text) {
                    appElement.style.backgroundImage = `url(${text.imgsrc})`;
                }
                if ("end" in text) {
                    // Ocultar botón "siguiente"
                    document.querySelector(".nextText").style.display = "none";
                    // Mostrar botón "finalzar"
                    const endButton = document.createElement("button");
                    endButton.classList.add("button");
                    endButton.textContent = "Jugar de nuevo";
                    optionsElement.append(endButton);
                    document.querySelector('#btn-fin').classList.add('none');
                    endButton.addEventListener('click', () => {
                        document.querySelector('#btn-fin').classList.remove('none');
                        Game.reset();
                    });
                }
                if ("soundsrc" in text) {
                    const audio = new Audio(text.soundsrc);
                    audio.play();
                }
            }
        }
        if (!foundMatch) {
            textLevel++;
            showText();
            return;
        }
        textLevel++;
    };

    const btnSleep = document.querySelector('.btn-sleep');
    btnSleep.addEventListener('click', () => Game.reset());

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
        setup,
    };
})();


const Game = (() => {
    let currentDecision = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.showText(Interface.getTextLevel());
    };

    const makeDecision = (decision) => {
        currentDecision++;
        takeRoute(Interface.getTextLevel(), decision);
    };

    const reset = () => {
        currentDecision = 0;
        Interface.setTextLevel(0);
        Interface.reset();
        Game.start();
    }

    const takeRoute = (nextLevel, choice) => {
        let text = Interface.getTexts().find(text => {
            return text.id === `${nextLevel}${choice}`;
        });
        Interface.getTexts()[Interface.getTexts().indexOf(text)].id =  nextLevel;
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
    Interface.setup();
    startButton.addEventListener("click", Game.start);
    return {}
})();


