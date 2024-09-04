let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent);
select.addEventListener('change', runEvent1)
select.addEventListener('input', runEvent1)
//keyup 
//keypress 
//focus 
//blur -click out of input
//cut
//paste
//input - run when you do anything with an input

function runEvent(e){
    console.log(`Event type: ${e.type}`)
    console.log(e.target.value)
}
function runEvent1(e){
    console.log(`Event type: ${e.type}`)
    console.log(e.target.value)
}

//


