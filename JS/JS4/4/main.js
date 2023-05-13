//створити функцію яка повертає найменьше число з масиву
let arr = [1, 2, 3, 4, 5, 6, 7, -1]

function TheSmallestNumber(arr)
{
    
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) 
  {
    if (!isNaN(arr[i]) && !isNaN(arr[0]))
    {
      if (arr[i] < smallest) 
      {
          smallest = arr[i];
      }
    }
    else
    {
     return(`Incorrect Array`);
    }
  }
  return smallest;
}
console.log(TheSmallestNumber(arr));

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function Sum(arr)
{
    if (Array.isArray(arr))
    {
    let s = 0;
    for (const num of arr)
    if (!isNaN(num))
    {
        {
           s += num;
        }
    }
    else
    {
        return(`incorrect array`);
    }
    return(s);
    }
    else
    {
        return(`incorrect array`);
    }

}
console.log(Sum([1, 2, 3, 4, -5, 8, -4, 5, 3, 11]));

//створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let arr_1 = [11, 22, 33, 44, 55, 66, 77];
console.log(arr_1);
function Swap(arr,index1,index2)
{
    if (Array.isArray(arr))
    {
        if (!isNaN(index1) && !isNaN(index2))
        {
            let buf = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = buf;
        }
    }
}

Swap(arr_1, 2, 4);
console.log(arr_1);

