import React from "react";

const AddTransaction = () => {
    return (
        <div className='transaction-box'>
            <h3>Add New Transaction</h3>
            <div>
                <form>
                     <label>Description <br /> 
                         <input type='text' placeholder='Enter your description' required />
                    </label>
                    <br />
                     <label>Amount <br /> 
                         <input type='text' placeholder='Enter your amount ' required />
                    </label>
                     <br />
                     <input type='submit' value='Add transaction' className='btn' />
                </form>
            </div>
        </div>
    );
}

export default AddTransaction;