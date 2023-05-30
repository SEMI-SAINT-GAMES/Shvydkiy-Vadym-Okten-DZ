// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


function User (id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userArr = [];

for (let i = 0; i < 10; i++)
{
   let bufUser = new User(i, `vasya ${i}`, `petrenko ${i}`, `vasenka${i+i}@vasya.com`, `+38050000000${i}`)
   userArr.push(bufUser);
}
console.log(userArr)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
 let filterUser = userArr.filter(value => value.id % 2 === 0)
 console.log(filterUser)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = userArr.sort((a, b) => b.id - a.id);  //Масив і так іде по зростанню, тому написам по спаданню
console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
let products = [`milk`, `bread`, `meat`, `cheese`, `sausagues`, `juice`, `butter`, `salt`, `sugar`, `peper`, `fish`, `coke`, `sprite`, `fanta`, `water`, `gum`, `tea`, `coffee`]
class Client {
    constructor(id, userName, surname, email, phone, order){
        this.id = id;
        this.userName = userName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
    
}
function Buy(){
    let orderArr = [];
    for(let i = 0; i < Math.random() * 10; i++)
    {
        const j = Math.round(Math.random() * (products.length - 1))
        orderArr.push(products[j])

    }
    return orderArr;
}   // Може так і довше,але цікавіше, тим паче наш масив буде завди динамічно змінюватися

// створити пустий масив, наповнити його 10 об'єктами Client

let userArr2 = [];
for (let i = 0; i < 10; i++)
{
   let bufUser = new Client(i, `vasya ${i}`, `petrenko ${i}`, `vasenka${i+i}@vasya.com`, `+38050000000${i}`, Buy())
   userArr2.push(bufUser);
}
console.log(userArr2)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
 let sortCliens = userArr2.sort((a, b) => a.order.length - b.order.length)
 console.log(sortCliens)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity)
    {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    Drive() {
       return `We are driving with a speed ${this.maxSpeed} per hour`
    }
    
    Info() {
        let inf = ``
        for (let key in this) {
            inf += key + ': ' + this[key];
         }
        return inf
      }
     IncreaseMaxSpeed(speed){
       this.maxSpeed += speed;
        return this
     } 
     ChangeYear(newValue){
          this.year = newValue;
          return this
     }
     AddDriver(driverName, surname, drivingExperience, skills){
        class Driver { 
            constructor(driverName, surname, drivingExperience, skills)
        {
            this.driverName = driverName
            this.surname = surname
            this.drivingExperience = drivingExperience
            this.skills = skills
        }
        
      }
      let carWithDriver = {...this}
      carWithDriver.driver = new Driver (driverName, surname, drivingExperience, skills)
      return carWithDriver
    }
}
let car = new Car(`ggg`, `hhh`, 2009, 557, 2.3)
console.log(car)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(car.Drive())
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(car.Info())
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log(car.IncreaseMaxSpeed(100))
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(car.ChangeYear(2004))
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log(car.AddDriver(`petya`,`petrenko`,`6 Years`,[`drift`, `cityDrive`, `race`]))


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
const cinNames = ['Emily', 'Olivia', 'Charlotte', 'Sophia', 'Ava', 'Amelia', 'Mia', 'Harper', 'Evelyn', 'Abigail']
const cinAges = [27, 33, 20, 41, 38, 23, 29, 43, 22, 36]
const cinFootSizes = [31, 40, 38, 34, 27, 43, 30, 33, 39, 28]
class Cinderella {
    constructor(cinName, age, footSize){
        this.name = cinName;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellas = []
for (let i = 0; i< 10; i++){
   let bufCin = new Cinderella (cinNames[i], cinAges[i], cinFootSizes[i])
   cinderellas.push(bufCin)
}
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(princeName, age, shoesSize){
         this.name = princeName;
         this.age = age;
         this.shoesSize = shoesSize;
    }
}
const princeNames = ['James', 'William', 'Ethan', 'Henry', 'Alexander', 'Daniel', 'Matthew', 'Joseph', 'Samuel', 'Benjamin']
const princeAges = [47, 62, 55, 40, 68, 36, 53, 66, 31, 59]
const shoes = [43, 39, 38, 34, 33, 31, 30, 28, 27, 40]
let princes = []
for (let i = 0; i< 10; i++){
    let bufPrince = new Prince (princeNames[i], princeAges[i], shoes[i])
    princes.push(bufPrince)
 }
 console.log(princes)
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < 10; i++)
{
     for(let j = 0; j < 10; j++)
     {
        if (cinderellas[i].footSize === princes[j].shoesSize)
        {
            console.log(cinderellas[i].name + ` - ` + princes[j].name)
        }
     }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let findCin = (age) => {
//     cinderellas.find(value => value.age === age)
    
// }
// console.log(findCin(33))
// let findCinByShoes = (size) => {
//     cinderellas.find(value => value.footSize === size)
//     console.log(value)
// }
// console.log(findCinByShoes(40))
//Тут чомусь не виходить