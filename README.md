# 🧠 JavaScript Day 7 — Funksiya

Bu darsda men JavaScript’da funksiyalar bilan ishlashni o‘rgandim.
Turli amaliy misollar orqali funksiyalarning qanday e’lon qilinishi va ishlash tartibini tushunib oldim.

---

## 📚 O‘rganganlarim / What I learned
JavaScript’da **funksiyalar** uch xil uslubda e’lon qilinadi:

1️⃣ Function Declaration

Sintaksisi:
function name(parameters) {
    // code
}

2️⃣ Function Expression

Sintaksisi:
const name = function(parameters) {
    // code
};

3️⃣ Arrow Function

Sintaksisi:
const name = (parameters) => {
    // code
};

---

## 💻 Kod namunasi / Example code

🔢 Kiritilgan sondan 1 gacha bo‘lgan sonlar yig‘indisini hisoblovchi funksiya
Arrow function shaklida:
const calculateSum = (num) => {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15

Function Declaration:
function calculateSum(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
}

console.log(calculateSum(5)); // 15

Function Expression:
const calculateSum = function(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15


---

🧩 Qisqacha nazariya / Short Theory

🔹 Funksiya — kod blokini qayta–qayta chaqirib ishlatish imkonini beradi.
🔹 Parametrlar orqali funksiyaga qiymatlar uzatish mumkin.
🔹 Return funksiyadan qiymat qaytaradi.
🔹 Bitta funksiyani uch xil uslubda yozish mumkin:

Function Declaration

Function Expression

Arrow Function



🎯 Maqsad / Goal

JavaScript’da funksiyalarning qanday ishlashini tushunish

Har uch uslubni amaliyotda sinab ko‘rish

Real masalalarda funksiyalardan foydalanish orqali tajriba oshirish

💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 7-kun — Funksiya
