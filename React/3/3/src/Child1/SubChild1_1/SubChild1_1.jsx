import {useContext, useEffect, useState} from "react";
import {ChildContext} from "../../App";

export const SubChild1_1 = () =>{

    const info = useContext(ChildContext)
    const {setIsChild1_1, isChild1_1} = info
    const [re, setRe] = useState(info)
    useEffect((isChild1_1) =>{
          setRe([])

      }, [re])
    return(
        <div className="subChild">
            <p>1_1</p>
            {<div>{ isChild1_1.map((person, id ) => {
                return(
                    <div key ={id}>
                        <p>{person.name}</p>

                    </div>
                )
            })}</div>}
            <button onClick= {() => setRe([])}>Update Info</button>
        </div>)
}