import React, { useState } from 'react';
import './style.css'

const CustomDropdown = () => {
    

    const [dropdownValue , setDropdownValue] = useState("Season 1")

    const handleChange =(e)=>{
        setDropdownValue(e.target.value)
        console.log(e.target.value , dropdownValue);
    }
    console.log(dropdownValue);

    return (
        <div className="dropdown">
    
        <input type="checkbox" value="toggle" name="toggle" className="dropdown__toggle" id="toggle"/>
        <label htmlFor="toggle" className="dropdown__selected">{dropdownValue} <span className="arrow">^</span></label>
        
        
         <div className="dropdown__menu">
           <div className="dropdown__menu-listItem">
               <input type="radio" value="Season 1" checked={dropdownValue === "Season 1"}  id="season1" onChange={handleChange}/>
               <label htmlFor="season1" className="dropdown__menu-label">Season 1</label>
           </div>
           <div className="dropdown__menu-listItem">
            <input type="radio" value="Season 2" checked={dropdownValue === "Season 2"}  id="season2" onChange={handleChange}/>
            <label htmlFor="season2" className="dropdown__menu-label">Season 2</label>
        </div>
        <div className="dropdown__menu-listItem">
            <input type="radio" value="Season 3" checked={dropdownValue === "Season 3"}  id="season3" onChange={handleChange}/>
            <label htmlFor="season3" className="dropdown__menu-label">Season 3</label>
        </div>

        <div className="dropdown__menu-listItem">
            <input type="radio" value="Season 4" checked={dropdownValue === 'Season 4'}  id="season4" onChange={handleChange}/>
            <label htmlFor="season4" className="dropdown__menu-label">Season 4</label>
        </div>

        </div>
    </div>
    )
}

export default CustomDropdown
