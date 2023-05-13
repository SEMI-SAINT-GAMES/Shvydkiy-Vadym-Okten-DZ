// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sqrArea()
{
    let a = document.getElementById("sideA").value;
    let b = document.getElementById("sideB").value;
    if (!isNaN(a) && !isNaN(b))
    {
       let ar = a * b;
       document.getElementById("resultSqr").value = ar;
    }
    else
    {
        document.getElementById("resultSqr").value = `Incorrect A or B, try again`;
    }

    
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function CircleArea()
{
    let r = document.getElementById("circRad").value;
    if (!isNaN(r))
    {
    let ar = Math.PI * r  ** 2;
    document.getElementById("resultCirc").value = ar;
    }
    else
    {
        document.getElementById("resultCirc").value = `Incorrect radius, try again`;
    }
}



//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea()
{
    
    let h = document.getElementById("cylHeiht").value;
    let r = document.getElementById("cylRad").value;
    if (!isNaN(r) && !isNaN(h))
    {
    const sideAr = 2 * Math.PI * r * h;
    const baseAr = Math.PI * r ** 2;
    const ar = sideAr + 2 * baseAr;
    document.getElementById("resultCyl").value = ar;
    }
    else
    {
        document.getElementById("resultCyl").value = `Incorrect radius or heiht, try again`;
    }
}

