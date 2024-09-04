//TRAVERSING THE DOM

   let itemlist = document.querySelector('#items');
/*
 console.log(itemlist.parentNode)
 itemlist.parentNode.style.backgroundColor = 'grey';

 console.log(itemlist.parentNode.parentNode) */

//  itemlist.parentElement.style.backgroundColor = "lightblue"; 

// console.log(itemlist.childNodes)
// console.log(itemlist.children)

itemlist.children[1].style.backgroundColor = "grey"

// FirstChild - useless
console.log(itemlist.firstChild)

//firstElementChild
console.log(itemlist.firstElementChild);
itemlist.lastElementChild.textContent = "Hello Chris"