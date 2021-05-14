import React, { useState } from 'react'
const App = ()=> {

  const [good, setGood] = useState(0)
  const [neutral ,setNeutral] = useState(0)
  const [bad , setBad] = useState(0)

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
      <h1> statistics </h1>
      <p>good:{good}</p>
        <p>neutral :{neutral}</p>
        <p>bad :{bad}
       </p>


    </div>
  );
  }
export default App;