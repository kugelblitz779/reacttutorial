import React, {useState} from 'react'

const UseStateobject = () => {

    const [name, setName] = useState({firstname: "", lastname: ""})



    return (
        <div>
            <form>
                <input type="text" value={name.firstname} onChange={(e) => setName({...name, firstname: e.target.value})}></input>
                <input type="text" value={name.lastname} onChange={(e) => setName({...name, lastname: e.target.value})}></input>
                <h2> your first name - {name.firstname}</h2>
                <h2> your last name - {name.lastname}</h2>

            </form>
            
        </div>
    )
}

export default UseStateobject
