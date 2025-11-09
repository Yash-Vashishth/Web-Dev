import React from 'react'

const Counter = () => {
    let counter = 1;

    const clickHandler = () => {
        counter += 1;
        console.log(counter);
    }
  return (
      <>
          <p>{counter}</p>

          {/* <button Onclick={clickHandler}>+1</button>      without handler*/}
          <button Onclick={()=>clickHandler()}>+1</button>
      </>
  )
}

export default Counter