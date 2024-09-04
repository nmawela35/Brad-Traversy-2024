// console.dir(document.title)
//console.log(document.all)

let input = document.querySelector('input')
// console.log(input)
input.value = 'Hi Chris'

var submit = document.querySelector('input[type="submit"]');
// console.log(submit)
submit.value = 'Send';

var firstItem = document.querySelector('.list-group-item:first-child')
firstItem.style.backgroundColor = 'yellow'

var lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.backgroundColor = 'blue'

var thirdItem = document.querySelector('.list-group-item:nth-child(3  )')
thirdItem.style.backgroundColor = 'grey'

let listItems = document.querySelector('#items')
console.log(listItems)




// var thirdItem = document.querySelector('list-group-item:nth-child(3)')


