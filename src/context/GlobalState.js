import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state:
const initialState = {
    transactions: [
        { id: 1, text: "Phone contract", amount: -30 },
        { id: 2, text: "Salary", amount: 1500 },
        { id: 3, text: "Car finance", amount: -350 },
        { id: 4, text: "Rent", amount: -550 },
    ]
}

//create context:
export const GlobalContext = createContext(initialState);

//provider context:
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }


    return ( <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider> );
}