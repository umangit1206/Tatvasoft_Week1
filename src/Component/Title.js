import React from 'react'
import './App.css'




function Title(props) {      
  return (
    <div>
      <h2 className={'class'}>Title Functional Component</h2>
      <h2 >I am {props.name} my age is {props.age}</h2>
      <h1 style={{color: "red"}}>Hello Style!</h1>
    </div>
  );

}

export default Title
