import React, {useState} from 'react'
import SayHiFunction from'./SayHiFunction'
import SayHiClass from'./SayHiClass'

function Character() {

    const [name, setName] = useState("Homer");

    return (
        <div>
            <label>
                <strong>Say hi to:</strong>
            </label>
            <select value={name} onChange={e => setName(e.target.value)}>
                <option value="Homer">Hommer</option>
                <option value="Marge">Marge</option>
                <option value="Bart">Bart</option>
                <option value="Lisa">Lisa</option>
                <option value="Maggie">Maggie</option>
            </select>
            <SayHiFunction name={name} />
            <SayHiClass name={name} />
        </div>

    )
}

export default Character
