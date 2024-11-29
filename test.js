// ฟังก์ชันคำนวณบิลค่าน้ำ
function calculateWaterBill(units) {
    const baseFee = 50;  // ค่าธรรมเนียมพื้นฐาน
    let total = baseFee; // ค่าเริ่มต้นรวมค่าธรรมเนียม

    let breakdown = `บิลน้ำสำหรับการใช้ ${units} หน่วย: \n`;

    // คำนวณค่าบริการตามช่วง
    if (units <= 10) {
        total += units * 5;
        breakdown += `ค่าธรรมเนียมพื้นฐาน: 50 บาท + ${units} * 5 = ${total.toFixed(2)} บาท\n`;
    } else if (units <= 20) {
        total += (10 * 5) + ((units - 10) * 10);
        breakdown += `ค่าธรรมเนียมพื้นฐาน: 50 บาท + (10 * 5) + (${units - 10} * 10) = ${total.toFixed(2)} บาท\n`;
    } else if (units <= 30) {
        total += (10 * 5) + (10 * 10) + ((units - 20) * 30);
        breakdown += `ค่าธรรมเนียมพื้นฐาน: 50 บาท + (10 * 5) + (10 * 10) + (${units - 20} * 30) = ${total.toFixed(2)} บาท\n`;
    } else {
        total += (10 * 5) + (10 * 10) + (10 * 30) + ((units - 30) * 50);
        breakdown += `ค่าธรรมเนียมพื้นฐาน: 50 บาท + (10 * 5) + (10 * 10) + (10 * 30) + (${units - 30} * 50) = ${total.toFixed(2)} บาท\n`;
    }

    return { total, breakdown }; 
}

let input = prompt('กรุณาใส่จำนวนหน่วยน้ำที่ใช้: ');

let units = parseFloat(input);

// ตรวจสอบว่าผู้ใช้ใส่ข้อมูลเป็นตัวเลขหรือไม่
if (isNaN(units) || units <= 0) {
    console.error('Error: กรุณาใส่ตัวเลขที่ถูกต้อง');
} else {
    // คำนวณบิลน้ำและแสดงวิธีคิด
    let { total, breakdown } = calculateWaterBill(units);
    console.log(breakdown);
    console.log(`บิลค่าน้ำสำหรับการใช้ ${units} หน่วย คือ ${total.toFixed(2)} บาท`);
}
