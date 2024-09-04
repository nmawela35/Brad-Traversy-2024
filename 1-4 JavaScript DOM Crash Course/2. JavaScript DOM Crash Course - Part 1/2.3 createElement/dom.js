//TRAVERSING THE DOM

let newDiv = document.createElement('div');

//Add class and id
newDiv.className = 'newDiv';
newDiv.id = 'newDivId';

//Add attributes
newDiv.setAttribute('title', 'Hello Div');

//Create a text node
let newDivText = document.createTextNode('Hello Chris Mawela')

//Add text to div
newDiv.appendChild(newDivText)

//Add to the DOM
let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)

newDiv.style.backgroundColor = 'grey'


console.log(newDiv)
