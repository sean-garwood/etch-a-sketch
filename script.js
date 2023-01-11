/* 
#problem

Add a button to the top of the screen that, when pressed, prompts the user for
the number of squares per side for the grid. Limit this prompt to be in the
range of 1-100, inclusive.

Once the prompt is complete, the old grid should be removed, and replaced with
the new grid in the same total space as before. (Currently, the grid is not
limited in size.)

a good starting limit for the absolute size of the grid is 960px.

#plan

add an event listener to the button element that will run an arrow function that
returns a prompt.

Store the value from the prompt into a gridSize variable.



#pseudocode

*/

function setGridSize() {
  let gridSize = prompt('Set the grid size to an integer between 1 and 100');
  if (gridSize % 1 !== 0 || gridSize < 1 || gridSize > 100 ) {
    return setGridSize();
  }
  return gridSize;
}

const button = document.querySelector('button');
button.addEventListener('click', setGridSize);
  
const container = document.getElementById('container');
const div = document.createElement('div');
div.className = 'item';

//this loop needs to be edited to be dynamic
for(let i = 0; i < 256; i++){
  container.appendChild(div.cloneNode(true));
}

const items = Array.from(document.getElementsByClassName('item'));
items.forEach(item => {
  item.addEventListener('mouseover', e => {
    item.setAttribute('style', 'background-color: yellow;')
  });
});