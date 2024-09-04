
// console.log(document.title)
// console.log(window);
// console.log('Chris')

let titles = document.querySelectorAll('.title');

// titles[0].textContent = 'Hi Chris'
// titles[1].innerText = 'Hi 2nd h2 inner'

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'red'
    even[i].style.backgroundColor = 'yellow'
}





