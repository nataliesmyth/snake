import { getInputDirection } from './input.js'

export const snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

export function update() {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // snake movement!!
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
};

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment,index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
};

export function getSnakeHead() {
    // index 0 will always be the snake head
    return snakeBody[0]
};

export function snakeIntersection() {
    // is the head of the snake touching other body parts of the snake?
    return onSnake(snakeBody[0], { ignoreHead: true });
};

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
};

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        // append new element on the end of our snake
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    };

    newSegments = 0;
};