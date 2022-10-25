import { useReducer, createContext, useEffect } from "react";
import { initialState, userReducer } from "../reducers/userReducer";
import { client } from "../services/client";

export const UserContext = createContext({});

const UserContextProvider = ({children}) => {
    const [users, usersDispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        //other code
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser){
            const checkUser = users.allUsers.filter((data) => {
                if(data?.email === currentUser?.email){
                    return data;
                }
                return null;
            });
            if(checkUser.length > 0){
                usersDispatch({type: "LOGIN_USER"});
                usersDispatch({type: 'SET_USER', user: checkUser[0]});
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(users.user)
    console.log(users.allUsers)

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
        usersDispatch({type: 'INCREMENT', deposited: deposited || 0});

    }

    const handleWithdraw = (withdraw) => {
        usersDispatch({type: 'DECREMENT', withdraw: withdraw || 0});
    }

    localStorage.setItem("currentUser", JSON.stringify(users.user)) 

    let result = users?.allUsers?.findIndex(x => {
    return x.email === users?.user?.email;
    })
    console.log(users.allUsers[result])
    console.log(users.user.email)
    users.allUsers[result].deposit = users.user.deposit;
    localStorage.setItem("allUser", JSON.stringify(users.allUsers));

    return (
        <UserContext.Provider value={{register, login, logout, users, handleDeposit, handleWithdraw}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;