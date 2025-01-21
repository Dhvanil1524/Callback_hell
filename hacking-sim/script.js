// let head = document.querySelector("h2").style.color = "lightgreen";
let body1 = document.querySelector("body").style.backgroundColor = "black";
let body2 = document.querySelector("body").style.color = "lightgreen";
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let t4 = document.getElementById("t4");
let t5 = document.getElementById("t5");

// setTimeout(() => {
//     t1.toggleAttribute("hidden");
// }, 1000);
// setTimeout(() => {
//     t1.toggleAttribute("hidden");
// }, 2000);
// setTimeout(() => {
//     t3.toggleAttribute("hidden");
// }, 3000);
// setTimeout(() => {
//     t4.toggleAttribute("hidden");
// }, 4000);
// setTimeout(() => {
//     t5.toggleAttribute("hidden");
// }, 5000);


setTimeout(() => {
    t1.toggleAttribute("hidden");
}, 1000).then(setTimeout(() => {
    t2.toggleAttribute("hidden");
}, 2500).then(setTimeout(() => {
    t3.toggleAttribute("hidden");
}, 3700).then(setTimeout(() => {
    t4.toggleAttribute("hidden");
}, 5000).then(setTimeout(() => {
    t5.toggleAttribute("hidden");
}, 6500)))));
