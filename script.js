function removeGridItems() {
  let gridItems = Array.from(document.getElementsByClassName('item'));
  gridItems.forEach(gridItem => gridItem.remove());
}

function colorInDivs() {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.setAttribute('style', 'background-color: gray;')
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

function setGridSize() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSize();
  }
  removeGridItems();
  buildGrid(gridSize);
  colorInDivs();
}

const button = document.querySelector('button');
button.addEventListener('click', setGridSize);
  
const div = document.createElement('div');
div.className = 'item';