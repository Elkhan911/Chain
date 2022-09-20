// 1.

localStorage.setItem("key1", 1);
localStorage.setItem("key2", 2);
localStorage.setItem("key3", 3);

let sum =
  Number(localStorage.getItem("key1")) +
  Number(localStorage.getItem("key2")) +
  Number(localStorage.getItem("key3"));
// console.log(sum);

// 2.

let firstEnter = localStorage.getItem("enter1");
let secondEnter = localStorage.getItem("enter2");
let diffTime = (secondEnter - firstEnter) / (1000 * 60);

if (!firstEnter) {
  let first = new Date().getTime();
  localStorage.setItem("enter1", first);
  if (firstEnter) {
    let today = new Date().getTime();
    localStorage.setItem("enter2", today);
  }
}

console.log(firstEnter);
console.log(secondEnter);
console.log(diffTime);
