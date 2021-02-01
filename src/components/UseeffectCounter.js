import React, { useState, useEffect} from 'react'

const UseeffectCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `clicked ${count} times`;
    })

   function changeClick(){
       setCount(count + 1);
   }

//    const changeCount = () =>{
//        setCount(count + 1);
//    }

    return (
        <div>
            <button onClick={changeClick}>clicked {count} times</button>      
        </div>
    )
}

export default UseeffectCounter
