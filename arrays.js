console.log("Arrays are fun!")


// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats) {
//   console.log(cat);
// }


// function toUpper(string) {
//     return string.toUpperCase();
//   }
  
//   const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
//   const upperCats = cats.map(toUpper);
  
//   console.log(upperCats);
//   // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]




//   function lCat(cat) {
//     return cat.startsWith("L");
//   }
  
//   const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
//   const filtered = cats.filter(lCat);
  
//   console.log(filtered);
//   // [ "Leopard", "Lion" ]


//   versus this!!! Shorter way to write functions. (Arrow functions)

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const filtered = cats.filter((cat) => cat.startsWith("L"));
// console.log(filtered);
// // [ "Leopard", "Lion" ]





// this one is cool!


// const results = document.querySelector("#results");

// function calculate() {
//   for (let i = 1; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i}`;
//     results.textContent += `${newResult}\n`;
//   }
//   results.textContent += "\nFinished!\n\n";
// }

// const calculateBtn = document.querySelector("#calculate");
// const clearBtn = document.querySelector("#clear");

// calculateBtn.addEventListener("click", calculate);
// clearBtn.addEventListener("click", () => (results.textContent = ""));



// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }


const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
  ];
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  
  btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
      const splitContact = contact.split(":");
      if (splitContact[0].toLowerCase() === searchName) {
        para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
        break;
      }
    }
    if (para.textContent === "") {
      para.textContent = "Contact not found.";
    }
  });
  