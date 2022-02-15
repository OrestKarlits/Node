// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами
// user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
//     але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)


const start = require('path');
const add = require('fs');

// add.mkdir(start.join(__dirname, 'main'), (eror) => {
//     if (eror) {
//         console.log(eror);
//     }
// })


// add.mkdir(start.join(__dirname, 'main', 'online'), {recursive: true},(eror) => {
//     if (eror) {
//         console.log(eror);
//     }
// })


// add.mkdir(start.join(__dirname, 'main', 'inPerson'), {recursive: true},(eror) => {
//     if (eror) {
//         console.log(eror);
//     }
// })

let onlineUsers = [{name: "Andrii", age: 22, city: "Lviv"}];


for (const onlineUser of onlineUsers) {
    add.writeFile(start.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
        `name:${onlineUser.name}\n age:${onlineUser.age}\n city:${onlineUser.city}`,(err)=>{
            if(err){
                console.log(err);
            }
        })
}


let inPersonUsers = [{name: "Orest", age: 26, city: "Lviv"}];

for (const inPersonUser of inPersonUsers) {
    add.writeFile(start.join(__dirname, 'main', 'online', 'online.txt'),
        `name:${inPersonUser.name}\n age:${inPersonUser.age}\n city:${inPersonUser.city}`, (err) => {
            if (err) {
                console.log(err);
            }
        })
}