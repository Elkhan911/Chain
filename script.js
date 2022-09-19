// 1. Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами.
// Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму.
// Запустите второй скрипт и убедитесь в его работоспособности.

localStorage.setItem("key1", "1");
localStorage.setItem("key2", "2");
localStorage.setItem("key3", "3");

let res =
  Number(localStorage.getItem("key1")) +
  Number(localStorage.getItem("key2")) +
  Number(localStorage.getItem("key3"));
// console.log(res);

// 2. По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени.
// Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.

let firstTime = localStorage.getItem("firstTime");
let currentTime = localStorage.getItem("currentTime");
let diffMinutes = (Number(currentTime) - Number(firstTime)) / (1000 * 60);

if (firstTime == null) {
  let timeFirst = new Date().getTime();
  localStorage.setItem("firstTime", timeFirst);
}
if (firstTime !== null) {
  let timeNow = new Date().getTime();
  localStorage.setItem("currentTime", timeNow);
}

console.log(firstTime);
console.log(currentTime);
console.log(diffMinutes);

// 3. Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище.
// При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.

let input3 = document.querySelector("#_input3");

input3.addEventListener("blur", function () {
  localStorage.setItem("inp3Value", input3.value);
});

input3.value = localStorage.getItem("inp3Value");
