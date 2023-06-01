
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr1 = []
let pageCount = 0;
for (let i = 0; i < 100; i++){
    arr1.push(i*i)
}
let p = document.getElementsByTagName(`p`)
let pCount = 0
let elementsInit = page => {
    for(let i = page; i < page + 10; i++){
       
        p[pCount].innerText = arr1[i]
        pCount++
    }
    pCount = 0
}
elementsInit(pageCount)
let prev = document.getElementsByTagName(`button`)[0]
let next = document.getElementsByTagName(`button`)[1]

prev.onclick = function(e){
    if (pageCount > 0)
    {
    pageCount -= 10
    elementsInit(pageCount)
    }
}
next.onclick = function(e){
    if (pageCount < 90)
    {
    pageCount += 10
   elementsInit(pageCount)
    }
}






// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let textElement = document.getElementById('text');
let hideButton = document.getElementById('hideButton');


hideButton.addEventListener('click', function() {
 
  textElement.style.display = 'none';  //Сподіваюсь під 'зникати' малося на увазі це
});


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.form1
form.onsubmit = function(e){
    e.preventDefault();
    let h = document.getElementById(`checkAgeText`)
   if (form.age.value >= 18)
   {
    
    h.innerText = `Thanks my little adult homie, u can continue`
    h.style.color = `green`;
    
   }
   else 
   {
     console.log(form1.age.value)
    h.innerText = `You are too young, just grow up a little bit and come back`
    h.style.color = `red`;
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
let form2 = document.forms.markup
form2.onsubmit = function(e){
    
    e.preventDefault();
    let div = document.getElementById(`markupDiv`)
    while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
    let horizontal = form2.horizontal.value
    let vertical = form2.vertical.value
    if ((horizontal< 100 && vertical < 100))
    {
        let boxWidth = 100 / horizontal
        let boxHeight = 100 / vertical
         console.log(boxHeight)
      for(let i = 0; i < vertical; i++){
        let verticalBox = document.createElement(`div`)
        div.appendChild(verticalBox)
        verticalBox.classList.add(`verticalBox`)
        verticalBox.style.height = boxHeight + `%`
        
         for(let j = 0; j < horizontal; j++)
         {
            let box = document.createElement(`div`)
            verticalBox.appendChild(box)
            box.classList.add(`box`)
            box.style.backgroundColor = `rgb(${colorCounter + Math.floor( Math.random() * (200 - 2 + 1) +2) },  ${colorCounter + Math.floor( Math.random() * (200 - 2 + 1) + 2)}, ${colorCounter + Math.floor( Math.random() * (200 - 2 + 1) + 2)}`
            box.style.width = boxWidth + `%`
            box.innerText = form2.inside.value
            
            
         }
      
        
      }
    }
    else{
        div.innerText = `respect a fucking browser`
        console.log(horizontal + vertical)
    }
 
}
// (Додатковачастина для завдання)

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається