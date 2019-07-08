import React, { useContext } from 'react'
import styled from "styled-components"
import CountContext from '../context/CountContext';

const PinkBox = styled.div`
  margin: 1rem auto;
  height: 275px;
  width: 700px;
  background-color: #ff70fa;
  color: #ffffff;

  .section {
    margin-top: 2rem;

    header {
      margin-bottom: .5rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`

const Pink = () => {
  const count = useContext(CountContext);
  console.log(count.total)

  return (
    <PinkBox>
      <div>This will use context just like the red box</div>
      <div>Click count from context: {count.total}</div>
      <button onClick={count.increment}>Click to add</button>
      <div className="section">
        <header>Instructions</header>
        To use context: create a context object, then create a wrapper with the context.provider tag. 
        After that add a value prop which is essentially the state you want to share. 
        Pick a point on your component tree to use the wrapper (index.js in this case) 
        and then use the "useContext" hook to consume it in each component that needs it
      </div>
    </PinkBox>
  )
}

export default Pink
