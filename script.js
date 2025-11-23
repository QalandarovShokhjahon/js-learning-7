'use strict';

// Funktsiya ma'lum bir vazifani bajarish uchun mo'ljallangan kod blokidir. U faqat chaqirilganda ishlaydi.

// Arrow Function → bu qisqa yozuvga ega zamonaviy funksiya bo‘lib, => (arrow) sintaksisi yordamida yoziladi.

// function meningFunksiyam(son1, son2) {
//     return son1 + son2;
//     // funksiyadan qiymat qaytarish uchun return kalit so'zidan foydalanamiz
//     // return dan keyin yozilgan kod ishlamaydi
// }

// console.log(meningFunksiyam(10, 20));
// console.log(meningFunksiyam(20, 40));


// Function Declaration → funksiyani e'lon qilish usuli
// console.log(kvadrat(2));
// console.log(kvadrat(10));


// function kvadrat(son) {
//     return son * son;
// }


// Function Expression → funksiyani o'zgaruvchiga tayinlash usuli
// const kvadrat = function(son) {
//     return son * son;
// }
// console.log(kvadrat(20));


// Arrow Function → qisqa yozuvga ega funksiya
// const kvadrat = (son) => {
//     return son * son;
// }
// console.log(kvadrat(7));

// const calc = (a, b) => a + b; 
// console.log(calc(5, 5));


// Vazifalar:

// let ism = prompt("Ismingizni kiriting: ");

// const salom = (ism) => {
//     return `Salom, ${ism}!`;
// }

// alert(salom(ism));

// const yoshChiqar = (tugilganYil) => {
//     return `Siz ${2024 - tugilganYil} yoshdasiz.`;
// }
// console.log(yoshChiqar(2008));

// const calculateSum = (n) => (n * (n + 1)) / 2;

// console.log(calculateSum(5)); // 15
