let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

// let menuIcon = document.querySelector(".menu-icon")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");    
    
}




// defining the search_tool function with an Arrow expression, passing the Event Object from
// EventTarget.addEventListener() to the function body:
const search_tool = (evt) => {
    // retrieving all the .card elements:
    const cards = document.querySelectorAll('.listcontainer .vidlist'),
      // retrieving the input value here, once, for comparison, removing leading/trailing
      // white-space and converting to upper-case:
      value = evt.currentTarget.value.trim().toUpperCase();
  
    // iterating over the cards:
    for (let vidlist of cards) {
      // using an Array literal, with the spread operator, to convert the
      // iterable NodeList into an Array:
      const texts_to_search_for = [...vidlist.querySelectorAll('.vid-info a')];
  
      // Array.prototype.some() takes the supplied array-element and returns a Boolean if any element
      // of that Array returns a true value for the supplied test:
      if (texts_to_search_for.some(
          // here we pass in a reference to the Array-element ('txt') to the function body,
          // we find the element's textContent, convert that text to upper-case using
          // String.prototype.toUpperCase(), and then we test to see if that String
          // includes the string contained in the variable of 'value', using
          // String.prototype.includes():
          (txt) => txt.textContent.toUpperCase().includes(value)
        )) {
        // if any of the element node's text-content contains the 'value' String
        // we unset the display property:
        vidlist.style.display = '';
      } else {
        // otherwise we set the display to 'none':
        vidlist.style.display = 'none';
      }
    }
  }
  
  // here we use EventTarget.addEventListener() to bind the search_tool() function (note the deliberate
  // lack of parentheses) as the event-handler for the 'input' event:
  document.querySelector('input').addEventListener('input', search_tool);
  