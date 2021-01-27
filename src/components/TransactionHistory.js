import { React } from "react";

const TransactionHistory = () => {
    return (
        <div className='transaction-list'>
            <h3>History</h3>
            <hr />
            <ul>
                <li>
                    <span>Cash</span>
                    <span>300</span>
                </li>
                <li>
                    <span>Balance</span>
                    <span>150</span>
                </li>
                <li>
                    <span>Bill</span>
                    <span>100</span>
                </li>
            </ul>
         
        </div>
    );
}

export default TransactionHistory;