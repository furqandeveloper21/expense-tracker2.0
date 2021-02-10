import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTransaction = [
    { amount: 300, desc: "Cash" },
    { amount: 150, desc: "Balance" },
    { amount: 100, desc: "Bill" },

]

export const TransactionContext = createContext (initialTransaction);


export const TransactionProvider = ({}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch({
            type: "ADD TRANSACTION" ,
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
            }

        })

    }

}