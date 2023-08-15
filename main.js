"use strict";

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
const clearGridButton = document.querySelector('.clearGrid');
const toggleBlackInkButton = document.querySelector('.blackInk');
const toggleColourfulInk = document.querySelector('.colourfulInk');
let cell = document.querySelector('.cell');
let gridSize = 16
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);
toggleBlackInkButton.addEventListener('click', drawBlack);
toggleColourfulInk.addEventListener('click', drawColourful);

function createGrid() {
    clearGrid();
    getGridSize();
    maxCellSize = (960 / gridSize);
        for(let i = 0; i < gridSize * gridSize; i++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('blackInk');
            cell.addEventListener('mouseover', draw);
            cell.style.flexBasis = maxCellSize + "px";
            container.appendChild(cell);
        }
}
function clearGrid() {
    container.innerText = " ";
}

function draw() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);

    if(cell.classList.contains('blackInk')) {
        this.style.backgroundColor = 'black';

    }
    else if(cell.classList.contains('colourfulInk')) {
        this.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    }
}


function drawBlack (){
    if(!cell.classList.contains('colourfulInk')) {
        cell.classList.add('blackInk')
    } else if (cell.classList.contains('colourfulInk')) {
        cell.classList.replace('colourfulInk', 'blackInk');
    }

}

function drawColourful() {
    if(!cell.classList.contains('blackInk')) {
        cell.classList.add('colourfulInk');
    } else if (cell.classList.contains('blackInk')) {
        cell.classList.replace('blackInk', 'colourfulInk');
    }
}

function getGridSize() {
    gridSize = Number(prompt("How big would you like your grid?(max: 100) \nHint: Grid = number * number", '64'));
    if(gridSize > 100) {
        gridSize = Number(prompt("Please choose a size below 100!\nHow big would you like your grid?(max: 100) \nHint: Grid = number * number", '64'));
    }
    else {
        return gridSize;
    }
}
