// Створити  компоненту TestUseMemo в та викликати її в Апп
// TestUseMemo має пропсу data (довільне занчення та данні)
// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл). та мемомізувати її за допомоги useMemo якщо data змінюється
import {useMemo, useState} from "react";

export const TestUseMemo = ({data}) => {

   const  [calcul, setCalul] = useState(data)
   const [plus, setPlus] = useState(0)
    const expenciveCalc = (value) =>{
        for (let i = 0; i < 1000000000; i++)
        {
            value += i;
        }


        return value
    }

    const calc = useMemo( expenciveCalc(calcul), [calcul])

    return(
        <>
            <p>data :{calc}</p>
            <button onClick={() => {setPlus(plus + 1)}}>++</button>
            <p>{plus}</p>
        </>
    )
}