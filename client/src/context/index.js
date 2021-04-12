import React from 'react';
import api from '../utils/api.js';

const Context = React.createContext();

export const ContextProvider = props => {
    
    return(
        <Context.Provider value={{ api }}>
            {props.children}
        </Context.Provider>
    )

}

export default Context;