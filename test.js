function calculateWaterBill(units) {
    const baseFee = 50;  // ค่าธรรมเนียมพื้นฐาน
    let total = baseFee; // ค่าเริ่มต้นรวมค่าธรรมเนียม

    // คำนวณค่าบริการตามช่วง
    if (units <= 10) {
        total += units * 5; 
    } else if (units <= 20) {
        total += (10 * 5) + ((units - 10) * 10); 
    } else if (units <= 30) {
        total += (10 * 5) + (10 * 10) + ((units - 20) * 30); 
    } else {
        total += (10 * 5) + (10 * 10) + (10 * 30) + ((units - 30) * 50); 
    }

    return total; 
}

console.log(calculateWaterBill(5));   // 50 + (5 * 5) = 75
console.log(calculateWaterBill(15));  // 50 + (10 * 5) + (5 * 10) = 100
console.log(calculateWaterBill(25));  // 50 + (10 * 5) + (10 * 10) + (5 * 30) = 250
console.log(calculateWaterBill(35));  // 50 + (10 * 5) + (10 * 10) + (10 * 30) + (5 * 50) = 450
