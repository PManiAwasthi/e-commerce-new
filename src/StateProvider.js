import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ myreducernew, myInitialStateValues, children }) => (
  <StateContext.Provider value={useReducer(myreducernew, myInitialStateValues)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValues = () => useContext(StateContext);
