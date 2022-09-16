1; ////////////////////////////////////////////
// const productName = "Droid";
// const pricePerItem = 2000;
// console.log(productName, pricePerItem);

2; ///////////////////////////////////////////

// let productName = "Droid";
// productName = "Repair droid";
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(productName, pricePerItem);

3; ///////////////////////////////////////////

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

4; ///////////////////////////////////////////

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

5; ///////////////////////////////////////////

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

6; ///////////////////////////////////////////

// const orderedQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

7; ///////////////////////////////////////////

// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

8; ///////////////////////////////////////////

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

9; ///////////////////////////////////////////

// function add(a, b, c) {
//   return a + b + c;
// }
// add();
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

10; ///////////////////////////////////////////

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }

11; ///////////////////////////////////////////
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice =orderedQuantity * pricePerItem ;
//   return totalPrice;
// };

12; ///////////////////////////////////////////

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

13; ///////////////////////////////////////////

// function isAdult(age) {
// const passed = age >= 18;
// return passed;
// }

14; ///////////////////////////////////////////

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = password === "jqueryismyjam";
//   return isMatch;
// }

15; ///////////////////////////////////////////

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   return message;
// }

16; ///////////////////////////////////////////

// function checkStorage(available, ordered) {
//   let message;
//   if (available < ordered) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }

17; ///////////////////////////////////////////

// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// комбинированый оператор присвоения как замена верхнему варианту записи

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

18; ///////////////////////////////////////////

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {message = "Insufficient funds!";
//   }
//   else {message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   return message;
// }

19; ///////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === "jqueryismyjam") {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }

20; ///////////////////////////////////////////

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }

21; ///////////////////////////////////////////

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   return isInRange;
// }

22; ///////////////////////////////////////////

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip";
//   return canAccessContent;
// }

23; ///////////////////////////////////////////

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }

24; ///////////////////////////////////////////

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

25; ///////////////////////////////////////////

// function checkStorage(available, ordered) {
//   let message;
//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";

//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   return message;
// }

26; ///////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   message =
//     password === "jqueryismyjam"
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   return message;
// }

27; ///////////////////////////////////////////

// function getSubscriptionPrice(type) {
//   let price;
//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }

28; ///////////////////////////////////////////

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }
//   return message;
// }

29; ///////////////////////////////////////////

// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;

//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;

//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;

//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

30; ///////////////////////////////////////////

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   return message;
// }

31; ///////////////////////////////////////////

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// console.log(courseTopic.length);
// console.log(courseTopic[0]);
// console.log(courseTopic.length - 1);

32; ///////////////////////////////////////////

// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }

33; ///////////////////////////////////////////

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
//   /// Change code above this line
//   return result;
// }

34; ///////////////////////////////////////////

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();
//   return normalizedInput;
// }

35; ///////////////////////////////////////////

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

36; ///////////////////////////////////////////

// function checkForSpam(message) {
//   let result;
//   if (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   ) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }
