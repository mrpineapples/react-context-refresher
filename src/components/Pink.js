import React, { useContext } from 'react'
import styled from "styled-components"
import CountContext from '../context/CountContext';

const PinkBox = styled.div`
  margin: 1rem auto;
  height: 275px;
  width: 700px;
  background-color: #ff70fa;

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

  return (
    <PinkBox>
      <div>This will use context just like the red box</div>
      <div>Click count from context: {count.total}</div>
      <button onClick={count.increment}>Click to add</button>
      <div className="section">
        <header>Instructions</header>
        <div>
          To use context: create a context object (React.createContext()), then create a wrapper with the context.provider tag. 
          After that add a value prop which is essentially the state you want to share. 
          Pick a point on your component tree to use the wrapper (index.js in this case) 
          and then use the "useContext" hook to consume it in each component that needs it
        </div>
        <br />
        <div>
          Take a look at the CountContext.js and index.js files to see how creating context works
          and how to use the context provider. The useContext hook makes consuming context look a lot nicer,
          Take a look at App.js and Pink.js to see how it's used.
        </div>
      </div>
    </PinkBox>
  )
}

export default Pink
