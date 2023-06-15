// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
let url = new URL("https://jsonplaceholder.typicode.com/users");
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
let conteiner = document.createElement('div');
document.body.appendChild(conteiner)
conteiner.classList.add(`conteiner`)
fetch(url)
  
  .then(value => value.json())
  
    
  
  .then(value => {
    

    value.forEach(user => {
     
      
      let div = document.createElement('div');
     let id =   document.createElement(`h1`)
     let userName = document.createElement(`h2`);
     let button = document.createElement('button');
     conteiner.appendChild(div)
     
     div.appendChild(id)
     div.appendChild(userName)
     div.appendChild(button)
      id.innerText = `ID: ${user.id}`;
      userName.innerText = `Name: ${user.name}`
     button.innerText = `See details`
     button.addEventListener(`click`, function(){
        location.href = `../user-details/user-details.html?${user.id}`;
     })  
     div.classList.add(`block`)
     button.classList.add(`button`)
    
    })
    
    ;
  })




// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// блоки з короткою іфною про post - в ряд по 5 .
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
// Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)