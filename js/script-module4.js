1; ////////////////////////////////////////////

// чтобы в переменной result - результат выполнения функции makePizza
// а в переменной pointer - ссылка на функцию makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

2; ////////////////////////////////////////////

// функция обратного вызова (callback, колбэк) функция, которая передаётся
// другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию
// функция высшего порядка(higher order function)функция, принимающая в качестве
// параметров другие функции или возвращающая функцию как результат

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

3; ////////////////////////////////////////////

// eсли колбэк - функция маленькая и нужна только для передачи аргументом
// её можно объявить прямо при вызове функции в которую передаём колбэк
// nакая функция будет доступна только как значение параметра и больше нигде в коде

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   return `Eating pizza ${pizzaName}`;
// });

4; ////////////////////////////////////////////

// функция может принимать произвольное количество колбэков
// колбэки применяются для обработки действий пользователя на странице

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const { pizzas } = this;
//     for (const pizza of pizzas) {
//       if (pizza === pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(
//       `There is no pizza with a name ${pizzaName} in the assortment.`
//     );
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));

5; ////////////////////////////////////////////

// метод FOREACH(CALLBACK) - Перебирающий метод массива
// который используется как замена циклов for и for...of при работе с коллекцией

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (element, index) {
//     totalPrice += element;
//   });
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

6; ////////////////////////////////////////////

// фильтрация массива чисел

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (element) {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

7; ////////////////////////////////////////////

// общие элементы

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (element, index) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

8; ////////////////////////////////////////////

// стрелочные функции

// // function calculateTotalPrice(quantity, pricePerItem) {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));

9; ////////////////////////////////////////////

// неявный возврат

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(3, 400));

10; ////////////////////////////////////////////

// стрелочные функции как колбеки

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));

11; ////////////////////////////////////////////

// фильтрация масива чисел

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];
// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });
// //   return filteredNumbers;
// // }

// const filterArray=(numbers, value) =>{
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

12; ////////////////////////////////////////////

// общие элементы

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

13; ////////////////////////////////////////////

// чистые функции

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// function changeEven(numbers, value) {
//   const newArray = [];
//   numbers.forEach(function (number) {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

14; ////////////////////////////////////////////

// метод MAP()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets;

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

15; ////////////////////////////////////////////

// метод MAP() и массив обьектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// // Change code below this line

// const titles = books.map((book) => book.title);

16; ////////////////////////////////////////////

// метод flatMap()
// метод аналогичен map() применяется в случаях
// когда результат это многомерный массив
// который необходимо «разгладить»

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((book) => book.genres);

17; ////////////////////////////////////////////

// дополнить функцию getUserNames(users) так
// чтобы она возвращала массив имён пользователей(свойство name)
// из массива объектов в параметре users

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

18; ////////////////////////////////////////////

// дополнить функцию getUserEmails(users) так
// чтобы она возвращала массив почтовых адресов пользователей(свойство email)
// из массива объектов в параметре users

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

19; ////////////////////////////////////////////

// метод filter
// используется для единственной операции - фильтрации массива
// когда необходимо выбрать более одного элемента из коллекции
// по какому - то критерию

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

20; ////////////////////////////////////////////

// фильтрация уникальных элементов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

21; ////////////////////////////////////////////

// метод filter и массив обьектов

//  const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];

//  const MIN_RATING = 8;
//  const AUTHOR = "Bernard Cornwell";
//  // Change code below this line

//  const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
//  const booksByAuthor = books.filter((book) => book.author === AUTHOR);

22; ////////////////////////////////////////////

// функция getUsersWithEyeColor(users, color) возвращает массив пользователей
// у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color

// const getUsersWithEyeColor = (users, color) => {
//   const usersEyeColor = users.filter((user) => user.eyeColor === color);
//   return usersEyeColor;
// };

23; ////////////////////////////////////////////

// функция getUsersWithAge(users, minAge, maxAge) возвращает массив пользователей
// возраст которых(свойство age) попадает в промежуток от minAge до maxAge

// const getUsersWithAge = (users, minAge, maxAge) => {
//   getUsersAge = users.filter(
//     (user) => user.age >= minAge && user.age <= maxAge
//   );
//   return getUsersAge;
// };

24; ////////////////////////////////////////////

// функция getUsersWithFriend(users, friendName) возвращает массив пользователей
// у которых есть друг с именем в параметре friendName
// массив друзей пользователя хранится в свойстве friends

// const getUsersWithFriend = (users, friendName) => {
//   const usersFriend = users.filter((friend) =>
//     friend.friends.includes(friendName)
//   );
//   return usersFriend;
// };

25; ////////////////////////////////////////////

// функция getFriends(users) возвращает массив друзей всех пользователей
// (свойство friends)
// возвращаемый массив не содержит повторений

// const getFriends = (users) => {
//   const friends = users.flatMap((user) => user.friends);
//   const friendsOf = friends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return friendsOf;
// };

26; ////////////////////////////////////////////

// функция getActiveUsers(users) возвращает массив активных пользователей
// значение свойства isActive которых true

// const getActiveUsers = (users) => {
//   const activeUsers = users.filter((user) => user.isActive === true);
//   return activeUsers;
// };

27; ////////////////////////////////////////////

// функция getInactiveUsers(users) возвращает массив неактивных пользователей
// значение свойства isActive которых false

// const getInactiveUsers = (users) => {
//   const inActiveUsers = users.filter((user) => user.isActive === false);
//   return inActiveUsers;
// };

28; ////////////////////////////////////////////

// метод find()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// // Change code below this line
// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

29; ////////////////////////////////////////////

// функция getUserWithEmail(users, email) возвращает объект пользователя
// почта которого(свойство email) совпадает со значением параметра email

// const getUserWithEmail = (users, email) => {
//   const userWithEmail = users.find((user) => user.email === email);
//   return userWithEmail;
// };

30; ////////////////////////////////////////////

// метод every()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

31; ////////////////////////////////////////////

// функция isEveryUserActive(users) проверяет все ли пользователи сейчас активны
// (свойство isActive) и возвращала true или false

// const isEveryUserActive = (users) => {
//   const everyUserActive = users.every((user) => user.isActive === true);
//   return everyUserActive;
// };

32; ////////////////////////////////////////////

// метод some()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

33; ////////////////////////////////////////////

// функция isAnyUserActive(users) проверяет наличие активных пользователей
// (свойство isActive) и возвращала true или false

// const isAnyUserActive = (users) => {
//   const userActive = users.some((user) => user.isActive);
//   return userActive;
// };

34; ////////////////////////////////////////////

// метод reduce(callback, initialValue)

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce(
//   (previousValue, element, index, array) => previousValue + element
// );

// const averagePlayTime = totalPlayTime / playtimes.length;

35; ////////////////////////////////////////////

// метод reduce(callback, initialValue) и массив обьектов

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const playtimeName = players.map(
//   (player) => player.playtime / player.gamesPlayed
// );

// const totalAveragePlaytimePerGame = playtimeName.reduce(
//   (playtimeName, element, index, array) => playtimeName + element
// );

36; ////////////////////////////////////////////

// функция calculateTotalBalance(users) считает и возвращает сумму всех средств
// (свойство balance) которые хранят пользователи из массива users

// const calculateTotalBalance = (users) => {
//   const totalBalanceUsers = users.map((user) => user.balance);
//   const totalBalance = totalBalanceUsers.reduce(
//     (totalBalanceUsers, element, index, array) => totalBalanceUsers + element
//   );
//   return totalBalance;
// };

37; ////////////////////////////////////////////

// функция getTotalFriendCount(users) считает и возвращает общее количество друзей
// (свойство friends) всех пользователей из массива users

// const getTotalFriendCount = (users) => {
//   const friendCount = users.flatMap((user) => user.friends);
//   const totalFriendCount = friendCount.reduce(
//     (friendCount, element, index, array) => array.length
//   );
//   return totalFriendCount;
// };

38; ////////////////////////////////////////////

// метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

39; ////////////////////////////////////////////

// свой порядок сортировки чисел
// в переменной ascendingReleaseDates отсортированная по возрастанию
// копия массива releaseDates
// в переменной descendingReleaseDates копия отсортированная по убыванию

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

40; ////////////////////////////////////////////

// свой порядок сортировки строк
// в переменной authorsInAlphabetOrder отсортированная по алфавиту
// копия массива authors, в переменной authorsInReversedOrder копия отсортированная
// в обратном алфавитном порядке

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

41; ////////////////////////////////////////////

// сортировка обьектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

42; ////////////////////////////////////////////

// функция sortByAscendingBalance(users) возвращает массив пользователей
// отсортированный по возрастанию их баланса(свойство balance)

// const sortByAscendingBalance = (users) => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };

43; ////////////////////////////////////////////

// функция sortByDescendingFriendCount(users) возвращает массив пользователей
// отсортированный по убыванию количества их друзей(свойство friends)

// const sortByDescendingFriendCount = (users) => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };

44; ////////////////////////////////////////////

// функция sortByName(users) возвращает массив пользователей отсортированный
// по их имени(свойство name) в алфавитном порядке

// const sortByName = (users) => {
//   return [...users].sort((firstName, secondName) =>
//     firstName.name.localeCompare(secondName.name)
//   );
// };

45; ////////////////////////////////////////////

// цепочка методов (ЧЕЙНИНГ, CHAINING)
// в переменной names получился массив имён авторов в алфавитном порядке
// рейтинг книг которых больше значения переменной MIN_BOOK_RATING

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((first, second) => first.localeCompare(second));

46; ////////////////////////////////////////////

// функция getNamesSortedByFriendCount(users) возвращает массив имён пользователей
// отсортированный по возрастанию количества их друзей(свойство friends)

// const getNamesSortedByFriendCount = (users) => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };

47; ////////////////////////////////////////////

// функция getSortedFriends(users)возвращает массив уникальных имён друзей
// (свойство friends) отсортированный по алфавиту

// const getSortedFriends = (users) => {
//   return [...users]
//     .flatMap((user) => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((first, second) => first.localeCompare(second));
// };

48; ////////////////////////////////////////////

// функция getTotalBalanceByGender(users, gender) возвращает общий баланс
// пользователей(свойство balance), пол которых(свойство gender) совпадает со
// значением параметра gender

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => (total += user.balance), 0);
// };
