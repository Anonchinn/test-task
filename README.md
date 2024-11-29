( 1 คำสั่ง SQL )
1.	Table – PRODUCT  ช่อง FCCODE  เรียงจากค่ามากไปน้อย โดยเลือกทั้งหมด
โดย เทียบจากตาราง Proudct ![image](https://github.com/user-attachments/assets/e9092d22-8ee6-4868-96b8-1bc01e0dc913)
![image](https://github.com/user-attachments/assets/5e3633ff-01e9-4db1-9b17-fc1d0211902f)

2.	JOIN   Table – COOR  กับ Table – CORP โดยเลือก FCCODE, FCNAME ของ COOR และ FCCODE ,FCNAME ของ CORP มาแสดง โดยเลือกเฉพาะ 8888 กับ AIC เรียงจากน้อยไปมาก FCCODE ของ COOR
![image](https://github.com/user-attachments/assets/6dbe0ea0-8bef-493f-b82d-ab3b58cc6b0c)

3.	JOIN   Table – COOR  กับ Table – CORP และ Table – PRODUCT โดยเลือก FCCODE, FCNAME ของ COOR และ FCCODE ,FCNAME ของ CORP และ FCCODE ,FCNAME ,FNQTY ของ PRODUCT มาแสดง 
โดยช่อง FNQTY จะต้องเป็น ค่ารวม ของ PRODUCT แต่ละตัว เลือกเฉพาะรหัส 51-01824  กับ 9999 ทั้งหมด และเรียงจากน้อยไปมาก
![image](https://github.com/user-attachments/assets/892ded4a-9017-4497-b876-1e5472b96a35)


ทดสอบที่ 2 กับ 3 ผมใช้ javascript เขียนนะครับ

(2. คิดฟังก์ชัน คิดค่าน้ำประปา)
![image](https://github.com/user-attachments/assets/c4d2ead9-8a27-4221-a36c-ee96c7f5d68e)

test 
![image](https://github.com/user-attachments/assets/be00660a-f5fb-4aad-b2d6-b552ff2bc228)
ผลลัพ
![image](https://github.com/user-attachments/assets/7c8d2ac7-bc9a-4b6d-88db-d0b610b5ff56)

วิธีการคิด base ของค่าธรรมเนียมที่ต้องจ่ายคือ 50 บาท 
ใช้ if-else  if-else เพื่อคำนวณค่าบริการที่ต้องจ่ายตามจำนวนหน่วยที่ใช้

ตัวอย่าง if

โดยถ้าใช้เกิน 10 หน่อย if (units <= 10) {
                        total += units * 5;
                    }
การใช้ 10 หน่วยแรก คิดค่าบริการที่หน่วยละ 5 บาท แต่ถ้าใช้ มากกว่า10 ก็คือ หน่วยที่ 11 หรือไม่เกิน 20 หน่วย ก็จะคิดเป็น 10 บาทแทน
 
ตัวอย่าง  else
else if (units <= 20) {
    total += (10 * 5) + ((units - 10) * 10);  // 10 หน่วยแรกคิดค่าบริการ 5 บาท/หน่วย, หน่วยที่เกินคิด 10 บาท/หน่วย
}
วิธีคิด 10 * 5 + 10 * 10 + 5 * 30 เป็นต้น
วนไปเรื่อยๆ จนถึง ช่วงที่กำหนด ให้ถึง ที่จะต้องจ่ายหน่วยละ 50 โดยที่โปรแกรมกำหนดไว้


(3.คิดฟังช์ชัน แสดงจำนวนเฉพาะกับไม่เฉพาะ)
![image](https://github.com/user-attachments/assets/a3a1c340-d1d8-4c30-90b1-9f371ccd814c)

โดยจาก code ในช่วงแรก ผมจะให้ num เป็นตัวตรวจสอบว่า เป็นจำนวนเฉพาะหรือไม่ ถ้า num <= 1 จะไม่เป็นจำนวนเฉพาะ โดยในที่นี้ จำนวนเฉาะต้องมากกว่า 1
ต่อมา จะเช็คเศษจากตัวหารเป็น 0 ตัวอย่าง num % i === 0 แสดงว่า num ไม่เป็นจำนวนเฉพาะ

ในส่วนที่ 2 CheckNumbers โดยให้ input เก็บเป็น string เพื่อเก็บจำนวนเต็ม เป็น integer แล้วเช็ค input ว่าเป็นตัวเลขที่ถูกต้องโดยใช้ isNaN ตรวจสอบว่าเป็นตัวเลขหรือไม่ หรือกำหนดไว้หรือไม่ โดยกำหนดไว้ที่ <= 0 หรือ มากกว่า 50000 ก็จะแสดงออกมา error
แต่ถ้าใช่เลขจำนวนเต็ม ก็จะแสดงผลออกมเป็นจำนวนเฉพาะ และ จำนวนไม่เฉพาะ ถึงจะออกจากฟังชั่น 
 

