
// (Додатковачастина для завдання)

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let div = document.getElementsByTagName(`div`)[0]
let time = new Date().getTime();
if(localStorage.getItem(`time`) === null)
{
    localStorage.setItem(`time`, time)
}
if (localStorage.getItem(`money`) === null)
{
    localStorage.setItem(`money`, 100)
}

let money = JSON.parse(localStorage.getItem(`money`))
moneySet()

let lastTime = localStorage.getItem(`time`)
let difference = time - lastTime
console.log(difference)
if (difference > 10000)
{
    localStorage.setItem(`time`, time)
    money += 10;
    moneySet();
}
else{
    console.log(`wait`)
}
function moneySet() {
    div.innerText = money + `UAH`
    localStorage.setItem(`money`, money)
}


