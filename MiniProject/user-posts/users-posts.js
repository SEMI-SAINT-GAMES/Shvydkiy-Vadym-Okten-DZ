let id = parseInt(new URL(location.href).search.slice(1))
console.log(id)
let currentPost = localStorage.getItem(`currentPostOfUser`) 
console.log(currentPost)
console.log(typeof(currentPost))
fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
.then(value => value.json())
.then(value => {
    
    for (const key in value) {
        // console.log(typeof(key))
        if (key == currentPost)
        {
            console.log(`yes`)
            
const div = document.createElement('div');
div.classList.add(`main`)
const h1 = document.createElement(`h1`);
const p = document.createElement(`p`)
let titleText = JSON.stringify(value[key].title).replaceAll(`"`, ` `)
let bodyText = JSON.stringify(value[key].body).replaceAll(`"`, ` `)
h1.innerText = titleText[1].toUpperCase()  + titleText.slice(2);
h1.style.textAlign = `center`
p.innerText = bodyText[1].toUpperCase() + bodyText.slice(2)
p.style.textAlign = `center`
document.body.appendChild(div);
div.appendChild(h1)
div.appendChild(p)
        }
        else
        {
            console.log(`none`)
        }
}
})

