import { useContext } from "react";
import { createContext } from "react";

export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo: "to do msg",
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
});

export const Todoprovider=Todocontext.Provider;

export const useTodo=()=>{
    return useContext(Todocontext);
}

