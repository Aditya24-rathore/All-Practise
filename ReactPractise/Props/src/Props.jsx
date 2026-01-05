import React from 'react'
import Child from './Child'
import img from "./assets/react.svg"
import "./Child.css"
const Props = () => {
  return (
    
    <>
    <div id="props">
    <Child myimg={img} price="$99" desc="T-Shirt"></Child>
    <Child myimg={img} price="$99" desc="T-Shirt"></Child>
    <Child myimg={img} price="$99" desc="T-Shirt"></Child>
    <Child myimg={img} price="$99" desc="T-Shirt"></Child>
    </div>
    </>
  )
}

export default Props