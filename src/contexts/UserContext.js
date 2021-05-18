import React, { createContext, useReducer } from 'react';

import { initialState, AnuncioReducer } from '../reducers/AnuncioReducer';

export const UserContext = createContext();

export default ({ children }) => {
    const [state, dispatch] = useReducer(AnuncioReducer, initialState);
    return(
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}