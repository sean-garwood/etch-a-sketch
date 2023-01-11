/* problem

Add a button to the top of the screen that, when pressed, prompts the user for
the number of squares per side for the grid. Limit this prompt to be in the
range of 1-100, inclusive.

Once the prompt is complete, the old grid should be removed, and replaced with
the new grid in the same total space as before. (Currently, the grid is not
limited in size.)

a good starting limit for the absolute size of the grid is 960px.

plan

Set the absolute size of the grid in the stylesheet.

add a button element to the top of the document.

add an event listener to the button element that will run an arrow function that
returns a prompt.

Store the value from the prompt into a gridSize variable.



pseudocode

*/
const container = document.getElementById('container');
const div = document.createElement('div');
div.className = 'item';

for(let i = 0; i < 256; i++){
  container.appendChild(div.cloneNode(true));
}

const items = Array.from(document.getElementsByClassName('item'));
items.forEach(item => {
  item.addEventListener('mouseover', e => {
    item.setAttribute('style', 'background-color: yellow;')
  });
});