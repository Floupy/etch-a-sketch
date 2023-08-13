"use strict";

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
const clearGridButton = document.querySelector('.clearGrid');
const chooseGridSizeButton = document.querySelector('.gridSizeChooser');
let grid;
let gridRows = 16;
let gridCols = 16;
let gridSize = 16
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);
chooseGridSizeButton.addEventListener('click', createGrid);
function createGrid() {
    clearGrid();
    getGridSize();
    maxCellSize = (960 / gridSize);
    console.log(maxCellSize);

        for(let i = 0; i < gridSize * gridSize; i++) {
            grid = document.createElement('div');
            grid.className = 'grid';
            grid.addEventListener('mouseover', draw);
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
function draw (){
    this.style.backgroundColor = 'black';
}

function getGridSize() {
    gridSize = Number(prompt("How big would you like your grid? \n Hint: Grid = number * number", '64'));

}
