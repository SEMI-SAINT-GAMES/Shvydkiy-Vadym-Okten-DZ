// let div = document.body.getElementsByTagName("div");
// console.log(div)
sessionCounter = localStorage.getItem(`Updates Counter`)
let sessionsArr =JSON.parse(localStorage.getItem(`sessionsArr`))

for (let i = 0; i < sessionCounter; i++)
{
   let div =document.createElement(`div`);
   document.body.appendChild(div)
   div.innerText =  `Session №${i + 1} : ${sessionsArr[i]}`
   
}


