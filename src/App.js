import React, { useState } from 'react'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  var arr = Array(6).fill(0)
  const[vote ,setVote] = useState(arr)

  const Vote =()=>
  {
    const copy = [...vote]
    copy[selected] =copy[selected]+1
    setVote(copy)
  }
  const copy = [...vote]
  console.log(copy)
  return (
    <div>
      {anecdotes[selected]}<br/>
      has {vote[selected]} votes<br/>
      <button onClick = {()=>{setSelected( Math.floor(Math.random() *6))}}>Next Anecdote</button>
      <button onClick = {()=>{Vote(selected)}}>vote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[copy.indexOf(Math.max.apply(Math,copy))]} has {[Math.max.apply(Math,copy)]} votes.
    </div>
  )
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
export default App