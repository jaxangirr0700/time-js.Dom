// let title = document.querySelectorAll("#h2");
// // console.log(title);
// let test = Array.from(title).slice(0,2);
// console.log(test);
// let rr = document;

// qiymat olish html elementdan
//
// let titlee = document.querySelector(".title");
// console.log(titlee.innerHTML);
// console.log(titlee.innerText);
// console.log(titlee.textContent);
//
//
//
// CLASS QOSHISHI AYIRISH
//
// titlee.classList.add("dark");
// titlee.classList.remove("dark");
// titlee.classList.toggle("dark")
// titlee.classList.toggle("dark")
//
//
// SET TIMEOUT
// let count = 0;
// let fn = (a, b) => {
//   console.log(a + b);
//   count++;
//   document.querySelector("body").classList.toggle("dark");
//   //   style.color = "white";
// };
// // setTimeout(fn ,500,10,15)
// setInterval(fn, 500, 10, 15);
//
//
//
//
//
///////////////////HOME WORK ///////////////////////////////////////
//
//
//
//
let timee = document.querySelector(".time");
let soat = document.querySelector(".soat");
let minut = document.querySelector(".minut");
let sekund = document.querySelector(".sekund");

setInterval(() => {
  let date = new Date();
  soat.innerHTML = date.getHours().toString().padStart(2, 0);
  minut.innerHTML = date.getMinutes().toString().padStart(2, 0);
  sekund.innerHTML = date.getSeconds().toString().padStart(2, 0);
}, 1000);
