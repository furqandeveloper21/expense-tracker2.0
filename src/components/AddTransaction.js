import React, { useState } from "react";


const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [transactionAmount, setTransactonAmount] = useState();

    return (
        <div className='transaction-box'>
            <h3>Add New Transaction</h3>
            <div>
                <form>
                     <label>Description <br /> 
                         <input type='text' placeholder='Enter your description' required value={description} onChange={(e)=> setDescription(e.target.value)} />
                    </label>
                    <br />
                     <label>Amount <br /> 
                         <input type='text' placeholder='Enter your amount ' required value={transactionAmount} onChange={(e)=> setTransactonAmount(e.target.value)} />
                    </label>
                     <br />
                     <input type='submit' value='Add transaction' className='btn' />
                </form>
            </div>
        </div>
    );
}

export default AddTransaction;