import React from 'react'
import { Form, FormControl } from "react-bootstrap";
function Search({setSearch}) {
    

    
    return (
        <div>
             <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearch(e.target.value)} />
            </Form>
        </div>
    )
}

export default Search
