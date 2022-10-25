const allUsers = localStorage.getItem('allUser');
// const currentUser = JSON.parse(localStorage.getItem('currentUser'));

export const initialState = {
    authentication: false,
    allUsers: JSON.parse(allUsers) || [],
    user: JSON.parse(localStorage.getItem('currentUser')) || {},
    // currentUser: currentUser,
    deposited: '',
    withdraw: '', 
    // deposit: user?.deposit
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
                ...state, user:{ ...state.user, deposit: parseFloat(state.user.deposit) + parseFloat(action.deposited)}

            }
         
        case 'DECREMENT':
            return {
                ...state, user: {...state.user, deposit: parseFloat(state.user.deposit) - parseFloat(action.withdraw)}
            }

            default:
                return state
    }
}