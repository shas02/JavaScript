// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(name, processor, RAM) {
        this.name = name;
        this.processor = processor;
        this.RAM = RAM;
    }

    turnOn() {
        console.log('Я включився');
    }

    turnOff() {
        console.log('Я виключився');
    }
}

let LG = new Computer('LG-001', 300, 6);
console.log(LG);

LG.turnOn();
LG.turnOff()
// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Notebook extends Computer {
    constructor(name, processor, RAM, monitor) {
        super(name, processor, RAM);
        this.monitor = monitor;
        this.batteryWorkingTime = processor / (monitor * RAM);
    }
}

let LenovoA8 = new Notebook('LenovoA8', 600, 8, 15.6);
console.log(LenovoA8);
LenovoA8.turnOn();
LenovoA8.turnOff();
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultrabook extends Notebook {
    constructor(name, processor, RAM, monitor, weight) {
        super(name, processor, RAM, monitor);
        this.weight = weight;
    }

    turnOn() {
        console.log('Я включився');
        if (this.weight > 2) {
            console.error('Батарея тримає менше ніж 4 години')
        }
    }
}

let LGUltra = new Ultrabook('LGUltra', 800, 10, 15, 3.5);
console.log(LGUltra);
LGUltra.turnOn();

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BasickPC extends Computer {
    constructor(name, processor, RAM) {
        super(name, processor, RAM);
        this.FPS = processor / RAM;
        this.isWorking = false;
    }

    turnOn() {
        if (this.isWorking === true) {
            console.log('Не тицяй сюди, я вже ввімкнувся');
        }
        if (this.isWorking === false) {
            this.isWorking = true;
            console.log('Я ввімкнувся')

        }

    }

    turnOff() {
        if (this.isWorking === false) {
            console.error("-_-");
            return
        }
        this.isWorking = false;
        console.log('Я вимкнувся');
    }

    PlayGame(GAME_NAME = "") {
        if (this.isWorking === true) {
            console.log(`You are playing ${GAME_NAME} with ${this.FPS} FPS`);
        }
        if (this.isWorking === false) {
            console.log('Спочатку треба компа ввімкнути')
        }
    }

    IncreaseProcessor(percents = 1) {
        if (percents > 10) {
            console.error('Закатай губу, збільшити потужність процессора можна максимум на 10%');
            return;
        }
        if (percents < 0) {
            console.error('Зменшувати потужність процессора неможна!');
            return;
        }

        this.processor = this.processor + ((this.processor * percents) / 100);
    }

    IncreaseRAM(percents = 1) {
        if (percents > 100) {
            console.error("Закатай губу, збільшити оперативну пам'ять можна максимум на 100%");
            return;
        }
        if (percents < 0) {
            console.error('Зменшувати оперативну пам`ять не можна неможна!');
            return;
        }
        this.processor = this.processor + ((this.processor * percents) / 100);
    }

    setName(name = '') {
        this.name = name;
    }

    setProcessor(points = 300) {
        this.processor = points;
    }

    setRam(points = 1) {
        this.RAM = points;
    }
}

let GamingTurbo = new BasickPC('GamingTurbo', 600, 8);
console.log(GamingTurbo);
GamingTurbo.PlayGame('skyrim');
GamingTurbo.turnOn();
GamingTurbo.turnOn();
GamingTurbo.PlayGame('skyrim');
GamingTurbo.name = 'AHAHAH'
console.log(GamingTurbo);
GamingTurbo.setName('Lenovo');
console.log(GamingTurbo);
GamingTurbo.IncreaseProcessor(12);
console.log(GamingTurbo);
GamingTurbo.IncreaseProcessor(-2);
console.log(GamingTurbo);
GamingTurbo.IncreaseProcessor(2);
console.log(GamingTurbo)
GamingTurbo.turnOff();
console.log(GamingTurbo);
GamingTurbo.turnOff();
// ===
// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class GamingPC extends BasickPC {
    constructor(name, processor, RAM) {
        super(name, processor, RAM);
        this.processorInfo = processor;
        this.playGame = false;

    }

    PlayGame(GAME_NAME = "") {
        if (this.isWorking === true) {
            if (this.processor < 500 && this.RAM < 8) {
                console.error("Нажаль з такими характеристиками не пограєш :(");
                return;
            }
            this.playGame = true;
            console.log(`You are playing ${GAME_NAME} with ${this.FPS} FPS`);
            this.processor = this.processor - (this.processor / 1000)
        }
        if (this.isWorking === false) {
            console.log('Спочатку треба компа ввімкнути')
        }
    }

    turnOff() {
        if (this.isWorking === false) {
            console.error("-_-");
            return
        }

        this.playGame = false;
        this.processor = this.processorInfo;
        this.isWorking = false;
        console.log('Я вимкнувся');
    }

}

let superPuper = new GamingPC('superPuper', 300, 8);
console.log(superPuper);
superPuper.PlayGame();
superPuper.turnOn();
superPuper.PlayGame('Mass Effect 3');
console.log(superPuper);
superPuper.turnOff();
console.log(superPuper);

//
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

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(this);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let volvo = new Car('A5', 'Germany', 2018, 240, 6);
console.log(volvo);
volvo.info();
volvo.drive();
volvo.increaseMaxSpeed(360);
volvo.info();


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Carr extends Car {
    constructor(model, producer, year, maxSpeed, volume) {
        super(model, producer, year, maxSpeed, volume);
    }
}

let mazda = new Carr('mazda', 'usa', 2021, 340, 19);
console.log(mazda);
mazda.info();
mazda.drive();
mazda.increaseMaxSpeed(360);
mazda.info();

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

// --Створити 10 попелюшок , покласти їх в масив
let Vika = new Cinderella('Vika', 23, 39);
let Olga = new Cinderella('Olga', 16, 37);
let Anna = new Cinderella('Anna', 20, 39);
let Petya = new Cinderella('Petya', 40, 46);
let Jasmine = new Cinderella('Jasmine', 21, 38);
let Olena = new Cinderella('Olena', 23, 40);
let Petro = new Cinderella('Petro', 43, 48);
let Mila = new Cinderella('Mila', 17, 37);
let Nikol = new Cinderella('Nikol', 18, 38);
let Maria = new Cinderella('Maria', 22, 39);
let Laputuska = new Cinderella('Laputuska', 16, 36);

let Cinderellas = [Vika, Olga, Anna, Petya, Jasmine, Olena, Petro, Mila, Nikol, Maria, Laputuska];
console.log(Cinderellas);

// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findMyCinderella() {
        for (const Cinderella of Cinderellas) {
            if (Cinderella.footSize === this.shoeSize) {
                console.log(`Я знайшов свою принцессу, це ${Cinderella.name}`);
                this.Cinderella = Cinderella;
                Cinderella.prince = this;

            }
        }
    }
}

// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

let Piter = new Prince('Piter', 33, 36);
console.log(Piter);
Piter.findMyCinderella();
console.log(Piter);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

// --Створити 10 попелюшок , покласти їх в масив
let Vika = new Cinderella('Vika', 23, 39);
let Olga = new Cinderella('Olga', 16, 37);
let Anna = new Cinderella('Anna', 20, 39);
let Petya = new Cinderella('Petya', 40, 46);
let Jasmine = new Cinderella('Jasmine', 21, 38);
let Olena = new Cinderella('Olena', 23, 40);
let Petro = new Cinderella('Petro', 43, 48);
let Mila = new Cinderella('Mila', 17, 37);
let Nikol = new Cinderella('Nikol', 18, 38);
let Maria = new Cinderella('Maria', 22, 39);
let Laputuska = new Cinderella('Laputuska', 16, 36);

let Cinderellas = [Vika, Olga, Anna, Petya, Jasmine, Olena, Petro, Mila, Nikol, Maria, Laputuska];
console.log(Cinderellas);
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
function Prince (name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;

    this.findMyCinderella = function () {
        for (const Cinderella of Cinderellas) {
            if (Cinderella.footSize === this.shoeSize) {
                console.log(`Я знайшов свою принцессу, це ${Cinderella.name}`);
                this.Cinderella = Cinderella;
                Cinderella.prince = this;

            }
        }
    }
}

let Piter = new Prince('Piter', 33, 36);
console.log(Piter);
Piter.findMyCinderella();
console.log(Piter);
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
//
// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car = {
    model: 'Lenovo',
    producer: 'Japan',
    year: 1983,
    maxSpeed: 600,
    volume: 39,

    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },
    info: function () {
        console.log(this);
    },
    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
    },
    changeYear: function (newValue) {
        this.year = newValue;
    },
    addDriver: function (driver) {
        this.driver = driver;
    }
}


console.log(car);
car.info();
car.drive();
car.increaseMaxSpeed(360);
car.info();