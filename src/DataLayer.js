import React, { createContext, useContext, useReducer } from "react";

// DATA LAYER !!!
export const StateContext = createContext();

const DataLayer = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export default DataLayer;

// COMPONENTS USABLE HOOK
export const useDataLayerValue = () => useContext(StateContext);
