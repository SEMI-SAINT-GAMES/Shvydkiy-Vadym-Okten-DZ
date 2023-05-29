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


const cardTitles = [`6`, `7`, `8`, `9`, `10`, `jet`, `queen`, `king`, `ace` ]

let cards = []
let cardtitleIndex = 0;
for (let i = 0; i < 36; i++)
{
  let card = {
    title: ``,
    suit: ``,
    color: ``
  }
  if (cardtitleIndex < 9){
      card.title = cardTitles[cardtitleIndex]
      cardtitleIndex++;
  }
  else{ 
    cardtitleIndex = 0
    card.title = cardTitles[cardtitleIndex]
      cardtitleIndex++;
  };

  if (i < 9)
  {
    card.suit = 'spades'
    card.color = `black`
  }
  else if (i < 18)
  {
    card.suit = 'hearts'
    card.color = `red`
  }
  else if (i < 27)
  {
    card.suit = 'diamonds'
    card.color = `red`
  }
  else
  {
    card.suit = 'clubs'
    card.color = `black`
  }
  cards.push(card);
}
console.log(cards)

 //  - знайти піковий туз

let findAceOfSpades = cards.map(value => {
  let newCard = value
  if (newCard.title === `ace` && newCard.suit == `spades`)
  {
    return newCard;
  }
  else{
    newCard = `Not an Ace of Spades`;
    return newCard
  }

})
console.log(findAceOfSpades);
//АБО
for (el of cards) {
    if (el.title === `ace` && el.suit == `spades`)
    {
      console.log(el)
    }
  }

//  - всі шістки
let findSix = cards.filter(value => value.title === `6`);
console.log(findSix);
//  - всі червоні карти
let findReds = cards.filter(value => value.color === `red`)
console.log(findReds)
//  - всі буби
let findDiamonds = cards.filter(value => value.suit === `diamonds`)
console.log(findDiamonds)
//  - всі трефи від 9 та більше
let findClubs9orHigher = cards.filter(value => value.suit === `clubs`).filter(value => value.title != `6` && value.title!= `7` && value.title != `8`)//АБО .filter(value => value.title != `7`).filter(value => value.title != `8`)
console.log(findClubs9orHigher)
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
let reduceCards = cards.reduce((accumulator, el) => {
  if (el.suit === `spades`)
  {
    accumulator.spades.push(el)
  }
  else if(el.suit === `diamonds`)
  {
    accumulator.diamonds.push(el)
  }
  else if(el.suit === `hearts`)
  {
    accumulator.hearts.push(el)
  }
  else if(el.suit === `clubs`)
  {
    accumulator.clubs.push(el)
  }
  return accumulator
}, {spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(reduceCards)

// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
  {
      title: 'JavaScript Complex',
      monthDuration: 5,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
  },
  {
      title: 'Java Complex',
      monthDuration: 6,
      hourDuration: 909,
      modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'angular',
          'aws',
          'docker',
          'git',
          'java core',
          'java advanced']
  },
  {
      title: 'Python Complex',
      monthDuration: 6,
      hourDuration: 909,
      modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'angular',
          'aws',
          'docker',
          'python core',
          'python advanced']
  },
  {
      title: 'QA Complex',
      monthDuration: 4,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
  },
  {
      title: 'FullStack',
      monthDuration: 7,
      hourDuration: 909,
      modules: ['html',
          'css',
          'js',
          'mysql',
          'mongodb',
          'react',
          'angular',
          'aws',
          'docker',
          'git',
          'node.js',
          'python',
          'java']
  },
  {
      title: 'Frontend',
      monthDuration: 4,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
  }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let findSass = coursesArray.filter(value => value.modules.find(value => value === `sass`))
console.log(findSass)
// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter(value => value.modules.find(value => value === `docker`))
console.log(findDocker)