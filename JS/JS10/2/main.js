

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let date = new Date()

let sessionCounter = localStorage.getItem(`Updates Counter`)
console.log(sessionCounter)
let time = `date - 0${date.getDate()}/0${date.getMonth()}/${date.getFullYear()},  time - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//localStorage.setItem(`time${sessionCounter}`, time)
sessionCounter++
localStorage.setItem(`Updates Counter`, sessionCounter) 
if (localStorage.getItem(`sessionsArr`) === null)
{
    localStorage.setItem(`sessionsArr`,JSON.stringify([]))
    console.log(`empty`)
}

let ses = localStorage.getItem(`sessionsArr`)


let sessionsArr = JSON.parse(ses);
console.log(sessionsArr)
sessionsArr.push(time)
localStorage.setItem(`sessionsArr`, JSON.stringify(sessionsArr))


