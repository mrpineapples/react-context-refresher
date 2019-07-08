/* eslint-disable no-const-assign */
import React, { useContext } from 'react';
import styled from "styled-components";
import Blue from './components/Blue';
import CountContext from './context/CountContext';

const Box = styled.div`
  margin: 1rem auto;
  height: 500px;
  width: 1000px;
  background-color: red;
  color: #ffffff;
`

const App = () => {
  const count = useContext(CountContext);
  console.log(count)

  return (
    <Box>
      <div>Total Clicks from context: {count.total}</div>
      <Blue />
    </Box>
  )
}

export default App;
