// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
let url = new URL("https://jsonplaceholder.typicode.com/users");

fetch(url)
  .then(value => value.json())
  .then(value => {
    const userList = document.getElementById('user-list');
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
    value.forEach(user => {

      const li = document.createElement('li');
      li.innerText = `${user.id} - ${user.name}`;

     
      const link = document.createElement('a');
      link.href = `user-details.html?id=${user.id}`;
      link.innerText = link.href;

     
      li.appendChild(link);

     
      userList.appendChild(li);
    });
  })





// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

