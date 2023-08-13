"use strict";

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
const clearGridButton = document.querySelector('.clearGrid');
let grid;
let gridSize = 16;
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);


function createGrid() {
    clearGrid();
    maxCellSize = (960 / gridSize);
    console.log(maxCellSize);
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize ; j++) {
            grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.maxHeight = maxCellSize;
            grid.style.flexBasis = maxCellSize + "px";
            container.appendChild(grid);
        }
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

