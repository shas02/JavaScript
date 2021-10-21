const video = document.getElementById('videoWebCam')

navigator.mediaDevices
    .getUserMedia({video: true})
    .then(videoStream => {
        video.srcObject = videoStream;

        video.play();
    })

// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const text = document.getElementById('text');

const TEXT = 'Text'

text.value = localStorage.getItem(TEXT);

text.onchange = ({target: {value}}) => {
    localStorage.setItem(TEXT, value);
}


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

const form_info = document.getElementById('form-info');
console.log(form_info);

for (const tag of form_info) {

    if (tag.type === 'radio') {
        let value = localStorage.getItem(tag.name);
        if (tag.id === value) {
            tag.checked = true;
        }
    } else if (tag.type === 'checkbox') {
        let bool = localStorage.getItem(tag.name);
        tag.checked = bool === 'true';
    } else {
        tag.value = localStorage.getItem(tag.name);
    }
}

form_info.oninput = ({target: {type, name, value, checked, id}}) => {
    if (type === 'radio') {
        localStorage.setItem(name, id);
    } else if (type === 'checkbox') {
        localStorage.setItem(name, checked);
    } else {
        localStorage.setItem(name, value)
    }
}

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const save = document.getElementById('save');
const text1 = document.getElementById('text1');
const INPUT = 'input';
let currentIndex = 0;

if (!localStorage.getItem(INPUT)) {
    localStorage.setItem(INPUT, JSON.stringify([]));
} else {
    const item = JSON.parse(localStorage.getItem(INPUT));
    console.log(item);
    currentIndex = item.length - 1;
    text1.value = item[currentIndex]
}


save.onclick = () => {
    const data = text1.value;
    const db = JSON.parse(localStorage.getItem(INPUT));
    db.push(data);
    localStorage.setItem(INPUT, JSON.stringify(db));
}

back.onclick = () => {
    const db = JSON.parse(localStorage.getItem(INPUT));
    if (currentIndex - 1 >= 0) {
        currentIndex--
    } else {
        currentIndex = db.length - 1;
    }
    text1.value = db[currentIndex];
}

forward.onclick = () => {
    const db = JSON.parse(localStorage.getItem(INPUT));
    if (currentIndex + 1 < db.length) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    text1.value = db[currentIndex];
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
const back = document.getElementById('back');
const next = document.getElementById('next');
const save = document.getElementById('save');
const edit = document.getElementById('edit');
const remove = document.getElementById('remove');
const form_info = document.getElementById('informationForm');

const name = document.getElementById('name');
const telefonNumber = document.getElementById('number');
const email = document.getElementById('email');
const firm = document.getElementById('firm');
const department = document.getElementById('department');
const date_of_birth = document.getElementById('date_of_birth');

console.log(form_info);
const Users = 'Users';

let currentIndex = 0;


if (!localStorage.getItem(Users)) {
    localStorage.setItem(Users, JSON.stringify([]));

}

save.onclick = (ev) => {

    ev.preventDefault();

    const db = JSON.parse(localStorage.getItem(Users));

    for (const dbElement of db) {
        if (telefonNumber.value === dbElement.telefonNumber) {
            alert("Контакт з таким номером телефону вже існує.");
            return;
        }
        if (email.value === dbElement.email) {
            alert("Контакт з таким імейлом вже існує.");
            return;
        }
    }

    const userInformation = {
        name: name.value,
        telefonNumber: telefonNumber.value,
        email: email.value,
        firm: firm.value,
        department: department.value,
        date_of_birth: date_of_birth.value
    };

    db.push(userInformation);
    localStorage.setItem(Users, JSON.stringify(db));
    alert('Контакт успішно додано.')
}

back.onclick = (ev) => {
    ev.preventDefault();

    const db = JSON.parse(localStorage.getItem(Users));
    if (currentIndex - 1 >= 0) {
        currentIndex--
    } else {
        currentIndex = db.length - 1;
    }

    name.value = db[currentIndex].name;
    telefonNumber.value = db[currentIndex].telefonNumber;
    email.value = db[currentIndex].email;
    firm.value = db[currentIndex].firm;
    department.value = db[currentIndex].department;
    date_of_birth.value = db[currentIndex].date_of_birth;
}

next.onclick = (ev) => {
    ev.preventDefault();

    const db = JSON.parse(localStorage.getItem(Users));
    if (currentIndex + 1 < db.length) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    name.value = db[currentIndex].name;
    telefonNumber.value = db[currentIndex].telefonNumber;
    email.value = db[currentIndex].email;
    firm.value = db[currentIndex].firm;
    department.value = db[currentIndex].department;
    date_of_birth.value = db[currentIndex].date_of_birth;
}


remove.onclick = () => {

    const db = JSON.parse(localStorage.getItem(Users));

    for (let i = 0; i < db.length; i++) {
        if (
            name.value === db[i].name &&
            telefonNumber.value === db[i].telefonNumber &&
            email.value === db[i].email &&
            firm.value === db[i].firm &&
            department.value === db[i].department &&
            date_of_birth.value === db[i].date_of_birth
        ) {
            db.splice(i, 1);
            localStorage.setItem(Users, JSON.stringify(db));
            alert('Контакт успішно видалений.');
            return;
        }
    }
    alert('Такого контакту не існує.');
}

edit.onclick = () => {
    const db = JSON.parse(localStorage.getItem(Users));
    db[currentIndex].name = name.value;
    db[currentIndex].telefonNumber = telefonNumber.value;
    db[currentIndex].email = email.value;
    db[currentIndex].firm = firm.value;
    db[currentIndex].department = department.value;
    db[currentIndex].date_of_birth = date_of_birth.value;
    localStorage.setItem(Users, JSON.stringify(db));
    alert('Контакт успішно змінено.')
}