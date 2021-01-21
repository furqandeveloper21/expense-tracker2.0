import React from "react";

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <div>
                <form>
                    <div>
                     <label>Description</label>
                     <input type='text' placeholder='Enter your description' />
                    </div>
                    <div>
                     <label>Amount</label>
                     <input type='text' placeholder='Enter your amount ' />
                    </div>
                    <div>
                     <input type='submit' value='Add transaction' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTransaction;