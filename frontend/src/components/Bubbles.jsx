import React from 'react'
import './Bubbles.css';

const Bubbles = () => {
  return (
    <div>
        <div className="bubble w-30 h-30 bg-[#d6c7bd75] rounded-full absolute top-50 left-20"></div>
        <div className="bubble w-30 h-30 bg-[#d6c7bd75] rounded-full absolute top-100 left-270"></div>
        {/* <div className="bubble w-30 h-30 bg-[#d6c7bd75] rounded-full absolute top-170 left-100"></div> */}
    </div>
  )
}

export default Bubbles