import React, { useState } from 'react'
const App = ()=> {

  const [good, setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodClick = () =>
  {
    setGood(good+1)
  }
  const neutralClick = () =>
  {
    setNeutral(neutral+1)
  }
  
  const badClick = () =>
  {
    setBad(bad+1)
  }
  const course =
  {
    name : 'Give Feedbaack'
  }
  return(
    <div>
      <h1> {course.name}</h1>
      <button onClick = {goodClick}> Good</button>
      <button onClick = {neutralClick}>Neutral</button>
      <button onClick = {badClick}>Bad</button>
      <h1> Statistics </h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  );
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
      good: {good}<br/>
      neutral: {neutral}<br/>
      bad: {bad}
      <p>all : {good+bad+neutral} </p>
      <p>average :{(good-bad)/(good+bad+neutral)} </p>
      <p>percentage :{(good*100)/ (good+bad+neutral)}% </p>
    </div>
    )   
    }
export default App;