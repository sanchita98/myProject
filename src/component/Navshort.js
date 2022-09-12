import React from 'react'
import './Navshort.css'  
import HamburgerDrawer from './HamburgerDrawer';

const Navshort = ({setCategory}) => {
  return (
    <div className="nav">
        <div className="icon"><HamburgerDrawer setCategory = {setCategory}/></div>
        <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPjUx2ElrAhK2VWPybpBRVSoyqP9E09ZwIW7ipYzMkw6SFxdX"  alt = "img"/>
    </div>
  )
}

export default Navshort