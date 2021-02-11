import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";
import { Transaction } from "./Transactions" ;


const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext); 

    return (
        <div className='transaction-list'>
            <h3>History</h3>
            <hr />
            {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
            )
            )}
         
        </div>
    );
}

export default TransactionHistory;