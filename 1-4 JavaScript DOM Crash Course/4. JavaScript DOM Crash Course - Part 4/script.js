let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

form.addEventListener('submit', addItem); //Form submit
itemList.addEventListener('click', removeItem) //Delete event
filter.addEventListener('keyup', filterItems)


function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById('item').value;  // Get input value

  let li = document.createElement('li')  //Create new element li
  li.classList.add('list-group-item') //Add class name
  li.appendChild(document.createTextNode(newItem))  //Add text node with input value
  itemList.appendChild(li)

  //Create a Delete button
  let delBtn = document.createElement('button');
  delBtn.className = 'btn btn-danger btn-sm float-right delete' // delBtn.classList.add("btn btn-danger btn-sm float-right delete")
  delBtn.appendChild(document.createTextNode('X'));
  li.appendChild(delBtn)

  itemList.appendChild(li)
}
//Remove item
function removeItem(e){
  if (e.target.classList.contains('delete')){
    if (confirm('Are you sure')){
      let li = e.target.parentElement;
      itemList.removeChild(li)
    }
  }
}

function filterItems(e){
  let text = e.target.value.toLowerCase();   //convert text to lowercase
  let items = itemList.getElementsByTagName('li') //get list
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else{
      item.style.display = 'none';
    }
  })

}

