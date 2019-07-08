import React from 'react';
import styled from "styled-components";
import Green from './Green';

const BlueBox = styled.div`
  margin: 1rem auto;
  height: 425px;
  width: 900px;
  background-color: blue;
`

const Blue = () => {
  return (
    <BlueBox>
      <div>This box won't get props drilled</div>
      <Green />
    </BlueBox>
  )
}

export default Blue;
