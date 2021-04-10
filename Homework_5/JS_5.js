// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
class computer {
    constructor(name, RAM, processor = 600) {
        this.name = name;
        this.RAM = RAM;
        if (processor > 1000) {
            this.processor = 1000;
        } else if (processor < 0) {
            this.processor = 0;
        } else {

            this.processor = processor;
        }
        this.turn = 'off';
    }

    on() {
        if (this.turn === 'off') {

            this.turn = 'on';
            console.log('Я ввімкнувся');
        } else if (this.turn === 'on') {
            this.turn = 'off';
            console.log('Я вимкнувся');
        }
    }
}

let hp = new computer('hp', 6, -1700);
console.log(hp);
hp.on();
console.log(hp);

// // ===
// // Від базового компютрера треба реалізувати ноутбук.
// //     Він має нову властивість дюймаж монітора.
// //
// //     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class laptop extends computer {
    constructor(name, RAM, processor, monitor) {
        super(name, RAM, processor);
        this.monitor = monitor;
        this.battery = processor / (monitor * RAM);
    }
}

let lenovo = new laptop('lenovo', 6, 600, 17);
console.log(lenovo);
lenovo.on();
console.log(lenovo);
// // ===
// // Від ноутбука потрібно зробити ультрабук.
// //     Він має нову змінну ваги.
// //     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class ultraLaptop extends laptop {
    constructor(name, RAM, processor, monitor, weight) {
        super(name, RAM, processor, monitor);
        this.weight = weight;


    }

    on() {
        if (this.weight > 2 && this.battery < 4) {
            alert("Неможливо ввімкнути комп'ютер");
        } else if (this.turn === 'off') {

            this.turn = 'on';
            console.log('Я ввімкнувся');
        } else if (this.turn === 'on') {
            this.turn = 'off';
            console.log('Я вимкнувся');
        }
    }
}

let lenovoUltra = new ultraLaptop('lenovoUltra', 3000, 600, 7, 3)
console.log(lenovoUltra);
lenovoUltra.on();
console.log(lenovoUltra);
// // ===
// // Від базвого класу потрібно створити базовий ПК.
// //     В нього має бути новий метод запуску ігор.
// //     Кількість FPS визначається як потужність / опервтивку.
// //     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// // Компютер можна апгрейдити.
// //     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// //     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// //     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
class PC extends computer {
    constructor(name, RAM, processor = 600, game = 'Serious Sam') {
        super(name, RAM, processor);
        this.FPS = processor / RAM;
        this.game = game
    }

    playGame() {
        if (this.turn === 'on') {
            console.log(`Ви граєете у гру ${this.game} з ${this.FPS} FPS`);
        } else if (this.turn === 'off') {
            console.log("Щоб зіграти у гру спочатку влючи комп'ютер")
        }
    }

    increaseProcessor(percentage = 10) {
        if (percentage > 10) {
            percentage = 10;
        } else if (percentage < 1) {
            percentage = 1;
        }
        this.processor = this.processor + (this.processor * percentage / 100);

    }
}


let gnusmas = new PC('Gnusmas', 4, 700, 'Serius Sam');
console.log(gnusmas);
gnusmas.playGame();
gnusmas.on()
gnusmas.playGame();
gnusmas.increaseProcessor(0.3);
console.log(gnusmas);
// // ===
// // Від базового ПК необхідно зробити ігнорий ПК.
// //     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// //     При запуску однієї гри потужніть процесора має падати на 0.1%.
// // Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// //     що на цьому відрі ігри не запускаються.
class gamingPC extends PC {
    constructor(name, RAM = 8, processor = 600, game = 'Serious Sam') {
        super(name, RAM, processor, game);
        this.FPS = (processor / RAM) * 2;
    }

    playGame() {
        if (this.processor < 500 && this.RAM < 8) {
            alert('На цьому відрі ігри не запускаються.')
        } else if (this.turn === 'on') {
            this.processor = this.processor - (this.processor * 0.001);
            console.log(`Ви граєете у гру ${this.game} з ${this.FPS} FPS`);

        } else if (this.turn === 'off') {
            console.log("Щоб зіграти у гру спочатку влючи комп'ютер")
        }
    }

}

let superPC = new gamingPC('supePc', 6, 400, 'Serius Sam');
console.log(superPC);
superPC.on();
superPC.playGame();
console.log(superPC);
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year_of_manufacture = year_of_manufacture;
    this.maximum_speed = maximum_speed;
    this.engine_capacity = engine_capacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`)
    }

    this.info = function () {
        let information = {
            Model: this.model,
            Manufacturer: this.manufacturer,
            Year_of_manufacture: this.year_of_manufacture,
            Maximum_speed: this.maximum_speed,
            Engine_capacity: this.engine_capacity
        }
        console.log(information);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximum_speed = this.maximum_speed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year_of_manufacture = newValue;
    }

    this.addDriver = function (driver = {}) {
        this.driver = driver;
    }
}

let tesla = new Car('S1', 'Tesla Motors', 2020, 250, 600);
console.log(tesla);
tesla.drive();
tesla.info();
tesla.increaseMaxSpeed(600);
console.log(tesla);
tesla.changeYear(1997);
console.log(tesla);
tesla.addDriver({name: 'Arthur', age: 21, certificate: true});
console.log(tesla);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, year_of_manufacture, maximum_speed, engine_capacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year_of_manufacture = year_of_manufacture;
        this.maximum_speed = maximum_speed;
        this.engine_capacity = engine_capacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`)
    }

    info() {
        let information = {
            Model: this.model,
            Manufacturer: this.manufacturer,
            Year_of_manufacture: this.year_of_manufacture,
            Maximum_speed: this.maximum_speed,
            Engine_capacity: this.engine_capacity
        }
        console.log(information);
    }

    increaseMaxSpeed(newSpeed) {
        this.maximum_speed = this.maximum_speed + newSpeed;
    }

    changeYear(newValue) {
        this.year_of_manufacture = newValue;
    }

    addDriver(driver = {}) {
        this.driver = driver;
    }
}

let tesla = new Car('S1', 'Tesla Motors', 2020, 250, 600);
console.log(tesla);
tesla.drive();
tesla.info();
tesla.increaseMaxSpeed(600);
console.log(tesla);
tesla.changeYear(1997);
console.log(tesla);
tesla.addDriver({name: 'Arthur', age: 21, certificate: true});
console.log(tesla);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
class Cinderella {
    constructor(name, age, foot_size) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

let Anna = new Cinderella('Anna', 16, 35);
let Liza = new Cinderella('Liza', 21, 37);
let Olga = new Cinderella('Olga', 17, 38);
let Nastya = new Cinderella('Nastya', 18, 37);
let Sofi = new Cinderella('Sofi', 19, 36);
let Anjelika = new Cinderella('Anjelika', 20, 340);
let Maria = new Cinderella('Maria', 33, 39);
let Margary = new Cinderella('Margary', 23, 36);
let Tina = new Cinderella('Tina', 21, 37);
let Nadya = new Cinderella('Nadya', 15, 38);

let Cinderellas = [];
Cinderellas.push(Anna, Liza, Olga, Nastya, Sofi, Anjelika, Maria, Margary, Tina, Nadya);
console.log(Cinderellas);

class Prince {
    constructor(name, age, shoe_he_found) {
        this.name = name;
        this.age = age;
        this.shoe_he_found = shoe_he_found;
    }

}

let Piter = new Prince('Piter Pen', age = 25, 39);
console.log(Piter);

for (i = 0; i < Cinderellas.length; i++) {
    if (Piter.shoe_he_found === Cinderellas[i].foot_size) {
        console.log(`Принц ${Piter.name} знайшов свою принцесу ${Cinderellas[i].name}`);
    }
}

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
function Cinderella(name, age, foot_size) {
    this.name = name;
    this.age = age;
    this.foot_size = foot_size;

}

let Anna = new Cinderella('Anna', 16, 35);
let Liza = new Cinderella('Liza', 21, 37);
let Olga = new Cinderella('Olga', 17, 38);
let Nastya = new Cinderella('Nastya', 18, 37);
let Sofi = new Cinderella('Sofi', 19, 36);
let Anjelika = new Cinderella('Anjelika', 20, 340);
let Maria = new Cinderella('Maria', 33, 39);
let Margary = new Cinderella('Margary', 23, 36);
let Tina = new Cinderella('Tina', 21, 37);
let Nadya = new Cinderella('Nadya', 15, 38);

let Cinderellas = [];
Cinderellas.push(Anna, Liza, Olga, Nastya, Sofi, Anjelika, Maria, Margary, Tina, Nadya);
console.log(Cinderellas);

function Prince(name, age, shoe_he_found) {

    this.name = name;
    this.age = age;
    this.shoe_he_found = shoe_he_found;
}


let Piter = new Prince('Piter Pen', age = 25, 39);
console.log(Piter);

for (i = 0; i < Cinderellas.length; i++) {
    if (Piter.shoe_he_found === Cinderellas[i].foot_size) {
        console.log(`Принц ${Piter.name} знайшов свою принцесу ${Cinderellas[i].name}`);
    }
}
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]

function TagConstructor(titleOfTag, action, attrs = []) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;

}

function attrCreator(titleOfAttr, actionOfAttr) {
    this.titleOfAttr = titleOfAttr;
    this.actionOfAttr = actionOfAttr;
}

let aAtr1 = new attrCreator('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
let aAtr2 = new attrCreator('coords', 'Устанавливает координаты активной области.');
let aAtr3 = new attrCreator('download', 'Предлагает скачать указанный по ссылке файл.');
let a = new TagConstructor('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [aAtr1, aAtr2, aAtr3]);
console.log(a);

let divAtr1 = new attrCreator('align', 'Задает выравнивание содержимого тега <div>.');
let divAtr2 = new attrCreator('title', 'Добавляет всплывающую подсказку к содержимому.')
let div = new TagConstructor('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.', [divAtr1, divAtr2]);
console.log(div);

let h1Atr1 = new attrCreator('align', 'Определяет выравнивание заголовка.');
let h1 = new TagConstructor('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.', [h1Atr1]);
console.log(h1);

let span = new TagConstructor('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.');
console.log(span);

let inputAtr1 = new attrCreator('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
let inputAtr2 = new attrCreator('accesskey', 'Переход к элементу с помощью комбинации клавиш.');
let inputAtr3 = new attrCreator('align', 'Определяет выравнивание изображения.');
let input = new TagConstructor('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript. Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.', [inputAtr1, inputAtr2, inputAtr3]);
console.log(input);

let formAtr1 = new attrCreator('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные');
let formAtr2 = new attrCreator('action', 'Адрес программы или документа, который обрабатывает данные формы.');
let form = new TagConstructor('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.' +
    +
        'Документ может содержать любое количество форм, но одновременно на сервер может быть отправлена только одна форма. По этой причине данные форм должны быть независимы друг от друга.' +
    +
        'Для отправки формы на сервер используется кнопка Submit, того же можно добиться, если нажать клавишу Enter в пределах формы. Если кнопка Submit отсутствует в форме, клавиша Enter имитирует ее использование.' +
    +
        'Когда форма отправляется на сервер, управление данными передается программе, заданной атрибутом action тега <form>. Предварительно браузер подготавливает информацию в виде пары «имя=значение», где имя определяется атрибутом name тега <input>, а значение введено пользователем или установлено в поле формы по умолчанию. Если для отправки данных используется метод GET, то адресная строка может принимать следующий вид.', [formAtr1, formAtr2]);
console.log(form);

let optionAtr1 = new attrCreator('disabled', 'Заблокировать для доступа элемент списка.');
let optionAtr2 = new attrCreator('label', 'Указание метки пункта списка.');
let option = new TagConstructor('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [optionAtr1, optionAtr2]);
console.log(option);

let selectAtr1 = new attrCreator('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.');
let selectAtr2 = new attrCreator('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.');
let select = new TagConstructor('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [selectAtr1, selectAtr2]);
console.log(select);


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]

class TagConstructor {
    constructor(titleOfTag, action, attrs = []) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }

}

class attrCreator {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let aAtr1 = new attrCreator('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
let aAtr2 = new attrCreator('coords', 'Устанавливает координаты активной области.');
let aAtr3 = new attrCreator('download', 'Предлагает скачать указанный по ссылке файл.');
let a = new TagConstructor('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.', [aAtr1, aAtr2, aAtr3]);
console.log(a);

let divAtr1 = new attrCreator('align', 'Задает выравнивание содержимого тега <div>.');
let divAtr2 = new attrCreator('title', 'Добавляет всплывающую подсказку к содержимому.')
let div = new TagConstructor('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора. Как и при использовании других блочных элементов, содержимое тега <div> всегда начинается с новой строки. После него также добавляется перенос строки.', [divAtr1, divAtr2]);
console.log(div);

let h1Atr1 = new attrCreator('align', 'Определяет выравнивание заголовка.');
let h1 = new TagConstructor('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <h1> представляет собой наиболее важный заголовок первого уровня, а тег <h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.', [h1Atr1]);
console.log(h1);

let span = new TagConstructor('span', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.');
console.log(span);

let inputAtr1 = new attrCreator('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
let inputAtr2 = new attrCreator('accesskey', 'Переход к элементу с помощью комбинации клавиш.');
let inputAtr3 = new attrCreator('align', 'Определяет выравнивание изображения.');
let input = new TagConstructor('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. То же самое обстоит и в случае обработки данных с помощью клиентских приложений, например, скриптов на языке JavaScript. Основной атрибут тега <input>, определяющий вид элемента — type. Он позволяет задавать следующие элементы формы: текстовое поле (text), поле с паролем (password), переключатель (radio), флажок (checkbox), скрытое поле (hidden), кнопка (button), кнопка для отправки формы (submit), кнопка для очистки формы (reset), поле для отправки файла (file) и кнопка с изображением (image). Для каждого элемента существует свой список атрибутов, которые определяют его вид и характеристики. Кроме того, в HTML5 добавлено еще более десятка новых элементов.', [inputAtr1, inputAtr2, inputAtr3]);
console.log(input);

let formAtr1 = new attrCreator('accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные');
let formAtr2 = new attrCreator('action', 'Адрес программы или документа, который обрабатывает данные формы.');
let form = new TagConstructor('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.' +
    +
        'Документ может содержать любое количество форм, но одновременно на сервер может быть отправлена только одна форма. По этой причине данные форм должны быть независимы друг от друга.' +
    +
        'Для отправки формы на сервер используется кнопка Submit, того же можно добиться, если нажать клавишу Enter в пределах формы. Если кнопка Submit отсутствует в форме, клавиша Enter имитирует ее использование.' +
    +
        'Когда форма отправляется на сервер, управление данными передается программе, заданной атрибутом action тега <form>. Предварительно браузер подготавливает информацию в виде пары «имя=значение», где имя определяется атрибутом name тега <input>, а значение введено пользователем или установлено в поле формы по умолчанию. Если для отправки данных используется метод GET, то адресная строка может принимать следующий вид.', [formAtr1, formAtr2]);
console.log(form);

let optionAtr1 = new attrCreator('disabled', 'Заблокировать для доступа элемент списка.');
let optionAtr2 = new attrCreator('label', 'Указание метки пункта списка.');
let option = new TagConstructor('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [optionAtr1, optionAtr2]);
console.log(option);

let selectAtr1 = new attrCreator('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.');
let selectAtr2 = new attrCreator('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.');
let select = new TagConstructor('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.', [selectAtr1, selectAtr2]);
console.log(select);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car = {
    model: 'S1',
    manufacturer: 'Tesla Motors',
    year_of_manufacture: 2020,
    maximum_speed: 250,
    engine_capacity: 600,


    drive() {
        console.log(`їдемо зі швидкістю ${this.maximum_speed} на годину`)
    },
    info() {
        let information = {
            Model: this.model,
            Manufacturer: this.manufacturer,
            Year_of_manufacture: this.year_of_manufacture,
            Maximum_speed: this.maximum_speed,
            Engine_capacity: this.engine_capacity
        }
        console.log(information);
    },
    increaseMaxSpeed(newSpeed) {
        this.maximum_speed = this.maximum_speed + newSpeed;
    },
    changeYear(newValue) {
        this.year_of_manufacture = newValue;
    },
    addDriver(driver = {}) {
        this.driver = driver;
    }
}

console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(600);
console.log(car);
car.changeYear(1997);
console.log(car);
car.addDriver({name: 'Arthur', age: 21, certificate: true});
console.log(car);