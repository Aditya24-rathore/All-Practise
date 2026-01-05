import React from 'react'
import "./Child.css"
const Child = ({myimg,price,desc}) => {
  return (
   <>
   <div id="main">
    <img src={myimg} alt="" />
    <p>Price :{price}</p>
    <p>Desc : {desc}</p>
   </div>
   </>
  )
}

export default Child