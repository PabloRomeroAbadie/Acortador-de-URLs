import { useReducer } from "react";
import { add, load, addView } from "./actions";

export function reducer(state, action){
    switch(action.type) {
        case "ADD":
            return add(state, action);
        
        case "LOAD":
            return load();

        case "LOAD_VIEW":
            return addView(state, action);

        default:
    }
}

export default function useReducerApp(){
    return useReducer(reducer, { items: [] });
}