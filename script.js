/*
problem
Whenever the cursor passes through the first pixel, set its opacity to 10%
(0.1). The next pixel should have an opacity of 0.2, then 0.3 ... 1.0, then 0.1.

plan
separate interests: write a named function getOpacity(gridSize) that creates an
array-like object that contains [0.1, 0.2, 0.3, ... 1.0, 0.1, ...], with the
number of elements equal to gridSize.

call getOpacity in eventlistener contained in colorInDivsGrayscale, set opacity
to that value

pseudocode

*/


function removeGridItems() {
  let gridItems = Array.from(document.getElementsByClassName('item'));
  gridItems.forEach(gridItem => gridItem.remove());
}

function colorInDivsBlack() {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.setAttribute('style', 'background-color: black;');
    });
  });
}

function colorInDivsRandom() {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.setAttribute('style', `background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)});`);
    });
  });
}

function colorInDivsGrayscale(gridSize) {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      for (let i = 0; i < 10; i++) {
        item.setAttribute('style', `background-color: black; opacity: ${opacityArray[i]};`);
      }
    });
  });
}

function buildGrid(gridSize) {
  const container = document.getElementById('container');
  container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`);
  for(let i = 0; i < gridSize ** 2; i++){
    div.setAttribute('style', `height: ${gridSize}fr; width: ${gridSize}fr;`)
    container.appendChild(div.cloneNode(true));
  }
}

function setGridSizeBlack() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSizeBlack();
  }
  removeGridItems();
  buildGrid(gridSize);
  colorInDivsBlack();
}

function setGridSizeRandom() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSizeRandom();
  }
  removeGridItems();
  buildGrid(gridSize);
  colorInDivsRandom();
}

function setGridSizeGrayscale() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSizeGrayscale();
  }
  removeGridItems();
  buildGrid(gridSize);
  colorInDivsGrayscale(gridSize);
}

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', setGridSizeBlack);

const randomButton = document.getElementById('random');
randomButton.addEventListener('click', setGridSizeRandom);

const grayscaleButton = document.getElementById('grayscale');
grayscaleButton.addEventListener('click', setGridSizeGrayscale);

const div = document.createElement('div');
div.className = 'item';

const opacityArray = [
  0.1, 0.2, 0.3, 0.4, 0.5,
  0.6, 0.7, 0.8, 0.9, 1
];