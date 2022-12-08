let employee = [{
    "ID": 30001,
    "FirstName": "ปรียาดา",
    "LastName": "ตั้งทิพย์",
    "Department": "บุคคล",
    "Position": "HR",
    "Salary": 48000,
    "Bonusratinglevel": "A",
},{
    "ID": 30002,
    "FirstName": "ณัฎฐ์",
    "LastName": "พงษ์วิโรจน์",
    "Department": "ไอที",
    "Position": "System Engineer",
    "Salary": 57000,
    "Bonusratinglevel": "S",
},{
    "ID": 30003,
    "FirstName": "ภูวนัย",
    "LastName": "พัฒนปรีชา",
    "Department": "การเงิน",
    "Position": "Account",
    "Salary": 38000,
    "Bonusratinglevel": "B",
},{
    "ID": 30004,
    "FirstName": "เจนจิรา",
    "LastName": "วงศ์สุรวัฒนา",
    "Department": "บุคคล",
    "Position": "HR",
    "Salary": 55000,
    "Bonusratinglevel": "A",
},{
    "ID": 30005,
    "FirstName": "พนาวัฒน์",
    "LastName": "กลิ่นโพธิ์",
    "Department": "บุคคล",
    "Position": "HR",
    "Salary": 13000,
    "Bonusratinglevel": "C",
},{
    "ID": 30006,
    "FirstName": "ธนารีย์",
    "LastName": "ชัยเจริญ",
    "Department": "การเงิน",
    "Position": "Account",
    "Salary": 41000,
    "Bonusratinglevel": "S",
},{
    "ID": 30007,
    "FirstName": "นิมมาน",
    "LastName": "สยนานนท์",
    "Department": "บุคคล",
    "Position": "HR",
    "Salary": 19000,
    "Bonusratinglevel": "A",
},{
    "ID": 30008,
    "FirstName": "กีรติ",
    "LastName": "มากมี",
    "Department": "การเงิน",
    "Position": "Account",
    "Salary": 46000,
    "Bonusratinglevel": "C",
},{
    "ID": 30009,
    "FirstName": "วรรณิศา",
    "LastName": "โตศิลา",
    "Department": "ไอที",
    "Position": "System Engineer",
    "Salary": 28000,
    "Bonusratinglevel": "B",
}]

let Bonusratinglevel = [{
    "Level": "S",
    "Bonus": 1.8,
},{
    "Level": "A",
    "Bonus": 1.4,
},{
    "Level": "B",
    "Bonus": 1.15,
},{
    "Level": "C",
    "Bonus": 0.8,
}]

//
//
//
//
//employee[0].bonus = employee[0].salary*bonusRate;
//employee[0].year = employee[0].salary*12 + employee[0].bonus;
//if (employee[0].year < 250000) employee[0].tax =0;
//else if (employee[0].year > 250000 && employee[0].year < 550000) employee[0].tax = employee[0].year*0.09;