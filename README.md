# 🧠 JavaScript Day 6 — Functions

Bu darsda men **JavaScript’da funksiyalar bilan ishlashni** o‘rgandim.  
Amaliy misollar orqali funksiyalarning qanday e’lon qilinishi va ishlash tartibini mustahkamlab oldim.

---

## 📚 O‘rganganlarim / What I learned

JavaScript’da funksiyalar **uch xil uslubda e’lon qilinadi**:

### 1️⃣ Function Declaration  
```javascript
function name(parameters) {
    // code
}
```
✔️ Funksiyani chaqirishni oldin ham, keyin ham ishlatish mumkin.

---

### 2️⃣ Function Expression  
```javascript
const name = function(parameters) {
    // code
};
```
✔️ Funksiya o‘zgaruvchiga tenglanadi.  
✔️ Avval e’lon qilinishi kerak.

---

### 3️⃣ Arrow Function  
```javascript
const name = (parameters) => {
    // code
};
```
✔️ Zamonaviy, ixcham va qisqa sintaksis.

---

## 💻 Kod namunasi / Example code

Kiritilgan sondan boshlab `1` gacha bo‘lgan sonlar yig‘indisini hisoblash:

### 🔹 Arrow Function
```javascript
const calculateSum = (num) => {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15
```

### 🔹 Function Declaration
```javascript
function calculateSum(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
}

console.log(calculateSum(5)); // 15
```

### 🔹 Function Expression
```javascript
const calculateSum = function(num) {
    let result = 0;
    for (let i = num; i >= 1; i--) {
        result += i;
    }
    return result;
};

console.log(calculateSum(5)); // 15
```

---

## 🧩 Qisqacha nazariya / Short Theory

- Funksiya — qayta ishlatiladigan kod bloki.
- Parametrlar orqali funksiya ichiga qiymat uzatish mumkin.
- `return` funksiyadan natija qaytaradi.
- JavaScript’da funksiyalarni 3 xil uslubda yozish mumkin:
  - Function Declaration  
  - Function Expression  
  - Arrow Function

---

## 🎯 Maqsad / Goal

- Funksiyalarning qanday ishlashini o‘rganish  
- Ularni real misollarda qo‘llash  
- Uch xil yozilish uslubida funksiyalarni amalda sinab ko‘rish

---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 6-kun — Functions
