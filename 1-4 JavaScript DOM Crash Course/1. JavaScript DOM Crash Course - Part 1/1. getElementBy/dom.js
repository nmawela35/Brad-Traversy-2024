// console.dir(document.title)
//console.log(document.all)

let list = document.getElementsByClassName("list-group-item");
console.log(list);
console.log(list[0]);
console.log(list[1]);

for (let i = 0; i <list.length; i++){
    list[i].style.backgroundColor ="grey";
}

for (const i of list){
    i.style.backgroundColor ="red";
}

let li = document.getElementsByTagName('li')

for (const i of li){
    i.style.backgroundColor ="blue";
}

