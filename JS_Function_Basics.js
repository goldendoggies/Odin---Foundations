function favoriteAnimal(animal,size) {
    return size + " " + animal + " are my favorite animal!"
}

console.log(favoriteAnimal('Cats','small'))

function add7(num) {

    return num + 7;
}

console.log(add7(14))

function multiply (num1, num2) {
    return num1 * num2
}

console.log(multiply(3,4))


function capitalize (LcWord) {
    // let LenWord = LcWord.length;
    return LcWord[0].toUpperCase()+LcWord.slice(1).toLowerCase();
}
console.log(capitalize("BoTh"))

// function lastletter (LstWord) {
//     // let LenWord = LstWord.length;
//     // return LenWord;
//     return LstWord.substr(-1)
// }
// console.log(lastletter("abcd"))

// let lastletter = (LstWord) => LstWord.substr(-1);
// alert( lastletter("abcd") ); 

console.log("==================[ Begin: FizzBuzz!! ]======================")

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// for (let i=1; i <= answer; i++) {
//     console.log(i);
// }

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i %5 === 0) {
        console.log("BuzzFizz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else  if (i % 5 === 0) {
        console.log("Buzz");
    } else {    
        console.log(i);
    }
}

console.log("==================[ End: FizzBuzz!! ]======================")

// const a = "Hello";
// const b = "World";

// console.log(c);

// const a = 5;
// const b = 10;

// function add() {
//   return c;
// }

// function print() {
//   add();
// }

// print();

// an array of strings
let data = ["apples", "oranges", "bananas"]
console.table(data);

// an array of objects, logging only firstName

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const tyrone = new Person("Tyrone", "Jones");
  const janet = new Person("Janet", "Smith");
  const maria = new Person("Maria", "Cruz");
  
  console.table([tyrone, janet, maria], ["lastName"]);