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
console.log(res);

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

// 4. Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее. - ??
// Сделайте счетчик обновления страницы.
// Каждый раз при обновлении выводите значение счетчика на экран.

let span4 = document.querySelector("#_span4");
let counterValue4 = localStorage.getItem("counter4");
let counterPlus = 0;

if (counterValue4 == null) {
  localStorage.setItem("counter4", 0);
  span4.textContent = 0;
} else {
  let a = counterPlus++;
  localStorage.setItem("counter4", a);
  span4.textContent = localStorage.getItem("counter4");
  console.log(localStorage.getItem("counter4"));
}

// **********************************   Хранение массивов и объектов в локальном хранилище     ***************************

// 5. Даны инпуты и кнопка. По нажатию на кнопку получите тексты всех инпутов
// в виде массива и сохраните этот массив в локальное хранилище.

let inputs5All = document.querySelectorAll(".task__input5");
let arr5 = [];

for (let input of inputs5All) {
  arr5.push(input.value);
}

localStorage.setItem("array5", JSON.stringify(arr5));
console.log(localStorage.getItem("array5"));
