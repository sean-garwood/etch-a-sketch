/* 
#problem

Once the prompt is complete, the old grid should be removed, and replaced with
the new grid in the same total space as before. (Currently, the grid is not
limited in size.)

#plan

Store the value from the prompt into a gridSize variable.
check if gridSize is an int between 1 and 100.
  if not, start over
clear old grid items
define new grid size using DOM method on the .container object


#pseudocode

*/

function setGridSize() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSize();
  }
  removeGridItems();
  buildGrid(gridSize);
  colorInDivs();
}

function removeGridItems() {
  let gridItems = Array.from(document.getElementsByClassName('item'));
  gridItems.forEach(gridItem => gridItem.remove());
}

function colorInDivs() {
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.setAttribute('style', 'background-color: yellow;')
    });
  });
}

function buildGrid(gridSize) {
  const container = document.getElementById('container');
  for(let i = 0; i < gridSize ** 2; i++){
    container.appendChild(div.cloneNode(true));
  }
}

const button = document.querySelector('button');
button.addEventListener('click', setGridSize);
  
const div = document.createElement('div');
div.className = 'item';