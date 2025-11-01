// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   arr[i] = i * 109;
// }

// // map
// let ans = arr.map(function (val) {
//   return val * 100;
// });
// console.log(ans);

// // for each
// ans = arr.forEach(function (val) {
//   if (val == 0) console.log("teri maa virgin hai");

//   if (val % 10 == 0 && val != 0) {
//     console.log("teri maa randi");
//   } else console.log("Teri maa ki chut me " + val + " Loda");
// });

// ans = arr.filter(function (val) {
//   if (val < 50) return true;
//   else return false;
// });

// ans = arr.find(function (val) {
//   if (val === 999) return false;
//   else return true;
// });

// console.log(arr.indexOf(27));

// // main for backend
// // objects

// // this is a object
// var obj = {
//   name: "loda",
//   age: 20,
// };
// // this will freeze our objecgt values means now the data cannot be manipulated from outside
// Object.freeze(obj);
// obj.age = 19;

// console.log(obj.age);

// node modules and backend part starts here

const aaryan = require("fs");

// aaryan.appendFile(
//   "name.txt",
//   "Hello bhai Jay shree Swaminarayan",
//   function (err) {
//     if (err) return err;
//     else console.log("ho gaya");
//   }
// );

// aaryan.rename("name.txt", "namerename.txt", function (err) {
//   if (err) console.log(err);
//   else console.log("ho gaya");
// });

// async JS

// console.log("hello 1");
// setTimeout(function () {
//   console.log("hello 2");
// }, 0);
// console.log("hello 3");
// console.log("hello 4");
let num = 8;
var randnum = new Promise(function (res, rej) {
  if (num < 5) {
    return res();
  } else {
    return rej();
  }
});

randnum
  .then(function () {
    console.log("less then 5.");
  })
  .catch(function () {
    console.log("More then 5.");
  });
