"use strict";

// TODO implement:  implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.

const container = document.querySelector('.container');
const createGridButton = document.querySelector('.createGrid');
const clearGridButton = document.querySelector('.clearGrid');
const toggleBlackInkButton = document.querySelector('.blackInk');
const toggleColourfulInk = document.querySelector('.colourfulInk');
const darkenInkButton = document.querySelector('.darkenInk');
const toggleCellBorderButton = document.querySelector('.toggleCellBorder');
let gridSizeSlider = document.querySelector('.gridSizeSlider');
let gridSizeText = document.querySelector('.gridSizeText')
let cell = document.querySelector('.class');
let containerSize = container.clientWidth;


let gridSize = 16;
let maxCellSize = 0;

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);
toggleBlackInkButton.addEventListener('click', drawBlack);
toggleColourfulInk.addEventListener('click', drawColourful);
darkenInkButton.addEventListener('click', drawDarken);
toggleCellBorderButton.addEventListener('click', toggleCellBorder);
gridSizeSlider.addEventListener('change', createGrid)
function createGrid() {
    container.innerHTML = ' ';
    dynamicGridSizeText();

    getGridSize();
    maxCellSize = (containerSize / gridSize);
    console.log(maxCellSize)
        for(let i = 0; i < gridSize * gridSize; i++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('blackInk');
            cell.classList.add('hasBorder')
            cell.addEventListener('mouseover', draw);
            cell.style.flexBasis = maxCellSize + "px";
            container.appendChild(cell);
        }
}
function clearGrid() {
    container.innerHTML = ' ';
    createGrid();
}

function draw() {
    let redValue = Math.floor(Math.random() * 256);
    let greenValue = Math.floor(Math.random() * 256);
    let blueValue = Math.floor(Math.random() * 256);

    let currentColour = this.style.backgroundColor;

    if(cell.classList.contains('blackInk')) {
        this.style.backgroundColor = 'black';
    } else if(cell.classList.contains('colourfulInk')) {
        this.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
    } else if(cell.classList.contains('darkenInk')) {

        console.log(currentColour)
    }
}


function drawBlack (){
    if(!cell.classList.contains('colourfulInk')) {
        cell.classList.add('blackInk')
    } else if (cell.classList.contains('colourfulInk')) {
        cell.classList.replace('colourfulInk', 'blackInk');
    } else if(cell.classList.contains('darkenInk')) {
        cell.classList.replace('darkenInk', 'blackInk');
    }

}

function drawColourful() {
    if(!cell.classList.contains('blackInk')) {
        cell.classList.add('colourfulInk');
    } else if (cell.classList.contains('blackInk')) {
        cell.classList.replace('blackInk', 'colourfulInk');
    } else if(cell.classList.contains('darkenInk')) {
        cell.classList.replace('darkenInk', 'colourfulInk');
    }
}

function drawDarken() {
    if(!cell.classList.contains('darkenInk')) {
        cell.classList.add('darkenInk');
    } else if(cell.classList.contains('blackInk')) {
        cell.classList.replace('blackInk', 'darkenInk');
    } else if(cell.classList.contains('colourfulInk')) {
        cell.classList.replace('colourfulInk', 'darkenInk');
    }
}

function getGridSize() {
    // gridSize = Number(prompt("How big would you like your grid?(max: 100) \nHint: Grid = number * number", '64'));
    // if(gridSize > 100) {
    //     gridSize = Number(prompt("Please choose a size below 100!\nHow big would you like your grid?(max: 100) \nHint: Grid = number * number", '64'));
    // }
    // else {
    //     return gridSize;
    // }

    gridSize = gridSizeSlider.value;
    gridSizeText.textContent = `Grid Size: ${gridSize} x ${gridSize}`;
}

function toggleCellBorder() {

    console.log('cell Border Toggled');

    // cell.classList.add('hasBorder');
    if(container.classList.contains('hasBorder')) {
        cell.classList.remove('hasBorder');
        // cell.style.outlineStyle = 'solid';
        // cell.style.outlineWidth = '0.5px';
        // cell.style.outlineColor = 'gray';
    } else if (!cell.classList.contains('hasBorder')) {
        cell.classList.add('hasBorder')
        // cell.style.outlineStyle = ' ';
        // cell.style.outlineWidth = '0px';
        // cell.style.outlineColor = ' ';

    }
}
function darkenColour() {

}
function dynamicGridSizeText() {
    gridSize = gridSizeSlider.value;
    gridSizeText.textContent = `Grid size:${gridSize} x ${gridSize}`;
}