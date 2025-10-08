# 🎓 Personal Profile Card - React.js

โปรเจกต์นี้เป็นตัวอย่าง **React.js** สำหรับสร้าง **Personal Profile Card** เพื่อฝึกการใช้ JSX, React Component, และ React Hooks โดยสามารถแสดงข้อมูลส่วนตัว, งานอดิเรก, ทักษะ, Social Media และ achievements พร้อมฟีเจอร์ interactive ต่าง ๆ

---

## 📋 วัตถุประสงค์

1. ฝึกการสร้าง React Component และการใช้งาน Props
2. ฝึกการจัดการ State ด้วย `useState`
3. ฝึกการ render ข้อมูลแบบ dynamic และ conditional
4. ฝึกการสร้างฟีเจอร์ interactive เช่น Dark Mode, favorite hobbies, view counter, contact form

---

## 📂 โครงสร้างไฟล์

personal-profile-card/   
│   
├─ src/   
│ ├─ App.jsx # Main component   
│ ├─ ProfileCard.jsx # Component แสดงการ์ดโปรไฟล์   
│ ├─ ProfileCard.css # CSS สำหรับ styling   
│ └─ index.js # Entry point ของ React   
│   
├─ package.json # Dependencies และสคริปต์   
└─ README.md # อธิบายโปรเจกต์   

---

## ⚡ ฟีเจอร์หลัก

- แสดงข้อมูลส่วนตัว: ชื่อ, รหัสนักศึกษา, สาขา, ชั้นปี, อายุ, GPA  
- Dark / Light Mode toggle  
- นับจำนวนครั้งที่เปิดการ์ด (View counter)  
- งานอดิเรก: กดเลือก favorite hobby  
- ทักษะ: กดแสดง alert ว่ามีความเชี่ยวชาญใน skill นั้น  
- Achievements: เก็บจาก GPA และจำนวนทักษะ/งานอดิเรก  
- Social Media links: GitHub, Instagram, Discord  
- Contact form: ส่งข้อความถึงผู้ใช้ผ่าน alert (จำลอง)  

---

## 🔧 เทคนิคที่ใช้

- React Functional Components
- React Hooks (`useState`)
- Event Handling (`onClick`, `onChange`, `onSubmit`)
- Conditional Rendering
- Dynamic className และ inline style
- Mapping array เป็น JSX elements

---

## 🖥️ Demo   
![Demo] (Demo.png)