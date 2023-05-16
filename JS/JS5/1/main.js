//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


let recArea = (a, b) => a*b;
console.log(`площа прямокутника = ${recArea(3, 6)}`);

//створити функцію яка обчислює та повертає площу кола з радіусом r

let circArea = (r) => Math.PI* r *r;
console.log(`Площа кола = ${circArea(2)}`);

//створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cilArea = (r, h) => 2*Math.PI * r * (r+h);
console.log(`Площа циліндру = ${cilArea(3, 6)}`);

//- створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1,2,3,4,5]
let arrInit = (arr) => {
    for(let el of arr){
     console.log(el);
    }
}
arrInit(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let parInit = (text) => document.write(`<p>${text}</p>`);
parInit(`okten`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulLi = (text) => {
    document.write(`<ul> LIST 1`);
    for(let i = 0; i < 3; i++)
    {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}
ulLi(`li`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let ulLi2 = (text, count) => {
        if(!isNaN(count))
        {
        document.write(`<ul> LIST 2`);
        for(let i = 0; i < count; i++)
        {
            document.write(`<li> ${text} </li>`);
        }
        document.write(`</ul>`);
        }
    }

    ulLi2(`li`, 7)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let ArrInit = (arr) =>
{
    document.write(`<ul> LIST 3`);
   for (const item of arr)
   {
    document.write(`<li> ${item} </li>`);
   }
   document.write(`</ul>`);
}
let itemsArr = [1, 2, 3, 4, 5, `okten`, 3.6, false]
ArrInit(itemsArr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Bartholomew JoJo "Bart" Simpson is one of the main characters of the animated series The Simpsons. Bart is the oldest child of Homer and Marge Simpson. He also has two younger sisters, Lisa and Maggie. Bart is the epitome of a brawler and a mediocre student at school. Along with his father, Bart is one of the most famous characters in this series.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Homer Jay Simpson is one of the main characters of the animated series "The Simpsons". Homer is the rude and impolite father of the family, he has obvious flaws: he is fat, bald and not very smart. Often he behaves like a jester, absurdly, selfishly and tactlessly, but still remains likable.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is a regular character of the animated series "The Simpsons", voiced by Julia Kavner. She usually wears a green dress, red ballet flats, a necklace made of artificial pearls around her neck and drives an orange station wagon. She has gorgeous blue hair, which she usually wears in a very high updo. Hazel eyes (19s6e). The main occupation is a housewife, she spends most of her time taking care of the house, children and Homer. The image of Marge copies the stereotype of the provincial American housewife of the 50s. Marge is the only member of the family who attends church voluntarily.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Lisa Marie Simpson is the heroine of the cartoon series "The Simpsons". The middle child in the family, an eight-year-old girl, who stands out among the rest of the Simpsons primarily because of her intelligence and judgment.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Margaret Evelyn "Maggie" Simpson is a character from the cartoon series "The Simpsons". She first appeared on television in the Tracey Ullman show, in the short film Good Night (English) in Russian. April 19, 1987. Maggie was conceived and designed by cartoonist Matt Groening while he was waiting to meet James L. Brooks. Named after Greinings younger sister. After appearing on Tracey Ullmans show, three years later, the Simpson family got their own series on the Fox TV channel, which debuted on December 17, 1989.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
let SimpsonsInit = (arr) => {
    if (Array.isArray(arr))
    {  
        for(const simpson of simpsons)
        {
            document.write(`<div class="person-info">`);
               document.write(` <img src=${simpson.photo} alt="Person's photo">`);
                 document.write(`<div class="info">`);
                   document.write(`<h2>${simpson.name} ${simpson.surname}</h2>`);
                   document.write(`<p>AGE: ${simpson.age}</p>`)
                   document.write(`<p>${simpson.info}</p>`)
                   

                 document.write(`</div>`);
               document.write(``);
            document.write(`</div>`);
        }
         
    }
   
}
SimpsonsInit(simpsons);

// - створити функцію яка повертає найменьше число з масиву

let arr2 = [1, 2, 3, 4, 5, 6, 7, -1]

let TheSmallestNumber = (arr) =>
{
    
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) 
  {
    if (!isNaN(arr[i]) && !isNaN(arr[0]))
    {
      if (arr[i] < smallest) 
      {
          smallest = arr[i];
      }
    }
    else
    {
     return(`Incorrect Array`);
    }
  }
  return smallest;
}
console.log(`Найменьше число масиву = ${TheSmallestNumber(arr2)}`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let Sum = (arr) =>
{
    if (Array.isArray(arr))
    {
    let s = 0;
    for (const num of arr)
    if (!isNaN(num))
    {
        {
           s += num;
        }
    }
    else
    {
        return(`incorrect array`);
    }
    return(s);
    }
    else
    {
        return(`incorrect array`);
    }

}
console.log(Sum([1, 2, 3, 4, -5, 8, -4, 5, 3, 11]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr_1 = [11, 22, 33, 44, 55, 66, 77];
console.log(arr_1)
let Swap = (arr,index1,index2) =>
{
    if (Array.isArray(arr))
    {
        if (!isNaN(index1) && !isNaN(index2))
        {
            let buf = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = buf;
        }
    }
}

Swap(arr_1, 2, 4);
console.log(arr_1);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const cur = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]

let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let el of currencyValues)
    {
        if (el.currency === exchangeCurrency)
        {
            let result = sumUAH / el.value;
            return result;
        }
        
    }

}
console.log(exchange(1000, cur, `EUR`));
console.log(exchange(1000, cur, `USD`));