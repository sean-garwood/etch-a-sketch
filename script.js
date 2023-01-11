/* problem
set up a hover event listener so grid divs change color when mouse passes over
them.

This should leave a trail through the grid, like a pen would.

plan
I need ot set up event listener for when a mouse enters a div, and/or when it
leaves a div.

This can be done when the mouse hovers over a cell, or when it leaves a div (or
both?)

First, I need to be able to pick out a cell
 
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