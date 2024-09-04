// First create an object of prototype

const bookProtos ={

  getSummary: function(){
    return `${this.title} was written by
    ${this.author} in ${this.year}`;
  },

  getAge: function(){
    const years = new Date().getFullYear() -this.year;
    return `${this.title} is ${years} years old`
  }
};

//Create Object
/* const book1 = Object.create(bookProtos);
  book1.title = 'Make it last';
  book1.author = 'Chris Mawela';
  book1.year = '2015' */

  // Another way of creating an Object
  const book1 = Object.create(bookProtos, {
    title: {value: 'Webnesday'},
    author: {value: 'John Doe'},
    year: {value: '2017'}
  })

  console.log(book1)

