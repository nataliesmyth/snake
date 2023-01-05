import { update as updateSnake, draw as drawSnake, snakeSpeed } from './snake.js'

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');
// STEP 1: Set up game loop
// a game loop is a function that is going to repeat itself over and over again on a set interval so you can constantly update your render
// for our purposes, this allows us to constantly update our snake and food position, and do all the calculations we need on a set time limit

// current time is the exact time stamp of when the function runs
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    console.log('Render')

    lastRenderTime = currentTime;
    // console.log(secondsSinceLastRender);

    // logic
    update();
    // UI
    draw();
}

// request the loop for the first time
window.requestAnimationFrame(main)

function update() {
    updateSnake();
}

function draw() {
    drawSnake(gameBoard);
}