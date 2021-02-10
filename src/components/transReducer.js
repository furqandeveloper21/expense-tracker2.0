const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case "ADD TRANSACTION": {
            return [action.pyload, ...state]
        }
        default:
            return state;
    }
})

export default TransactionReducer;