import axios from "axios";

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

   async apiLogin(payload){
        const schema = {
            userName: payload.email,
            password: payload.password,
        };
        const res = await fetch(
            "https://localhost:7170/api/Account/Login",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'POST',
                body: JSON.stringify(schema)
            },
             
        );
        const json = await res.json();
        console.log(json);
        return json;    
   }

   async getFetcher(){
    const res = await axios.get(
        'https://localhost:7170/api/Category/GetAllCategory'
    )

    const json = await res.data;
    console.log(json);
   }
  
   setData = (data) => {
    const store = window.localStorage;
    Object.keys(data).forEach((key) => {
        store.setItem(key, JSON.stringify(data[key]));
    });
   };

   async fetcher() {
    const res = await fetch(
        'https://hotels4.p.rapidapi.com/properties/v2/resolve-url?id=ho546370&locale=en_US&langid=1033&siteid=300000001',
        {
            headers: {
                'X-RapidAPI-Key': '02782feceemsh2e5a26b708bea39p18f31ejsn9d9696ae5828',
		        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            },
        }
    );
    const json = await res.json();
    console.log(json.details);
    return json
   
   }
}

export const client = new Client();