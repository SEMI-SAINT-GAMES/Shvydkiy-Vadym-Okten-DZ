// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули


let id = new URL(location.href).search.slice(1)

console.log(id)
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(value => value.json())
.then(value => {
    const div = document.createElement(`div`);
    document.body.appendChild(div)
    div.classList.add(`main`)
    for (const key in value) {
       
const h4 = document.createElement('h4');

h4.innerText = `${key}: ${JSON.stringify(value[key]).replaceAll(`"`, ` `).replaceAll(`}`, ` `).replaceAll(`{`, ` `)}`;
 div.appendChild(h4);
}
})
.then(value => {
    let titleButton = document.createElement(`button`);
    document.body.appendChild(titleButton)
    titleButton.classList.add(`titleBut`)
    titleButton.innerText = `Posts of current user`
    titleButton.addEventListener(`click`, function(){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(title => title.json())
        .then(title => {
            for(let key in title){
                const titleDiv = document.createElement(`div`)
                document.body.appendChild(titleDiv)
                titleDiv.classList.add(`titleDiv`)
                const titleLi = document.createElement('p');
                const button = document.createElement(`button`);
                let text = JSON.stringify(title[key].title).replaceAll(`"`, ` `)
                let newText = text[1].toUpperCase() + text.slice(2) //
               titleLi.innerText = newText
               titleDiv.appendChild(titleLi)
               titleDiv.appendChild(button)
               button.classList.add(`postBut`)
               button.innerText = `See post`
               button.addEventListener(`click`, function(){
                location.href = `../user-posts/users-posts.html?${id}`
                localStorage.setItem(`currentPostOfUser`, parseInt(key))
               
               })
            }
        })
        titleButton.disabled = true;
    })
})
// .then(value => {
//     let button = document.createElement(`button`);
//     document.body.appendChild(button)
//     button.addEventListener(`click`, function(){
//         location.href = `../user-posts/users-posts.html?${id}`;
//     })
//     button.innerText = `Posts of this user`
// })

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.