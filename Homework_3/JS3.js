// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// console.log(document);
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// let a = document.getElementById("content");
// // const a = document.getElementsByTagName('p');
// console.log(a);

// b) отримує текст з блоку з id "rules"
const b = document.getElementById('rules');
// const b = document.getElementsByClassName('fc_bp');
console.log(b);

// c) замініть текст параграфа з id 'content' на будь-який інший
a.innerText = 'TROLOLO A TROLOLO';
for (let item of a) {
    item.innerText = 'pyshch pyshch';

}

// d) замініть текст параграфа з id 'rules' на будь-який інший
b.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, dignissimos dolorem ex explicabo harum id minus odit porro ratione repellendus, reprehenderit soluta. Aliquam, quasi, quod? Eaque enim eos odio vitae.'
for (let i = 0; i < b.length; i++) {
    b[i].innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error excepturi explicabo molestiae sit. Accusamus atque cumque delectus dolore dolorem ea, eligendi enim excepturi exercitationem explicabo fugiat id illum impedit inventore iusto laudantium libero minima, modi nesciunt nihil nisi numquam odit pariatur praesentium provident quidem quisquam reiciendis repellendus reprehenderit saepe sequi similique temporibus tenetur velit veniam vero vitae? Aspernatur beatae commodi culpa cupiditate deserunt ea eaque error laborum maxime, natus nisi officiis optio pariatur perferendis provident quis quo quod repellat repellendus repudiandae saepe sed sint! Atque, nostrum rerum. Hic itaque non vel! Cum est illo perspiciatis! Consequuntur error facere suscipit voluptates.'
}

// e) змініть кожному елементу колір фону на червоний
let body = document.getElementsByTagName('body');
console.log(body);
for (i = 0; i < 1; i++) {
    body[i].style.backgroundColor = 'red';
}

a.style.backgroundColor = 'red';

for (i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = 'red';
}

b.style.backgroundColor = 'red';
for (i = 0; i < b.length; i++) {
    b[i].style.backgroundColor = 'red';
}

// f) змініть кожному елементу колір тексту на синій
for (item of body) {
    item.style.color = 'blue';
}

a.style.color = 'blue';

b.style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(b.classList);

// h) отримати всі елементи з класом fc_rules
let classFc_rules = document.getElementsByClassName('fc_rules');
console.log(classFc_rules);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (item of classFc_rules) {
    item.style.color = 'red';
}


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
let users = [
    {name: 'Arthur', age: 21},
    {name: 'Vika', age: 19},
    {name: 'Dima', age: 23},
    {name: 'Anna', age: 21},
];
for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = '#86d608';
    userDiv.style.margin = '10px';

    userDiv.innerHTML = `
        Hello my name is ${users[i].name} <br>
        I am ${users[i].age} years old
`
    document.body.appendChild(userDiv);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

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

for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement('div');
    userDiv.style.backgroundColor = '#86d608';
    userDiv.style.margin = '10px';

    userDiv.innerHTML = `
       name: ${users[i].name} <br>
       age: ${users[i].age} <br>
       status: ${users[i].status} <br>
       <div>address:
       <div>city: ${users[i].address.city}</div>
       <div>country: ${users[i].address.country}</div>
       <div>street: ${users[i].address.street}</div>
       <div>houseNumber: ${users[i].address.houseNumber}</div>
       </div>
`
    document.body.appendChild(userDiv);
}


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
console.log(document);

// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let a = document.getElementById('main_header');
console.log(a);
a.innerText = 'mon-year';

// b) робить шириниу елементу ul 400px
let b = document.getElementsByTagName('ul')
console.log(b);
b[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let c = document.getElementsByClassName('linkList')

for (const cElement of c) {
    cElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let a = document.getElementsByClassName('listElement2');
console.log(a);
let text = a[0].textContent;
console.log(text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allLi = document.getElementsByTagName('li');
for (const allLiElement of allLi) {
    allLiElement.style.backgroundColor = 'grey';

}

// f) отримує всі елементи 'a' та додає їм клас anchor
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    allAElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allA = document.getElementsByTagName('a');
for (const allAi of allA) {
    if (allAi.textContent === 'link3') {
        allAi.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let allA = document.getElementsByTagName('a');
for (const allAElement of allA) {
    allAElement.classList.add(`element_${allAElement.textContent}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const a = document.getElementsByClassName('sub-header')
let color = prompt('Color')
for (const i of a) {
    i.style.backgroundColor = color;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
const a = document.getElementsByClassName('sub-header')
let color = prompt('Color')
for (const i of a) {
    if (i.textContent === 'content 2 segment')
        i.style.color = color;
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
const a = document.getElementsByClassName('content_1');
let text = prompt('Write something');
for (const i of a) {
    i.textContent = text;
}

// l) отримати елементи p та змінити їм padding на 20px
let allP = document.getElementsByTagName('p')
for (const i of allP) {
    i.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let a = document.getElementsByClassName('text2');
for (const aElement of a) {
    aElement.innerText = 'mon-year';
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
const mainDiv = document.createElement('div');
mainDiv.style.backgroundColor = '#f3ffff';
mainDiv.innerHTML = `
<h1>Правила бойцовского клуба</h1>
`;
document.body.appendChild(mainDiv);
for (let rule = 0; rule < rules.length; rule++) {
    const ruleDiv = document.createElement('div');
    ruleDiv.style.border = '5px solid #86d608';
    ruleDiv.style.margin = '10px';
    ruleDiv.classList.add('rules', `rule${rule + 1}`);

    ruleDiv.innerHTML = `
        <h2> ${rules[rule].title}</h2>
        <p>${rules[rule].body}</p>
`

    mainDiv.appendChild(ruleDiv);
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

let usersWithAddress = [];
for (const user of usersWithId) {
    // console.log(user);
    for (const adress of citiesWithId) {
        // console.log(adress);
        if (user.id === adress.user_id) {
            let userWithAddres = {
                user, adress
            };
            usersWithAddress.push(userWithAddres);

            // user.address = adress;
        }
    }
}

console.log(usersWithAddress);

//         // TO BE CONTINUED .....