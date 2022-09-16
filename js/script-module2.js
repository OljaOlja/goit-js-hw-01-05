1; ////////////////////////////////////////////

// патерн ранний возврат - return early pattern

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// console.log(checkAge(4));

2; ////////////////////////////////////////////

// использован патерн ранний возврат - return early pattern

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// console.log(checkPassword());

3; ////////////////////////////////////////////

// использован патерн ранний возврат - return early pattern

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(6, 3));

4; ////////////////////////////////////////////

//создание масива, синтаксис, хранение однотипных данных

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

5; ////////////////////////////////////////////

//доступ к элементам масива по индексу

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(fruits[2]);

6; ////////////////////////////////////////////

//переопределение значений масива по индексу

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.table(fruits);

7; ////////////////////////////////////////////

//длины элементов масива, - свойство .length

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

8; ////////////////////////////////////////////

//индекс последнего элемента, - свойство .length-1

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(fruits);
// console.log(lastElement);
// console.log(lastElementIndex);

9; ////////////////////////////////////////////

//крайние элементы масива - доступ через [0] и .length-1 - два варианты решения задачи, const array - это масив произвольной длины
// вар.1

// const array = ["apple", "peach", "pear", "banana"];
// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// console.log(getExtremeElements(array));

// вар.2

// const array = ["apple", "peach", "pear", "banana"];

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lasttElement = array[array.length - 1];
//   const element = [firstElement, lasttElement];

//   return element;
// }
// console.log(getExtremeElements(array));

10; ////////////////////////////////////////////

// использован метод строк SPLIT() и в качестве разделителя "delimeter"

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }

// splitMessage("Mango", "");
// console.log(splitMessage("Mango", ""));

11; ////////////////////////////////////////////

// функция автоматического подсчета цены в зависимости от количества елементов строки и цены за символ

// function calculateEngravingPrice(message, pricePerWord) {
//   let messageSp = message.split(" ");
//   let messageNum = messageSp.length;
//   let totalPrice = messageNum * pricePerWord;
//   return totalPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

12; ////////////////////////////////////////////

// метод масива JOIN() позволяет соединить элементы массива в строку

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );

13; ////////////////////////////////////////////

// метод SPLIT() и JOIN() вместе, сначло нужно было привести заголовок к нижнему регистру,каким бы он ни был, потом разделить и соиденить через тире

// function slugify(title) {
//   let normalizedTitle = title.toLowerCase();
//   let titleSplit = normalizedTitle.split(" ");
//   let slug = titleSplit.join("-");
//   return slug;
// }
// console.log(slugify("Arrays for begginers"));

14; ////////////////////////////////////////////

// метод SLICE() (begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);

15; ////////////////////////////////////////////

// метод concat - объединения двух или более массивов, изменяет массив на котором вызывается, а возвращает новый

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

16; ////////////////////////////////////////////

// метод concat - объединения двух или более массивов, изменяет массив на котором вызывается, а возвращает новый

// function makeArray(firstArray, secondArray, maxLength) {
//   const arrayNew = firstArray.concat(secondArray);

//   if (arrayNew.length > maxLength) {
//     return arrayNew.slice(0, maxLength);
//   }
//   return arrayNew;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));

17; ////////////////////////////////////////////

// циклы - используются для многократного повторения кода

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

18; ////////////////////////////////////////////

// сумма чисел - цикл FOR

// let number = 22;
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(number));

19; ////////////////////////////////////////////

// цикл FOR для итерации по массиву, «перебор» поэлементно

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

20; ////////////////////////////////////////////

// функция подсчета суммы покупки

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

21; ////////////////////////////////////////////

// поиск самого длинного слова в строке

// function findLongestWord(string) {
//   let arrString = string.split(" ");
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrString.length; i += 1) {
//     wordLength = arrString[1].length;
//     if (arrString[i].length > wordLength) {
//       longestWord = arrString[i];
//       return longestWord;
//     }
//   }
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

22; ////////////////////////////////////////////

// метод push() позволяет добавить один или несколько элементов в конец массива, без указывания индекса добавляемых элементов

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }

// console.log(createArrayOfNumbers(4, 8));

23; ////////////////////////////////////////////

// фильтрация масива чисел

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

24; ////////////////////////////////////////////

// метод includes() проверяет есть ли в массиве элемент со значением и возвращает true или false

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   if (fruits.includes(fruit)) {
//     return true;
//   }
//   return false;
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// почему-то автопроверка пропустила это решение, но в коноли оно не работает, работает вариант выше!!!!

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// consol.log(checkFruit("plum"));

25; ////////////////////////////////////////////

// общие элементы - это те элементы, которые присудствуют во всех масивах

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let element of array1) {
//     if (array1.includes(element) && array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

26; ////////////////////////////////////////////

// метод for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки
// тело цикла будет выполняться для значения каждого элемента - это замена циклу for
// если не нужен доступ к счётчику итерации

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let all of order) {
//     total += all;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

27; ////////////////////////////////////////////

// фильтрация масива чисел
// выполнен рефакторинг функции в 1м варианте на 2й

// вар.1

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

// вар.2

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));

28; ////////////////////////////////////////////

// оператор %
// вместо того, чтобы возвращать результат деления, операция по модулю (%)
// возвращает целочисленный остаток от деления двух чисел - делимого и делителя
// 5 % 1 = 0;
// 5, разделенное на 1, равно 5, а остаток - 0

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

29; ////////////////////////////////////////////

// четные числа

// function getEvenNumbers(start, end) {
//   const numbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// }
// console.log(getEvenNumbers(2, 5));

30; ////////////////////////////////////////////

// оператор break, полностью прекращает выполнение цикла
// и передаёт управление на строку за его телом
// в переменную number записывалось первое число от start до end,
//   которое делится на 5 без остатка

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

31; ////////////////////////////////////////////

// оператор BREAK VS RETURN в функции
// рефакторинг функции findNumber(start, end, divisor) так, чтобы она
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return number;
// }
// console.log(findNumber(2, 6, 5));

32; ////////////////////////////////////////////

// функция  INCLUDES()
// при выполнении этой задачи
// в теле функции includes() нельзя использовать метод массив.includes(значение)

// function includes(array, value) {
//   for (let i = 0; i <= array.length; i += 1)
//     if (array[i] === value) {
//       return true;
//     }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
