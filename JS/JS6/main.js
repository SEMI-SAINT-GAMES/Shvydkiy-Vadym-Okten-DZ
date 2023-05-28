// - Знайти та вивести довижину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let firstArr = [
    'hello world', 'lorem ipsum', 'javascript is cool'
]
for(el of firstArr)
{
    console.log(el.length)
}

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let secondArr = [];
for(el of firstArr)
{
    let lowEl = el.toUpperCase()
    secondArr.push(lowEl) // одразу створю і наповню тут массив для наступного завдання 
    console.log(lowEl);
}


// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

for(el of secondArr)
{
    console.log(el.toLowerCase())
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(` `, ``))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
    let str5 = 'Ревуть воли як ясла повні';
let stringToArray = str => console.log(str.split(` `));
stringToArray(str5);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr6 = [10,8,-7,55,987,-1011,0,1050,0]
let map = arr6.map(number => { let num = number.toString();
return num
})
console.log(map)
// АБО протіше 
let map2 = arr6.map(String);
console.log(map2);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = (nums, direction) => {
    if (direction === 'asc') {
        return nums.sort((a, b) => a - b);
      } else if (direction === 'desc') {
        return nums.sort((a, b) => b - a);
      } else {
        return nums; 
      }
}

console.log(sortNums(nums, `asc`))
console.log(sortNums(nums, `desc`))


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sortCurces = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration)
console.log(sortCurces)



//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCources = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filterCources)
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


let i = 0;
let addId = coursesAndDurationArray.map((value) => {
  return {
    id : i++,
    ...value
  };
});

console.log(addId);
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

let cards = [
    {title: `6`, 
     suit: `space`} ,
     {
        
     }

]

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// =========================

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker