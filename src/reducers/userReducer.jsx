export const userReducer = (state, action) => {
    const initialState = {
        authentication: false,
    };
    switch (action.type) {
        case 'ADD_USER':
            return[...state, {
                firstName: action.user.firstName,
                lastName: action.user.lastName,
                email: action.user.email,
                password: action.user.password,
                phone: action.user.phone,
                gender: action.user.gender,
                deposit: action.user.deposit,
                dob: action.user.dob
            }]
        case 'LOGIN_USER':
            return[...state, {authentication: true}]
    
        default:
            return state
    }
}