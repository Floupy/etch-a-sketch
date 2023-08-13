"use strict";

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
const clearGridButton = document.querySelector('.clearGrid');
const toggleBlackInk = document.querySelector('.blackInk');
const toggleColourfulInk = document.querySelector('.colourfulInk');
let grid;
let gridRows = 16;
let gridCols = 16;
let gridSize = 16
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);
toggleBlackInk.addEventListener('click', drawBlack);
toggleColourfulInk.addEventListener('click', drawColourful);

// TODO make ink colour choosable during drawing
function createGrid() {
    clearGrid();
    getGridSize();
    maxCellSize = (960 / gridSize);
    console.log(maxCellSize);

        for(let i = 0; i < gridSize * gridSize; i++) {
            grid = document.createElement('div');
            grid.className = 'grid';
            if(container.classList.contains('blackInk')) {
                grid.addEventListener('mouseover', drawBlack);
            }
            else if(container.classList.contains('colourfulInk')) {
                grid.addEventListener('mouseover', drawColourful)
            }
            // grid.addEventListener('mouseover', drawColourful);
            grid.style.maxHeight = maxCellSize;
            grid.style.flexBasis = maxCellSize + "px";
            container.appendChild(grid);
        }

}
function clearGrid() {
    while(container.hasChildNodes()) {
        container.lastChild.remove();
    }
}
function drawBlack (){
    container.classList.remove('colourfulInk');
    container.classList.add('blackInk');
    this.style.backgroundColor = 'black';
}

function drawColourful() {
    container.classList.remove('blackInk');
    container.classList.add('colourfulInk');
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);
    console.log();
    this.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
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
