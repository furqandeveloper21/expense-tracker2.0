import React from "react";

export const Transaction = ({ transaction }) => {
    return(
        <li>
           <span>{transaction.description}</span>
           <span>{transaction.transactionAmount}</span>
       </li>
    )
}