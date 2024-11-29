function isPrime(num) {
    if (num <= 1) return false; // จำนวนที่น้อยกว่าหรือเท่ากับ 1 ไม่เป็นจำนวนเฉพาะ
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // หากมีตัวหารลงตัว หมายถึงไม่เป็นจำนวนเฉพาะ
    }
    return true; 
}

function checkNumbers(input) {
    const number = parseInt(input); // แปลงค่าจาก string เป็น number
    if (isNaN(number) || number <= 0 || number > 50000) {
        console.error("Error: ใส่ตัวเลข (มากกว่า 0 และไม่เกิน 50,000)");
        return;
    }

    const primeNumbers = [];
    const nonPrimeNumbers = [];

    for (let i = 1; i <= number; i++) {
        (isPrime(i) ? primeNumbers : nonPrimeNumbers).push(i); // แยกจำนวนเฉพาะและไม่เฉพาะ
    }

    console.log("จำนวนเฉพาะ: " + primeNumbers.join(", "));
    console.log("จำนวนไม่เฉพาะ: " + nonPrimeNumbers.join(", "));
}

// test  run node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('กรุณาใส่ตัวเลขที่ต้องการตรวจสอบ (มากกว่า 0 และไม่เกิน 50,000): ', input => {
    checkNumbers(input);
    rl.close(); 
});
