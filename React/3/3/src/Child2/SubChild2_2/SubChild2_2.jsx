import {useContext, useState} from "react";
import {ChildContext} from "../../App";

export const SubChild2_2 = () =>{
    const [re, setRe] = useState(null)
    const cont = useContext(ChildContext)
    const {setIsChild1_1, isChild1_1} = cont
     const arPlus = () => {
        isChild1_1.push({name: "Kostya", age:30, prof: "Blogger"})
         setRe([])
         console.log(isChild1_1)
     }
    return(
        <div className="subChild">
            <p>2_2</p>
            <div>{
                isChild1_1.map((person, id ) => {
                    return(
                        <div key ={id} style={{border:"1px solid black", margin:"10px"}}>
                        <p>{person.name}</p>
                            <p>{person.age}</p>
                            <p>{person.prof}</p>
                        </div>
                    )
                })
            }</div>
            <button onClick= {() => arPlus()}>Add Kostya</button>
        </div>
    )
}