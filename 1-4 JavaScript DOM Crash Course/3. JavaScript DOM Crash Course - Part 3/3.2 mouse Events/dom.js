
let button = document.getElementById('button')
let box = document.getElementById('box');

// // box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent1);
// // box.addEventListener('mouseover', runEvent2); //for any innerElement
// box.addEventListener('mouseout', runEvent3);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`)
// }

// function runEvent1(e){
//     console.log(`Event type: ${e.type}`)
// }

// function runEvent2(e){
//     console.log(`Event type: ${e.type}`)
// }
// function runEvent3(e){
//     console.log(`Event type: ${e.type}`)
// }

box.addEventListener('mouseover', runEvent)

function runEvent(e){
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}


