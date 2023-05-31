// =========================
// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
  ];
  // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
  // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
  // ------------------
  for (let course of coursesArray){
    let courseDiv = document.createElement(`div`)
    let title = document.createElement(`h2`)
    let duration = document.createElement(`div`)
    let modules = document.createElement(`ul`)
    courseDiv.classList.add(`course-div`)
    duration.classList.add(`duration`)
    document.body.appendChild(courseDiv)
    courseDiv.appendChild(title)
    courseDiv.appendChild(duration)
    courseDiv.appendChild(modules)
    title.innerText = course.title
    duration.innerText = `Mounth duration: ${course.monthDuration} Hour duration: ${course.hourDuration}`
    modules.innerText = `Modules:`
    let modulesArr = course.modules
    for(let el of modulesArr){
        let li = document.createElement(`li`)
        modules.appendChild(li)
        li.innerText = el

    }
  }//Трошки не вистачило часу на стилізацію 