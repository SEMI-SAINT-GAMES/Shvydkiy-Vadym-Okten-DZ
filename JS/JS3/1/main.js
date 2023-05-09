//   За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
const textArr = [
    `okten`,
    `is`,
    `the`,
    `best`,
    `IT`,
    `school`,
    `in`,
    `this`,
    `amazing`,
    `world`,

]

for(let i = 0; i < 10; i++)
{
    document.write(`<div class="first"> ${textArr[i]} </div>`);
    
}


// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині



for(let i = 0; i < 10; i++)
{
    document.write(`<div class="second"> ${textArr[i]} </div>`);
    
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let j = 0
while(j < 20)
{
    //Вирішив не писати новий массив з 20 емементів, а скористатися цим написавши відповідну умову
    if (j < 10)
    {
    document.write(`<h1 class="h"> ${textArr[j]} </h1>`);
    }
    else
    {
        document.write(`<h1 class="h"> ${textArr[j - 10]} </h1>`);
    }
 j++;
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let k = 0
while(k < 20)
{
    if (k < 10)
    {
    document.write(`<h1 class="k"> ${textArr[k]+ `  ` + k} </h1>`);
    }
    else
    {
       
        document.write(`<h1 class="k"> ${textArr[k - 10] + `   ` + k} </h1>`);
    }
 k++;
}

//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону


let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let i of listOfItems) 
{
  document.write(`<li>${i}</li>`);
}
document.write('</ul>');




