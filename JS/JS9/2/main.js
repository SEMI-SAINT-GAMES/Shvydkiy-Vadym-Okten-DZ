

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
  {
      name: 'Bart',
      surname: 'Simpson',
      age: 10,
      info: 'Bartholomew JoJo "Bart" Simpson is one of the main characters of the animated series The Simpsons. Bart is the oldest child of Homer and Marge Simpson. He also has two younger sisters, Lisa and Maggie. Bart is the epitome of a brawler and a mediocre student at school. Along with his father, Bart is one of the most famous characters in this series.',
      photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
  },
  {
      name: 'Homer',
      surname: 'Simpson',
      age: 40,
      info: 'Homer Jay Simpson is one of the main characters of the animated series "The Simpsons". Homer is the rude and impolite father of the family, he has obvious flaws: he is fat, bald and not very smart. Often he behaves like a jester, absurdly, selfishly and tactlessly, but still remains likable.',
      photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
  },
  {
      name: 'Marge',
      surname: 'Simpson',
      age: 38,
      info: 'Marjorie Jacqueline "Marge" Simpson (née Bouvier) is a regular character of the animated series "The Simpsons", voiced by Julia Kavner. She usually wears a green dress, red ballet flats, a necklace made of artificial pearls around her neck and drives an orange station wagon. She has gorgeous blue hair, which she usually wears in a very high updo. Hazel eyes (19s6e). The main occupation is a housewife, she spends most of her time taking care of the house, children and Homer. The image of Marge copies the stereotype of the provincial American housewife of the 50s. Marge is the only member of the family who attends church voluntarily.',
      photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
  },
  {
      name: 'Lisa',
      surname: 'Simpson',
      age: 9,
      info: 'Lisa Marie Simpson is the heroine of the cartoon series "The Simpsons". The middle child in the family, an eight-year-old girl, who stands out among the rest of the Simpsons primarily because of her intelligence and judgment.',
      photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
  },
  {
      name: 'Maggie',
      surname: 'Simpson',
      age: 1,
      info: 'Margaret Evelyn "Maggie" Simpson is a character from the cartoon series "The Simpsons". She first appeared on television in the Tracey Ullman show, in the short film Good Night (English) in Russian. April 19, 1987. Maggie was conceived and designed by cartoonist Matt Groening while he was waiting to meet James L. Brooks. Named after Greinings younger sister. After appearing on Tracey Ullmans show, three years later, the Simpson family got their own series on the Fox TV channel, which debuted on December 17, 1989.',
      photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
  },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
 let main = document.createElement(`div`)
 main.classList.add(`main`)
 document.body.appendChild(main)

 for(const simpson of simpsons) {
  let member =  document.createElement(`div`)
  let img = document.createElement(`img`)
  let info = document.createElement(`div`)
  let simName = document.createElement(`h2`)
  let simAge = document.createElement(`p`)
  let simInfo = document.createElement(`p`)
  member.classList.add(`member`);
  
  main.appendChild(member)
  member.appendChild(img);
  member.appendChild(info);
  info.appendChild(simName)
  info.appendChild(simAge)
  info.appendChild(simInfo)
  img.src = simpson.photo;
  simName.innerText = simpson.name;
  simAge.innerText = simpson.age;
  simInfo.innerText = simpson.info
}




