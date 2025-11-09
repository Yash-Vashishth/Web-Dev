import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Person from './components/Person'
const App = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
  // const data = [{name: "Rahul Verma", profession: "Lead Engineer", age :30},
  //             {name:"Manish Sharma",profession:"Software Engineer 1",age:24},
  //             {name:"Shivani Arora",profession:"Product Manager",age:33 }]

  return (
    <>
      {/* <Navbar />
      <Main />
      <Footer /> */}

      {/* {
      data.map(person=><Person name={person.name} profession={person.profession} age={person.age} />)
      } */}

      { randomNumber % 2==0?"EVEN":"ODD"}

    </>
  )
}

export default App