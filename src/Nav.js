import React from 'react'

const Nav = (props) =>{
    return(
        <div id='NavBar'>
            <input placeholder='Type movie name to search' id='Search' onChange={(content) => props.input(content.target.value)} />
            <button>Search</button>
            
        </div>

    )
}
export default Nav