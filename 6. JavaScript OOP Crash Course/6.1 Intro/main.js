//Constructor
function Book(title, author, year){
  this.title =title;
  this.author = author;
  this.year = year;

  this.getSummary = function() {
    return `${this.title} was written by
     ${this.author} in ${this.year}`;
  };
}

//Instantiate an Object
const book1 = new Book('End of the Road', 'Chris Mawela', '2016');
const book2 = new Book('Book2', 'John Doe', '2012');

console.log(book2)
// console.log(book1.getSummary())
