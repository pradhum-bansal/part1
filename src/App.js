import React, { useState } from 'react'
const App = ()=> {

  const [good, setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodClick = () =>setGood(good+1)
  const neutralClick = () =>setNeutral(neutral+1)
  const badClick = () =>setBad(bad+1)
  const course ={name : 'Give Feedbaack'}
  return(
    <div>
      <h1> {course.name}</h1>
      <Button click = {goodClick}text = "Good"/>
      <Button click = {neutralClick}text = "Neutral"/>
      <Button click = {badClick}text = "Bad"/>
      <h1> Statistics </h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
  }
  const Button =(props) =>
  {
    return( <button onClick = {props.click} type = "button">{props.text}</button>

    )
  } 


  const Statistics = (props) =>{
      let{good,neutral,bad} = props
      if(good+bad+neutral === 0)
      return(
        <div>
          No feedback given.
        </div>
      )
    else
    
    return(
    <div>
      <Statistic name ="good" value= {good}/><br/>
      <Statistic name = "neutral" value= {neutral}/><br/>
      <Statistic name = "bad" value = {bad}/>
      <p>all : {good+bad+neutral} </p>
      <p>average :{(good-bad)/(good+bad+neutral)} </p>
      <p>percentage :{(good*100)/ (good+bad+neutral)}% </p>
    </div>
    )   
    }

    const Statistic = (props) =>
    {
      return(
        <div>
          {props.name} : {props.value}
        </div>
        
      )
    }
export default App;