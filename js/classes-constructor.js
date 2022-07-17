// var combineNames(firstName, lastName) {
//     // return firstName and lastName combined as one string and separated by a space.
//     // 'Avion', 'School' -> 'Avion School'
//     // code here
//     console.log(combineNames.join());
//   }

//   combineNames('Hello ', 'world');

// const array = ['The', 'quick', 'brown', 'fox'];

// console.log(array.join());

// console.log("haha")


// const num1 = 5
// const num2 = 8
// const result = num1 + num2

// console.log(`The sum of ${num1} and ${num2} is ${result}`)



// classes, objects, constructors
class House {
    constructor(color) {
        this.color = color
    }
    getFurniture() {
        return 'sofa'
}
}

const houseObject = new House('red')
const houseObject2 = new House('blue')


console.log(houseObject.color)
console.log(houseObject.getFurniture())

console.log(houseObject2.color)
console.log(houseObject2.getFurniture())



//adding a parameter to the constructor and concatinate
class person {
constructor(gender, height) {
    this.gender = gender;
    this.height = height;
  }
  work(){
    return 'developer'
  }
}

const person1 = new person('ma le', '5.1')
const person2 = new person('female', '4.11')

console.log(`The gender is ${person1.gender} and his height is ${person1.height}`)
console.log(`The gender is ${person2.gender} and his height is ${person2.height}`)






class newBatch {
    constructor(instructor, age) {
        this.herName = instructor
        this.number = age
    }
    showName() {
        console.log(`The instructor's name is ${newName.herName} and her age is ${newName.number}`)
    }
}

const givenName = new newBatch('Kate', 20)
const newName = new newBatch('Abdul', 23)

givenName.showName();



 
