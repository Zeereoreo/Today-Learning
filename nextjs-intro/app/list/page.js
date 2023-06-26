export default function List() {
  let 상품 = ['totmatoes', 'pasta', 'coconut']

  
  return (
      <div>
        <h2>Products</h2>
        <div className="food">
          <h4>{상품[0]} $40</h4>
        </div>
        <div className="food">
          <h4>{상품[1]} $40</h4>
        </div>
        <div className="food">
          <h4>{상품[2]} $40</h4>
        </div>
        {상품.map((el,idx)=>{
          return(
          <div className="food">
            <h4>{el} $40</h4>
          </div>)
        })}
      </div>
    )
  } 