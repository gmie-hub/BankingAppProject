const allUsers = localStorage.getItem('allUser');
const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

export const initialState = {
    authentication: false,
    allUsers: JSON.parse(allUsers) || [],
    user: {},
    currentUser: currentUser,
    deposited: '',
    withdraw: '', 
    deposit: currentUser?.deposit
};
export const userReducer = (state, action) => {
       
    switch (action.type) {     
        case 'LOGIN_USER':
            return {
                ...state,
                authentication: true,
            }

        case 'SET_USER': 
            return{...state, user: action.user}

        case 'LOGOUT': 
            return {
                ...state, authentication: false
            }

        case 'INCREMENT':
            return{
                ...state, currentUser:{ ...currentUser, deposit: parseFloat(state.currentUser.deposit) + parseFloat(action.deposited)}

            }
         
        case 'DECREMENT':
            return {
                ...state, currentUser: {...currentUser, deposit: parseFloat(state.currentUser.deposit) - parseFloat(action.withdraw)}
            }

            default:
                return state
    }
}