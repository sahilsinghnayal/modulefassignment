import React from 'react'
import "../App.css";
function LeftCmp() {
  return (
    <div className="leftcontainer">
        <button className="leftbtn">
            EXPLORE
        </button>
        <div className="leftlist">
        <ul>
            <li>Home</li>
            <li>Places</li>
            <li>Video</li>
            <li>Location</li>
            <li>About</li>
            <li>Book</li>
            <li>Photos</li>
        </ul>
        </div>
        <button className="bottomlftBtn">
            Learn More
        </button>
       
    </div>
  )
}

export default LeftCmp