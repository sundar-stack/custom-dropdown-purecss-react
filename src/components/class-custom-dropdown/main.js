import React from 'react';
import './style.css'

class Dropdown extends React.Component  {
     constructor(props){
         super(props);
         this.state = {
            dropdownValue : "Season 1"
         }
         this.handleChange = this.handleChange.bind(this)
     }


     handleChange =(e)=>{
        this.setState({dropdownValue : e.target.value})
        console.log(e.target.value ,this.dropdownValue);
    }
    
    render(){
        console.log("dropdown",this.state.dropdownValue);

        return (
            <div className="dropdown">
        
            <input type="checkbox" value="toggle" name="toggle" className="dropdown__toggle" id="toggle"/>
            <label htmlFor="toggle" className="dropdown__selected">{this.state.dropdownValue} <span className="arrow">^</span></label>
            
            
             <div className="dropdown__menu">
               <div className="dropdown__menu-listItem">
                   <input type="radio" value="Season 1" checked={this.state.dropdownValue === "Season 1"}  id="season1" onChange={this.handleChange}/>
                   <label htmlFor="season1" className="dropdown__menu-label">Season 1</label>
               </div>
               <div className="dropdown__menu-listItem">
                <input type="radio" value="Season 2" checked={this.state.dropdownValue === "Season 2"}  id="season2" onChange={this.handleChange}/>
                <label htmlFor="season2" className="dropdown__menu-label">Season 2</label>
            </div>
            <div className="dropdown__menu-listItem">
                <input type="radio" value="Season 3" checked={this.state.dropdownValue === "Season 3"}  id="season3" onChange={this.handleChange}/>
                <label htmlFor="season3" className="dropdown__menu-label">Season 3</label>
            </div>
    
            <div className="dropdown__menu-listItem">
                <input type="radio" value="Season 4" checked={this.state.dropdownValue === 'Season 4'}  id="season4" onChange={this.handleChange}/>
                <label htmlFor="season4" className="dropdown__menu-label">Season 4</label>
            </div>
    
            </div>
        </div>
        )
    }

    
}

export default Dropdown;
