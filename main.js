"use strict";

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
let grid = document.createElement('div')
let gridSize = 100;
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);

function createGrid() {
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

