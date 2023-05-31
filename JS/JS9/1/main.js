// - створити блок,
let div1 = document.createElement(`div`);
div1.innerText = `original div`
// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.backgroundColor = `green`
div1.style.color = `white`;
div1.style.fontSize = `20px`
div1.style.height = `50px`
div1.style.display = `flex`
div1.style.justifyContent = `center`
div1.style.alignItems = `center`
div1.style.marginTop = `10px`
div1.style.borderRadius = `15px`
// - додати цей блок в body.
document.body.appendChild(div1)
// - клонувати його повністю, та додати клон в body.

let div2 =document.body.appendChild(div1.cloneNode(false));
div2.innerText = `clone div`

// - Є масив:
let arr1 = ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let menu = document.createElement(`ul`);
document.body.appendChild(menu)
menu.innerText = `Menu`
menu.style.fontSize = `30px`

for (let el of arr1) {
    let li = document.createElement(`li`)
    menu.appendChild(li)
    li.innerText = el
    li.style.backgroundColor = `red`
    li.style.marginTop = `5px`
    li.style.marginLeft = `5px`
    li.style.padding = `10px`
    li.style.borderRadius = `10px`
    li.style.fontSize = `20px`
}
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5, img: `https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`},
    {title: 'Java Complex', monthDuration: 6, img: `https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png` },
    {title: 'Python Complex', monthDuration: 6, img: `https://cdn-icons-png.flaticon.com/512/919/919852.png?w=996&t=st=1685526698~exp=1685527298~hmac=1fa892b8c1cbbe5fc3bf7dba69dbac735934aeb48c4f1762c2507c603db1cd0e`},
    {title: 'QA Complex', monthDuration: 4, img: `https://play-lh.googleusercontent.com/ntNEA0NnrqTUCSFFXVCSk0OFI-WRGjWBWWvjRwKHAvehREQ9DTD8ePDtRD97PtCujg=w240-h480-rw`},
    {title: 'FullStack', monthDuration: 7, img: `https://www.multidots.com/wp-content/uploads/2018/01/Full_stack_developer-1-1.jpg?quality=90`},
    {title: 'Frontend', monthDuration: 4, img: `https://z4h5g2w8.stackpathcdn.com/wp-content/uploads/2022/02/bfd663ec8fcd825c9200ee5a3d6496b3.png`}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


for(let el of coursesAndDurationArray) {

   let courseDiv = document.createElement(`div`)
   let img = document.createElement(`img`)
   let title = document.createElement(`h2`)
   let duration = document.createElement(`p`)
   img.classList.add(`course-image`)
   title.classList.add(`course-title`)
   duration.classList.add(`course-duration`)
   courseDiv.classList.add(`course`)
   document.body.appendChild(courseDiv)
   courseDiv.appendChild(img)
   courseDiv.appendChild(title)
   courseDiv.appendChild(duration)
   img.src = el.img
   title.innerText = el.title
   duration.innerText = `Duration of course: ${el.monthDuration} mounth` 
}

// =========================

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
  //може я помиляюсь, але не бачу різниці між попереднім завданням 
// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------