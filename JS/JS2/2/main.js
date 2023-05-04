// <<==Логічні розгалудження==>> 

let a = 1
if (a !== 0)
{
    console.log(`Вірно`);
}
else
{
    console.log(`Невірно`);
}
a = 0
if (a !== 0)
{
    console.log(`Вірно`);
}
else
{
    console.log(`Невірно`);
}
a = -3
if (a !== 0)
{
    console.log(`Вірно`);
}
else
{
    console.log(`Невірно`);
}

//====================================//

let time = +prompt(`Скажи час від 0 до 59 хвилин`)

if (time >= 0 && time <= 59)
{
    if (time <= 15)
    {
        console.log(`Перша чверть`);
    }
    else if (time <= 30)
    {
        console.log(`Друга чверть`);
    }
    else if (time <= 45)
    {
        console.log(`Третя чверть`);
    }
    else
    {
        console.log(`Четверта чверть`);
    }

}
else
{
    console.log(`Стільки хвилин не існує`);
}

//====================================//

let day = +prompt(`Введи число місяця ві 1 до 31`)
if (day > 0 && day <= 31)
{
    if (day <= 10) {
        console.log(`Перша декада`);
       }
    else  if (day <= 20) {
        console.log(`Друга декада`);
       }
    else{
        console.log(`Третя декада`);
       }   

    
}
else{
    console.log(`Не буває стількі днів`);
}


//====================================//

let dayNum = +prompt(`Enter day number`)

   switch(dayNum){
        case 1:
          console.log(`Tennis`);
          break;
        case 2:
          console.log(`Chess`);
          break;
        case 3:
          console.log(`Library`);
          break;
        case 4:
          console.log(`Jogging`);
          break;
        case 5:
          console.log(`Js lesson`);
          break;
        case 6:
          console.log(`Swimming`);
          break;
        case 7:
          console.log(`Relax`);
          break;  
        default:
            console.log(`Incorrect day number`);

    }




   


//====================================//

let a1 = +prompt(`Enter first number`)
let a2 = +prompt(`Enter second number`)

if (!isNaN(a1) && !isNaN(a2))
{
  if ( a1 === a2)
   {
      console.log(`equal`);
   }
  else if (a1 > a2)
   {
      console.log(a1 + `  First is bigger`);
   }
  else if (a2 > a1)
   {
      console.log(a2 + `  Second is bigger`);
   }
}
else{
    console.log(`One of numbers is incorret, try again!`)
}


 //====================================//

 let b = prompt(`Enter anything`)
 if (b === null || b === `` || b === 0 || b === -0 || b === false || b === undefined)
 {
    b = `Default`
    console.log(b);
 }

 //====================================//

 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// Руки чесалися зробити це через цикл але вирішив не забігати наперед, зробив самописну імітацію циклу)))
let i = 0
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}
i++
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}
i++
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}
i++
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}
i++
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}
i++
if (coursesAndDurationArray[i].monthDuration > 5)
{
    console.log(coursesAndDurationArray[i].title + ` - Super!!!`);
}



 



