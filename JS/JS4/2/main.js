//створити функцію яка приймає масив та виводить кожен його елемент
let itemsArr = [1, 2, 3, 4, 5, `okten`, 3.6, false]
function ArrInit(arr)
{
   for (const item of arr)
   {
    console.log(item);
   }
}
ArrInit(itemsArr);

//створити функцію яка створює параграф з текстом. Текст задати через аргумент

function Paragraph(text)
{
   
   document.write(`<p> ${text} </p>`);
    
}
Paragraph(`OKTEN`);

document.write(`<br>`);

//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function UlLi(text)
{
    document.write(`<ul> LIST 1`);
    for(let i = 0; i < 3; i++)
    {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

UlLi(`lllllll`);

document.write(`<br>`);
//створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function UlLi2(text, count)

{
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

UlLi2(`kkkkkk`, 4)

document.write(`<br>`);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


function ArrInit(arr)
{
    document.write(`<ul> LIST 3`);
   for (const item of arr)
   {
    document.write(`<li> ${item} </li>`);
   }
   document.write(`</ul>`);
}
ArrInit(itemsArr);




