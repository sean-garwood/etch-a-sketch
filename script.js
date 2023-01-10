/* problem
set up a hover event listener so grid divs change color when mouse passes over
them.

This should leave a trail through the grid, like a pen would.

plan
I need ot set up event listener for when a mouse enters a div, and/or when it
leaves a div.

This can be done when the mouse hovers over a cell, or when it leaves a div (or
both?)
 
pseudocode

*/
const container = document.getElementById('container');
const div = document.createElement('div');
div.className = 'item';

for(let i = 0; i < 256; i++){
  div.textContent = `${i+1}`;
  container.appendChild(div.cloneNode(true));
}