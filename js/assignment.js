// const store = { 
//     storeName: '',
//     inventoryList: '',
//     earnings: ''
// }

// const book = {
//     title: 'asdf',
//     quantity: 'asdf',
//     value: 'asdf'
// }

// console.log(store)
// console.log(book)



// class addBook {
//     constructor(title, quantity, value) {
//         this.bookTitle = title;
//         this.bookQuantity = quantity;
//         this.bookValue = value;
//     }
//     newBooks() {
//         console.log(book)
//     }
// }

// const bookMore = new addBook('Mulan', 'Good', 20)
// const restockBook = new addBook('Frozen', 'Rejected', 15)

// bookMore.newBooks();



let store = {
    name : "Tindahan",
    inventoryList : [],
    earnings : 0
  }



class Book {
  constructor(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
  }
}

function addBook(title, quantity, value) {
  let newBook = new Book(title, quantity, value);
  store.inventoryList.push(newBook);
}


addBook("Hele", 1, 500)
addBook("Langit", 2, 400)
console.log(store.inventoryList);

function restockBook(title, quantity) {
   let flag = false;
  for (const book of store.inventoryList) {
    if(book.title === title) {
      book.quantity += quantity;
      flag = true;
      if(flag === true) {
        break;
      }
    }
      else {
        console.log("Title not found! Cannot proceed with restocking.")

    }
  }
}

function sellBook(title, quantity) {
  let flag = false;
  for (const book of store.inventoryList) {
    if(book.title !== title) {
      continue;
    } 
    else if (book.quantity < quantity) {
      console.log("Only " + book.quantity + " stocks left.");
      break;
    }
    else if (book.title === title) {
      book.quantity -= quantity;
      store.earnings = store.earnings + (book.value * quantity);
      console.log("Successful transaction!");
    }
  }
}

sellBook("Langit", 2);

function totalEarnings() {
  console.log("The total earnings of, " + store.name + " ,is" + store.earnings + "php.");
}

totalEarnings();

function listInventory() {
  console.log(store.inventoryList);
}

listInventory();