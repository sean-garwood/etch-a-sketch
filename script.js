/* 
#problem

Add a button to the top of the screen that, when pressed, prompts the user for
the number of squares per side for the grid.

Once the prompt is complete, the old grid should be removed, and replaced with
the new grid in the same total space as before. (Currently, the grid is not
limited in size.)

a good starting limit for the absolute size of the grid is 960px.

#plan

Store the value from the prompt into a gridSize variable.
check if gridSize is an int between 1 and 100.
  if not, start over
clear old grid items
pass gridSize to CSS sheet



#pseudocode

*/

function setGridSize() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSize();
  }
  removeGridItems();
  //build the grid
  const container = document.getElementById('container');
  for(let i = 0; i < gridSize ** 2; i++){
    container.appendChild(div.cloneNode(true));
  }
  const items = Array.from(document.getElementsByClassName('item'));
  items.forEach(item => {
    item.addEventListener('mouseover', e => {
      item.setAttribute('style', 'background-color: yellow;')
    });
  });
}

function removeGridItems() {
  let gridItems = Array.from(document.getElementsByClassName('item'));
  gridItems.forEach(gridItem => gridItem.remove());
}

const button = document.querySelector('button');
button.addEventListener('click', setGridSize);
  
const div = document.createElement('div');
div.className = 'item';