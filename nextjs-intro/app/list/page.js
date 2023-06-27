'use client'
import { useState } from "react"

export default function List() {
  let 상품 = ['totmatoes', 'pasta', 'coconut']
  let [수량, 수량변경]= useState(0)
  
  return (
      <div>
        {상품.map((el,idx)=>{
          return(
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img"/>
            <h4>{el} $40</h4>
            <span> {수량} </span>
            <button onClick={()=>{ 수량변경(수량+1) }}> + </button>
          </div>)
        })}
      </div>
    )
  } 