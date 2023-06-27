'use client'
import { useState } from "react"

export default function List() {
  let 상품 = ['totmatoes', 'pasta', 'coconut']
  let [수량, 수량변경] = useState([0,0,0]);

  function ProductCount(props){
    return (
      <>
      <button onClick={()=>{ 
        let copy = [...수량]
        copy[props.i]--
        수량변경(copy)
      }}>-</button>
        <span>{수량[props.i]}</span>
      <button onClick={()=>{ 
        let copy = [...수량]
        copy[props.i]++
        수량변경(copy)
      }}>+</button>
      </>
    )
  }
  
  return (
      <div>
        <h4 className="title">상품목록</h4>
        {상품.map((el,idx)=>{
          return(
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} className="food-img"/>
            <h4>{el} $40</h4>
            <ProductCount i={idx}/>
          </div>)
        })}
      </div>
    )
  } 