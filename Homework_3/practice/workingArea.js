// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let content = document.getElementById('content');
console.log(content);

// b) отримує текст з блоку з id "rules"
let rules = document.getElementsByClassName('fc bp');
for (const rule of rules) {
    console.log(rule);
}

// c) замініть текст параграфа з id 'content' на будь-який інший
let content = document.getElementById('content');
console.log(content);
content.innerText = 'Lorem ipsum amet, consectetur adipisicing elit. Aut deserunt dignissimos nesciunt quibusdam suscipit. Ad harum necessitatibus quas quibusdam voluptate?'
console.log(content);

// d) замініть текст параграфа з id 'rules' на будь-який інший
let rules = document.getElementsByClassName('fc bp');

rules[0].innerHTML = '<p>Привіт добродії</p>'

// e) змініть кожному елементу колір фону на червоний
let allP = document.getElementsByTagName('p');
for (const allPElement of allP) {
    allPElement.style.backgroundColor = 'red';
}

let allDiv = document.getElementsByTagName('div');
for (const allDivElement of allDiv) {
    allDivElement.style.backgroundColor = 'red';
}

let ul = document.getElementsByTagName('ul');
ul[0].style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій
let body = document.getElementsByTagName('body');
body[0].style.backgroundColor = 'blue';

let content = document.getElementById('content');
content.style.backgroundColor = 'blue';

let rules = document.getElementsByClassName('fc bp');
for (const rule of rules) {
    rule.style.backgroundColor = 'blue';
}

let allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    allLiElement.style.backgroundColor = "blue"
}

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let rules = document.getElementById('rules');
console.log(rules.classList);
rules.classList.add('firstRule');
console.log(rules.classList);

// h) отримати всі елементи з класом fc_rules
let fc_rules = document.getElementsByClassName('fc_rules');
console.log(fc_rules);
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (const fcRule of fc_rules) {
  fcRule.style.color = 'red';
}

//
//
//
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

for (const user of users) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `Name: ${user.name}. <br> Age: ${user.age}. <br> Status: ${user.status}. <br> Adress: ${user.address}. <br>______________________________`
    document.body.appendChild(newDiv);

}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (const user of users) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<div>Name: ${user.name}. <br> Age: ${user.age}. <br> Status: ${user.status}.</div>
<div>Adsress: <br>
<div>Country ${user.address.country}.</div>
<div>City: ${user.address.city}.</div>
<div>Street: ${user.address.street}.</div>
<div>House number: ${user.address.houseNumber}.</div>
</div>
`
    newDiv.style.border = '1px solid blue';
    newDiv.style.marginBottom = '5px';
    document.body.appendChild(newDiv);
}


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'red'

// b) робить шириниу елементу ul 400px
let allUls = document.getElementsByTagName('ul');
allUls[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listelement2 = document.getElementsByClassName('listElement2');
let listelement2Text = listelement2[0].innerText
console.log(listelement2Text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLis = document.getElementsByTagName('li');
for (const singleLi of allLis) {
    singleLi.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    allAElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    if (allAElement.innerText === 'link3') {
        allAElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    allAElement.classList.add(`element_${allAElement.innerText}`);
}

i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let backgroundColor = prompt('write color please');
let all_sub_headers = document.getElementsByClassName('sub-header');
for (const allSubHeader of all_sub_headers) {
    allSubHeader.style.backgroundColor = `${backgroundColor}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let backgroundColor = prompt('write color please');
let all_sub_headers = document.getElementsByClassName('sub-header');
for (const allSubHeader of all_sub_headers) {
    if (allSubHeader.innerText === 'content 2 segment') {
        allSubHeader.style.backgroundColor = `${backgroundColor}`;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let text = prompt('Write a text please');
let content1 = document.getElementsByClassName('content_1')
content1[0].innerText = `${text}`;

// l) отримати елементи p та змінити їм padding на 20px
let allPs = document.getElementsByTagName('p');
for (const allP of allPs) {
    allP.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2Class = document.getElementsByClassName('text2');
for (const text2Class1 of text2Class) {
    text2Class1.innerText = 'February2021';
}

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

let div = document.createElement('div')
div.id = 'content';
div.innerHTML = '<h1>Правила бойцовского клуба</h1><div id="wrap"></div>'
document.body.appendChild(div);

let targetDiv = document.getElementById('wrap');

for (let i = 0; i < rules.length; i++) {
    let ruleDiv = document.createElement('div');
    ruleDiv.classList.add('rules');
    ruleDiv.classList.add(`rule${i + 1}`);
    ruleDiv.innerHTML = `
<h2>${rules[i].title}</h2>
<p>${rules[i].body}</p>
`;
    targetDiv.appendChild(ruleDiv);
}

// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithCities = [];

for (const userWithId of usersWithId) {
    for (const citiWithId of citiesWithId) {
        if (userWithId.id === citiWithId.user_id) {
            userWithId.address = citiWithId;
            usersWithCities.push(userWithId);
        }
    }
}

console.log(usersWithCities);