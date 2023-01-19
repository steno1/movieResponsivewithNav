import  { createContext, useReducer } from "react";
import DarkModeReducer from "./DarkModeReducer";


const initialState = {
    darkMode: false
    }
    
    export const DarkModeContext = createContext(initialState);
    export const DarkModeContextProvider=({children})=>{
        //the children is our App
        // the Reducer is our function
const [state, dispatch]=useReducer(DarkModeReducer, initialState);
//state is our initial state and dispatch function

return(
    <DarkModeContext.Provider 
    value={{darkMode:state.darkMode, dispatch}}>
{children}
    </DarkModeContext.Provider>  
)
    }