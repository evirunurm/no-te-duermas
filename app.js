    const Player = (() => {
    let choices = [
        {
        ref: 2,
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
        text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita. Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
        mostrar: false,
        },
        {
        id: '2b',
        text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato. Casi te olvidas de él. Estás tardando en encontrar a Cherry",
        mostrar: false,
        },
    ];
    const nextTextButton = document.querySelector(".nextText");
    nextTextButton.addEventListener("click", () => {
        showText(textLevel);
        
    });
    const appElement = document.querySelector("#app");
    const startScreen = document.querySelector(".startscreen");

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
        console.log(Game.currentLevel)
        
        texts.forEach((text) => {
        if (text.id === level && text.mostrar) {
            const optionsElement = document.querySelector("#options");
            optionsElement.innerHTML = "";
            document.querySelector(".text").textContent = text.text;
            document.querySelector(".nextText").style.display = "block";
            Game.currentLevel++;
            textLevel++;
            if ("opciones" in text) {
            Object.keys(text.opciones).forEach((option) => {
                let optionElement = document.createElement("LI");
                optionElement.textContent = text.opciones[option];
                optionsElement.append(optionElement);
                optionElement.addEventListener('click', ()=>{
                    Game.makeDecision(option);
                    console.log(option)
                });
            });
            document.querySelector(".nextText").style.display = "none";
            }
        }
        });
    };

    

    return {
        hideStartScreen,
        textLevel,
        showText,
        texts,
        reset,
    };
    })();

    const Game = (() => {
    const totalLevels = 1; // Does not include 0
    let currentLevel = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.showText(Interface.textLevel);
    };

    // const reset = () => {
    //     Interface.reset();
    //     currentLevel = 0;
    // };

    const makeDecision = (decision) => {
        Player.chooseChoice(currentLevel, decision);
        decisionMade(currentLevel + 1, decision);
    };

    const decisionMade = (nextLevel, choice) => {
        let texto = Interface.texts.find(text => {
            console.log(text.id, `${nextLevel}${choice}`)
            return text.id === `${nextLevel}${choice}`;
        });
        console.log(texto);
        Interface.texts[Interface.texts.indexOf(texto)].id = 2;
        
    };

    return {
        start,
        currentLevel,
        makeDecision
    };
    })();

    const Main = (() => {
    const startButton = document.querySelector("#startgame");
    startButton.addEventListener("click", Game.start);

    return {};
    })();
