import React, { useState } from "react";

const CountContext = React.createContext();

export const CountProvider = (props) => {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{
      total: count,
      increment: incrementClickHandler
    }}>
      {props.children}
    </CountContext.Provider>
  )
}

export default CountContext;