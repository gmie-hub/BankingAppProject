import { useReducer, createContext, useEffect } from "react";
import { initialState, userReducer } from "../reducers/userReducer";
import { client } from "../services/client";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [users, usersDispatch] = useReducer(userReducer, initialState);
    console.log(users);
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser){
            const checkUser = users.allUsers.filter((data) => {
                if(data?.email === currentUser?.email){
                    return data;
                }
                return currentUser
            });
            if(checkUser.length > 0){
                usersDispatch({type: "LOGIN_USER"});
                usersDispatch({type: 'SET_USER', user: checkUser[0]});
            }
        }
    })

    const login = (email, password) => {
        const loginData = client.login({email, password});
        if(loginData){
            usersDispatch({type: 'LOGIN_USER'});
            usersDispatch({type: 'SET_USER', user: loginData})
        }
        return loginData;
    };

    const register = (payload) => {
        const regData = client.register(payload);
        return regData;
    }

    // function autoLogin() {
    //     const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if(currentUser){
    //         const check = users.allUsers.filter((data) => {
    //             if(data.email === currentUser.email){
    //                 return data;
    //             }
    //             return currentUser
    //         });

    //         if(check.length > 0){
    //             return "/dashboard";
    //         }
    //     }
    //     return "/"
    // }

    const logout = () => {
        usersDispatch({type: "LOGOUT"});
        localStorage.removeItem('currentUser');
        return true;
    }

    // const transactions = (payload) => {
    //     const transactionData = client.transactions(payload)
    //     return transactionData
    // }

    const handleDeposit = (deposited) => {
        usersDispatch({type: 'INCREMENT', deposited: deposited});
    }

    const handleWithdraw = (withdraw) => {
        usersDispatch({type: 'DECREMENT', withdraw: withdraw});
    }

    // useEffect(() => {
    //     localStorage.setItem("currentUser", JSON.stringify(users.currentUser)) 
        
    //     if(users){
    //         let result = users?.allUsers?.findIndex(x => {
    //             return x.email === users?.currentUser?.email;
    //         })

    //         users.allUsers[result].deposit = users.currentUser.deposit;
    //         localStorage.setItem("allUser", JSON.stringify(users.allUsers));
    //     }
    //     return
    // },[users])

    return (
        <UserContext.Provider value={{register, login, logout, users, handleDeposit, handleWithdraw}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;