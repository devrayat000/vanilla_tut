// alert("Don't enter this website!");

// const isConfirmed = confirm("Do you want to enter this website?");
// console.log(isConfirmed);

// const name = prompt("Enter you name");
// console.log(name);

// console.log(document);

// const buttonEl = document.getElementById("btn");
// const buttonEl2 = document.getElementById("btn2");
// const btn1 = document.querySelector("#btn");
// console.log(btn1);

// buttonEl.onclick = function () {
//   //   const name = prompt("Enter you name");
//   //   console.log(name);

//   document.body.classList.add("red");
// };

// buttonEl2.onclick = () => {
//   alert("You are doomed");

// };

// const redButton = document.getElementById("btn-r");
// const container = document.querySelector("div.container");

// let state = false;

// redButton.onclick = () => {
//   //   document.body.classList.add("red");
//   //   document.body.style.backgroundColor = "yellow";
//   //   redButton.style.display = "none";
//   container.style.width = state ? "300px" : "100px";
//   state = !state;
// };
// blueButton.onclick = () => document.body.classList.add("blue");
// greenButton.onclick = () => document.body.classList.add("green");

// const date1 = new Date('10-5-2001')
// console.log(date1);

// const now = new Date()
// console.log(now);
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getDate());
// console.log(now.toISOString());

// const str1 = new String('abcd')
// console.log(str1);

// const num1 = new Number(false)
// console.log(num1);

// const bool1 = new Boolean()
// console.log(bool1);

let i = 1;

setInterval(() => {
  console.log(`The number is${i}`);
  i++;
}, 1000);
