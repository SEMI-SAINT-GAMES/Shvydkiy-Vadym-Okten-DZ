import {useContext, useEffect, useState} from "react";
import {ChildContext} from "../../App";

export const SubChild1_1 = () =>{

    const info = useContext(ChildContext)
    const {ar, setIsChild1_1, isChild1_1} = info
    const [re, setRe] = useState(info)


    return(
        <div className="subChild">
            <p>1_1</p>
            {/*{!isChild1_1 && <div>*/}
            {/*    <p>{ar[0].name}</p>*/}
            {/*    <p>{ar[0].age}</p>*/}
            {/*    <p>{ar[0].prof}</p>*/}
            {/*    <hr/>*/}
            {/*    <p>{ar[1].name}</p>*/}
            {/*    <p>{ar[1].age}</p>*/}
            {/*    <p>{ar[1].prof}</p>*/}
            {/*    <hr/>*/}
            {/*    <p>{ar[2].name}</p>*/}
            {/*    <p>{ar[2].age}</p>*/}
            {/*    <p>{ar[2].prof}</p>*/}
            {/*</div>}*/}
            {<div>{ ar.map((person, id ) => {
                return(
                    <div key ={id}>
                        <p>{person.name}</p>

                    </div>
                )
            })}</div>}
            <button onClick= {() => setRe([])}>Update Info</button>
        </div>)
}