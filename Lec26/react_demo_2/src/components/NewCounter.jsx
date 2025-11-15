import React, { useState } from 'react'

const NewCounter = () => {
    // let count = 1;
    const [count,setCount] = useState(1)

    const clickHandler = () => {
        // count += 1;
        setCount(count + 1);
        // console.log(count);
    }
  return (
      <>
          <p>{count}</p>

          {/* <button Onclick={clickHandler}>+1</button>      without handler*/}
          <button onClick={()=>clickHandler()}>+1</button>
      </>
  )
}

export default NewCounter