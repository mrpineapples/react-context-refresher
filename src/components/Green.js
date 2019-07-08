import React from 'react'
import styled from "styled-components";
import Pink from './Pink';

const GreenBox = styled.div`
  margin: 1rem auto;
  height: 350px;
  width: 800px;
  background-color: green;
`

const Green = () => {
  return (
    <GreenBox>
      <div>Neither will this one!</div>
      <Pink/>
    </GreenBox>
  )
}

export default Green
