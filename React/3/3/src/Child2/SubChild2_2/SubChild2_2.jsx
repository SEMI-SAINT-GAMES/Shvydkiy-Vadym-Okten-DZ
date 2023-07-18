import {useContext, useState} from "react";
import {ChildContext} from "../../App";

export const SubChild2_2 = () =>{
    const [re, setRe] = useState(null)
    const cont = useContext(ChildContext)
    const {ar, setIsChild1_1, isChild1_1} = cont
     const arPlus = () => {
        ar.push({name: "Kostya", age:30, prof: "Blogger"})
         setRe([])
         console.log(ar)
     }
    return(
        <div className="subChild">
            <p>2_2</p>
            <div>{
                ar.map((person, id ) => {
                    return(
                        <div key ={id}>
                        <p>{person.name}</p>
                        </div>
                    )
                })
            }</div>
            <button onClick= {() => arPlus()}>Add Kostya</button>
        </div>
    )
}