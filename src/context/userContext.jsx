import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [users, dispatch] = useReducer(userReducer, [], () => {
        const allUsers = localStorage.getItem('allUser');
        return allUsers ? JSON.parse(allUsers) : [];
    });
    useEffect(() => {
        localStorage.setItem('allUser', JSON.stringify(users))
    }, [users]);

    // const currentData = JSON.parse(localStorage.getItem('current_session'))
    // if(currentData === null){
    //     localStorage.setItem('current_session', JSON.stringify([]))
    // }
    
    const [currentUsers, currentUsersDispatch] = useReducer(userReducer, [], () => {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser ? JSON.parse(currentUser) : [];
    })
    const login = (emailData, passwordData) => {
        var currentUser = users.filter(({ email, password }) => {
        if (email === emailData && password === passwordData) {
        return { email, password };
        }
        });
        if(currentUser.length !== 0){
            localStorage.setItem('currentUser', JSON.stringify(currentUser))
        }
        else{
            alert('incorrect username or password');
        }
        currentUsersDispatch({type: 'LOGIN_USER'})
        console.log(currentUsers)
    };
    useEffect(() => {
        // localStorage.setItem('currentUser', JSON.stringify(currentUsers))
    })

    return (
        <UserContext.Provider value={{users, login, currentUsersDispatch, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;