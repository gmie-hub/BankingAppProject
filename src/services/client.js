class Client{
   #stored_data = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    deposit: "",
   };

   register(payload){
    const schema = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        dob: "",
        deposit: "",
        transactionDetails: [],
        ...payload
    };

    const reg = JSON.parse(localStorage.getItem('allUser')) || [];
    if(reg) {
        const checkUser = reg.filter((data) => {
            if(data.email === schema.email && data.password === schema.password){
                return data
            }
            return null;
        }); 
        if(checkUser.length > 0){
            alert(`user ${schema.email} exists`);
            return
        }

        const allUsers = [...reg];
        allUsers.push(schema);
        this.setData({allUser: allUsers});
        alert(`Welcome ${schema.lastName} ${schema.firstName}`);
        return schema;
    }
   }

   login(payload){
    const schema = {
        email: "",
        password: "",
        ...payload,
    };

    const loginUser = JSON.parse(localStorage.getItem("allUser")) || [];
    if(loginUser){
        const userExist = loginUser.filter((data) => {
            if(data.email === schema.email && data.password === schema.password){
                return data;
            }
            return null;
        });

        if(userExist[0]?.email && userExist[0].password){
            this.setData({currentUser: userExist[0]});
            alert(`Welcome ${userExist[0].lastName} ${userExist[0].firstName}`)
            return userExist[0];
        }
        alert('Incorrect email or password');
    }
   }
   
    transactions(payload){
        let date = new Date();

        function currentDate(){
            return date.toLocaleDateString();
        }

        function currentTime(){
            return date.toLocaleTimeString();
        }

        const schema = {
            deposited: "",
            withdraw: "",
            depositDescription: "",
            withdrawDescription: "",
            ...payload
        }

        function createTransaction(type, inputAmount) {
            const transaction = {
                userTransaction: {
                    transactionType: type,
                    transactionDate: `${currentDate()} ${currentTime()}`,
                    Description: type === 'Credit' ? schema.depositDescription : schema.withdrawDescription,
                    transactionAmount: inputAmount
                }
            }
            const getCurrent = JSON.parse(localStorage.getItem('currentUser'));
            const currentUserTransaction = getCurrent[0].transactionDetails
            currentUserTransaction.push(transaction.userTransaction);
            return currentUserTransaction;
        }
        createTransaction();
    }

   setData = (data) => {
    const store = window.localStorage;
    Object.keys(data).forEach((key) => {
        store.setItem(key, JSON.stringify(data[key]));
    });
   };
}

export const client = new Client();