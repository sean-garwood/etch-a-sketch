/* problem
create a 16 x 16 grid of square divs, using only javascript dom methods.

plan
I will define a variable that represents a div. Then I will use DOM methods to
create additional instances of this div (256 to be exact). I will probably need
to use a for-loop to do this.

Then, I will need to make sure the style of the grid is correct. 

-16 on each row
-16 rows
-square in shape

I can define a class in my external style.css, then add that class to the divs
that were created with the dom methods.

might be best to create sixteen container divs that are flexboxes, then create
16 divs in each one of those.

no user interface yet.
no inputs
desired output is 16x16 grid.
create instance of a div dom object. call it a container.
use dom methods to create 16 of these, then 16 squares inside those.

pseudocode

create div reference
create sixteen instances of div, make them containers that are the length of 16
square sides, and the height of one.
  for loop: counter = 0, counter < 16, counter++
    append div to body
  for loop: counter = 0, counter < 16, counter++
    append div to container
link appropriate classes to these newly-created divs (i.e. container, square)

Pick the simplest one above: create div reference.

*/
const container = document.querySelector('div');
const div = document.createElement('div');

container.appendChild(div);
