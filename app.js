

const Player = (() => {
    let choices = [
        {
            a: false,
            b: false,
        },
        {
            a: false,
            b: false,
        }
    ]

    const chooseChoice = (level, choice) => {
        if (level < choices.length && choice in choices[level]) {
            choices[level][choice] = true;
        }
    }

    const resetChoices = () => {
        choices.forEach((level) => {
            Object.keys(level).forEach( (choice) => {
                level[choice] = false;
            });
        })
    }

    return {
        choices,
        chooseChoice,
        resetChoices,
    }
})();

const Interface = (() => {
    const appElement = document.querySelector("#app");
    const startScreen = document.querySelector(".startscreen");

    const reset = () => {
        appElement.classList.add("dark");
        startScreen.style.display = "flex";

    }

    const hideStartScreen = () => {
        appElement.classList.remove("dark");
        startScreen.style.display = "none";
    }

    const switchLevel = (level) => {
        // Hide previous level
        if (level != 0) {
            document.querySelector(`.lvl${level - 1}`).style.display = "none";
        }
        const lvlElement = document.querySelector(`.lvl${level}`);
        lvlElement.style.display = "flex";

        startLevel(level, lvlElement);

    }

    // MANAGE TEXT PER LEVEL
    const startLevel = (level, lvlElement) => {
        let count = 0;
        let textElements = Array.from(lvlElement.querySelectorAll(".text"));
        let nextTextButton = lvlElement.querySelector(".nextText");
        nextTextButton.addEventListener("click", () => {

            if (count < textElements.length - 1) {
                count++;
                textElements[count - 1].style.display = "none";
                textElements[count].style.display = "flex";
            } else {
                // Display question?
                Game.nextLevel();
            }

        });
        textElements[count].style.display = "flex"
    }


    return {
        hideStartScreen,
        switchLevel,
        reset
    }
})();


const Game = (() => {
    const totalLevels = 1;  // Does not include 0
    let currentLevel = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.switchLevel(currentLevel);
    }

    const reset = () => {
        Interface.reset();
        currentLevel = 0;
    }

    const nextLevel = () => {
        currentLevel++;
        Interface.switchLevel(currentLevel);
    }


    return {
        start,
        reset,
        nextLevel
    }

})();

const Main = (() => {

    const startButton = document.querySelector("#startgame");
    startButton.addEventListener("click", Game.start);

    return {

    }
})();