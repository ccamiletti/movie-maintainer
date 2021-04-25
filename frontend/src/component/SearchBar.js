import React from 'react'
import {Form} from 'react-bootstrap'

function SearchBar({keyword, setKeyword}) {
    return (
        <div>
            <Form.Control type="text" placeholder="search by title" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
        </div>
    )
}

export default SearchBar

