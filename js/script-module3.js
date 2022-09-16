1; ////////////////////////////////////////////

// объекты - позволяют описать и сгруппировать характеристики объектов реального мира

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// console.log(apartment);

2; ////////////////////////////////////////////

// тут на примере значением свойства служит другой объект исп. для хранения вложенных и группированных данных

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// console.log(apartment);

3; ////////////////////////////////////////////

// доступ к свойству объекта с помощью синтаксиса обьект.ключ_свойства

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptDescr);

4; ////////////////////////////////////////////

// для доступа к вложенным свойствам используется цепочка обращений «через точку»

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// console.log(numberOfTags);

5; ////////////////////////////////////////////

// доступ к свойству объекта через обьект["ключ_свойства"], в скобках указывается имя свойства как строка

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// console.log(aptDescr);

6; ////////////////////////////////////////////

// значение свойств обьекта можно изменить, обратившись к нему по имени, например, «через точку», и присвоить новое значение, и при обращении учитывать вложенность!!!

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

7; ////////////////////////////////////////////

// добавления нового свойства после создания объекта - eсли при записи значения по имени, такого свойства нет, оно будет создано

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// console.log(apartment);

// вар.2 - как записать добавление свойств по другому

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment);

8; ////////////////////////////////////////////

// cинтаксис коротких свойств (shorthand properties) имя переменной как имя свойства, а её значение как значение свойства

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

9; ////////////////////////////////////////////

// cинтаксис вычисляемых свойств (computed properties)

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials);

10; ////////////////////////////////////////////

// цикл FOR...IN , в keys-записываються все ключи обьекта, в values все значения обьекта apartment

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

11; ////////////////////////////////////////////

// метод HASOWNPROPERTY() собственных и несобственных свойств объекта/ цикл for...in

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

// console.log(keys);
// console.log(values);

12; ////////////////////////////////////////////

// подсчет свойств/ функция countProps(object), считает и возвращает количество собственных
// свойств объекта в параметре object
// переменная propCount для хранения количества свойств объекта

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (let key in object)
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

13; ////////////////////////////////////////////

// метод OBJECT.KEYS() , Object.keys(obj), принимает объект и возвращает массив
// ключей его собственных свойств

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

14; ////////////////////////////////////////////

// метод Object.keys(obj), подсчет свойств, рефакторинг предыдущей фукнкции

// function countProps(object) {
//   let propCount = 0;
//   let keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

15; ////////////////////////////////////////////

// метод Object.values(obj), возвращает массив значений собственных свойств обьекта

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

16; ////////////////////////////////////////////

// расходы на зарплату

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let values = Object.values(salaries);

//   for (let salaries of values) {
//     totalSalary += salaries;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

17; ////////////////////////////////////////////

// масив обьектов, быть внимательным с colors и color !!!! где что подставлять

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

18; ////////////////////////////////////////////

// поиск обьекта по значению свойства

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products)
//     if (product.name === productName) {
//       return product.price;
//     }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));

19; ////////////////////////////////////////////

// колекция значений свойства

// правильное решение этой задачи

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   const arrProductValues = [];
//   for (const product of products) {
//     if (product[propName]) {
//       arrProductValues.push(product[propName]);
//     }
//   }
//   return arrProductValues;
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));

// недописанное решение этой задачи

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   for (const product of products)
//     if (Object.keys(product) === propName) {
//       return Object.values(propName);
//     }
//   return [];
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));

20; ////////////////////////////////////////////

// общая стоимость товара

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products)
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));

21; ////////////////////////////////////////////

// деструктиризация обьектов, пример рефакторинга с помощью деструктиризации

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // этот код заменили сделав деструктиризацию

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// const { yesterday, today, tomorrow } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

22; ////////////////////////////////////////////

// значения по умолчанию
// для того чтобы избежать присвоения undefined при деструктуризации несуществующих свойств
// можно задать переменным значения по умолчанию
// которые будут присвоены только в случае когда в объекте нет свойства с таким именем

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

23; ////////////////////////////////////////////

// изменение имени переменной

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // этот код заменили сделав деструктиризацию
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);

24; ////////////////////////////////////////////

// деструктиризация в циклах

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];
// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push({ hex, rgb }.hex);
//   rgbColors.push({ hex, rgb }.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

25; ////////////////////////////////////////////

// глубокая деструктиризация

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// // этот код заменили сделав деструктиризацию
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// console.log(forecast);

26; ////////////////////////////////////////////

// патерн "обьект настроек"

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // этот код заменили сделав деструктиризацию
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

27; ////////////////////////////////////////////

// операция SPREAD при передаче аргументов

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

28; ////////////////////////////////////////////

// операция SPREAD при создании нового масива

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

29; ////////////////////////////////////////////

// операция SPREAD при создании нового обьекта

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

30; ////////////////////////////////////////////

// карточки задач

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const newTask = {
//     category: category,
//     priority: priority,
//     completed: completed,
//     ...data,
//   };
//   return newTask;
// }
// consol.log(
//   makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// );

31; ////////////////////////////////////////////

// операция REST для сбора всех аргументов функции

// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }
// consol.log(add(12, 4, 11, 48));

32; ////////////////////////////////////////////

// операция REST для сбора части аргументов функции
// операция ... (rest) позволяет собрать в массив только ту часть аргументов
// которая необходима, объявив параметры до «сбора»

// function addOverNum(...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > args[0]) {
//       total += arg;
//     }
//   }
//   return total;
// }
// consol.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

33; ////////////////////////////////////////////

// масив совпадений

// function findMatches(array, ...args) {
//   const matches = [];
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

34; ////////////////////////////////////////////

// методы обьекта

// const bookShelf = {
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

35; ////////////////////////////////////////////

// доступ к свойствам обьекта в его методах

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

36; ////////////////////////////////////////////

// добавлено объекту atTheOldToad свойство potions, значением которого пустой массив

// const atTheOldToad = {
//   potions: [],
// };
// console.log();

37; ////////////////////////////////////////////

// метод getPotions() просто возвращает значение свойства potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.potions);

38; ////////////////////////////////////////////

// метод addPotion(potionName) добавляет potionName в конец массива в свойстве potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));

39; ////////////////////////////////////////////

// метод removePotion(potionName) удаляет potionName из массива в свойстве potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const { potions } = this;
//     // const name=potions[i];

//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];
//       if (potion === potionName) {
//         return potions.splice(i, 1);
//       }
//     }
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));

40; ////////////////////////////////////////////

// метод updatePotionName(oldName, newName) обновляет название oldName
// на newName в массиве в свойстве potions
// задача закончена но в консоле почему-то не работает

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions.indexOf(oldName) === i) {
//         this.potions.splice(i, 1, newName);
//         return;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

41; ////////////////////////////////////////////

// нужно выполнить рефакторинг методов объекта atTheOldToad
// задача не закончена!!

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (potionName === this.potions[i].name) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (oldName === this.potions[i].name) {
//         return (this.potions[i].name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
