import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const changeCounter = () => setCounter(Math.random());

  return (
    <CounterContext.Provider value={{ counter, changeCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterContextProvider;
