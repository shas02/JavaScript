// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
document.querySelector('#hider').onclick = () => {
    document.querySelector('#text').hidden = true;
}

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
document.querySelector('#hider').onclick = () => {
    document.querySelector('#hider').hidden = true;
}

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let ageSender = document.forms.form1.ageSender;
console.log(ageSender);
ageSender.onclick = () => {
    if (document.forms.form1.age.value < 18) {
        alert('Нема тобі сюди дороги!');
        return;
    }
    alert('Ласкаво просимо');
}
// - Створіть меню, яке розгортається/згортається при клику
document.querySelector('.menuButton').onclick = () => {
    if (document.querySelector('.menuBar').hidden === true) {
        document.querySelector('.menuBar').hidden = false;
        return;
    }
    document.querySelector('.menuBar').hidden = true;
}

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
let comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
]
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.


for (let i = 0; i < comments.length; i++) {
    let commentDiv = document.createElement('div');
    commentDiv.style = 'border-bottom: 1px solid black';
    commentDiv.innerHTML = `
<h3>${comments[i].title}</h3>
 <input type="button" name="${i}" class="сommentTextButton ${i}" value="Розгорнути коментар">
<p class="сommentText ${i}" hidden = true>${comments[i].body}</p>
`
    document.querySelector('.comments').appendChild(commentDiv);
}

let allButtons = document.querySelectorAll('.сommentTextButton');
let allTexts = document.querySelectorAll('.сommentText');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].onclick = (ev) => {
        for (let i = 0; i < allTexts.length; i++) {
            if (ev.target.classList[1] === allTexts[i].classList[1]) {
                if (allTexts[i].hidden === true) {
                    allTexts[i].hidden = false;
                    return;
                }
                allTexts[i].hidden = true;
            }
        }
    }
}
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

console.log(document.forms.form3);
console.log(document.forms.form4);

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function addTable(numberOfLines = 3, cells = 4, element = "myDynamicTable") {
    let myTableDiv = document.getElementById(element);

    let table = document.createElement('TABLE');
    table.border = '1';

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 0; i < numberOfLines; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (let j = 0; j < cells; j++) {
            let td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}

addTable(5, 5);

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');

let i = 0;

btn_next.onclick = () => {
    images[i].style.display = 'none';

    i++

    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
}

btn_prev.onclick = function () {
    images[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
let swearWords = ['shit', 'son of bitch', 'arsehole', 'balls', 'bint', 'bollocks', 'bullshit', 'feck', 'munter', 'pissed', 'bastard', 'dickhead', 'fuck', 'dick', 'pussy'];

//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let forma = document.forms.swearWords;
console.log(forma);

// forma.someText.oninput = (ev) => {
//     console.log(ev.target.value);
// }
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
forma.okBtn.onclick = (ev) => {
    ev.preventDefault()

    for (const swearWord of swearWords) {
        if (forma.someText.value.includes(swearWord)) {
            alert('Не лайся!');
            return;
        }
    }
    alert('Молодець, візьми з полки пирожок');
}
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

let allHeaders = document.querySelectorAll('h2');

let menuDiv = document.createElement('div');
menuDiv.style = 'border: 1px solid black';
menuDiv.style.width = '20%'
menuDiv.style.height = '20%'
menuDiv.classList.add('menuBar');
menuDiv.innerHTML = `<h3>Меню</h3>`;

for (let i = 0; i < allHeaders.length; i++) {
    let anchor = document.createElement('a');
    anchor.name = `anchor${i}`;
    allHeaders[i].appendChild(anchor);

    let headerA = document.createElement('a')
    headerA.style = 'text-decoration: none; color: black';
    headerA.href = `#anchor${i}`;
    headerA.text = allHeaders[i].innerText;

    console.log(headerA);
    menuDiv.appendChild(headerA);
    let br = document.createElement('br');
    menuDiv.appendChild(br);
}

let content = document.querySelector('#content')
content.appendChild(menuDiv);

content.style.display = 'flex';
content.style.justifyContent = 'space-around';


// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let filter1 = document.forms.filterForm.filter1;
let filter2 = document.forms.filterForm.filter2;
let filter3 = document.forms.filterForm.filter3;

let usersDiv = document.querySelector('.usersDiv');

document.forms.filterForm.confirmBtn.onclick = () => {

    let deleteItem = document.querySelector('.usersWrap');

    if (deleteItem) {
        deleteItem.remove();
    }

    let showUsers = [];

    if (filter1.checked === true && filter2.checked === false && filter3.checked === false) {
        showUsers = usersWithAddress.filter(value => value.isMarried === false);
    }
    if (filter1.checked === false && filter2.checked === true && filter3.checked === false) {
        showUsers = usersWithAddress.filter(value => value.age > 29);
    }
    if (filter1.checked === false && filter2.checked === false && filter3.checked === true) {
        showUsers = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    }
    if (filter1.checked === true && filter2.checked === true && filter3.checked === false) {
        showUsers = usersWithAddress.filter(value => value.isMarried === false && value.age > 29);
    }
    if (filter1.checked === true && filter2.checked === false && filter3.checked === true) {
        showUsers = usersWithAddress.filter(value => value.isMarried === false && value.address.city === 'Kyiv');
    }
    if (filter1.checked === false && filter2.checked === true && filter3.checked === true) {
        showUsers = usersWithAddress.filter(value => value.age > 29 && value.address.city === 'Kyiv');
    }
    if (filter1.checked === true && filter2.checked === true && filter3.checked === true) {
        showUsers = usersWithAddress.filter(value => value.isMarried === false && value.age > 29 && value.address.city === 'Kyiv');
    }


    let usersWrap = document.createElement('div');
    usersWrap.classList.add('usersWrap');

    for (let i = 0; i < showUsers.length; i++) {
        let userDiv = document.createElement('div')
        userDiv.innerHTML = `
              id: ${showUsers[i].id} <br>
              name: ${showUsers[i].name} <br>
              age: ${showUsers[i].age} <br>
              isMarried: ${showUsers[i].isMarried} <br>
              address: <br>
              city: ${showUsers[i].address.city}<br>
              street: ${showUsers[i].address.street}<br>
              number: ${showUsers[i].address.number}<br>
              <hr>
              `
        usersWrap.appendChild(userDiv);
    }
    usersDiv.appendChild(usersWrap);
}



