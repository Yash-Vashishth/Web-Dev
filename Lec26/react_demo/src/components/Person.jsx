import React from 'react'

const Person = (props) => {
  return (
      <>
          <p>Name: {props.name}</p>
          <p>Profession : {props.profession}</p>
          <p>Age : {props.age} </p>
      </>
  )
}

export default Person