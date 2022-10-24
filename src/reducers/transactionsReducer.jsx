import { getUser } from "../context/userContext";

export const transReducer = (state, action) => {
    // const retrieve = getUser();
    // const initialDeposit = retrieve[0].deposit
    switch (action.type) {
        case 'increment':
            return {...state, deposit: parseFloat(state.deposit) + parseFloat(action.trans)}
        case 'decrement' :

        default:
            break;
    }
    
}
