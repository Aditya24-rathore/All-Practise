import React, { useState } from 'react'
import myimg from './assets/download.jpeg'
import myimg1 from './assets/images.jpeg'
const ImgRendering = () => {
    let [image,setImage]=useState(myimg)
    let changeImage=()=>{
      setImage(myimg1)
    }
    let[bgimage,setbgimage]=useState(myimg)
    let changebgimg=()=>{
        setbgimage(myimg1)
    }
  return (
    <>
    {/* <h1>Rendering</h1>
    <div><img src={image} alt="" style={{height:"200px",width:"400px"}}/></div>
    <button onClick={changeImage}>Change Image</button> */}

    <div style={{height:"200px",width:"400px",backgroundImage:`url(${bgimage})`,backgroundSize:"cover"}}></div>
    <button onClick={changebgimg}>Change Image</button>
    </>
  )
}

export default ImgRendering