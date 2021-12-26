

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

    const showLevel = (level) => {
        const lvlElement = document.querySelector(`.lvl${level}`);
        console.log(lvlElement);
        lvlElement.style.display = "flex";
    }

    const NextText = () => {

    }


    return {
        hideStartScreen,
        showLevel
    }
})();


const Game = (() => {
    const totalLevels = 1;  // Does not include 0
    let currentLevel = 0;

    const start = () => {
        Interface.hideStartScreen();
        Interface.showLevel(currentLevel);
    }

    const reset = () => {
        Interface.init();
        currentLevel = 0;
    }


    return {
        start,
        reset
    }

})();

const Main = (() => {

    const startButton = document.querySelector("#startgame");
    startButton.addEventListener("click", Game.start);

    return {

    }
})();