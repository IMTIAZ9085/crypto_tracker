import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { CoinList } from './Config/api';
import { auth } from './Firebase_setup';

//create context
const Crypto = createContext();

const CryptoContext = ({children}) => {

const [User, setUser] = useState(null);

useEffect(() => {
onAuthStateChanged(auth,user=>{
      if(user) setUser(user);
      else setUser(null);
})
}, []);


const [Alert, setAlert] = useState({
      open:false,
      message:"",
      type:"success",
});




      const [curr, setcurr] = useState("INR");
      const [Logo,setLogo]=useState("₹");

      //work when there will be any changes in currency
      useEffect(() => {
            if(curr === "INR") setLogo("₹");
            else if(curr === "USD") setLogo("$");
      },[curr]);

        //for state of coin data from api
        const [Coin, setCoin] = useState([]);
        //if the page is not properly loaded
        const [loading, setloading] = useState(false);

           //fetching the data form the api
      const fetchData = async()=>{
            setloading(true);
            const {data}= await axios.get(CoinList(curr));
            setCoin(data);
            setloading(false);
            
            console.log(Coin);
      }
    


      return <Crypto.Provider value={{
            curr,Logo,
            setcurr,Coin,
            loading,fetchData,
            Alert,setAlert,
            User}}>{children}</Crypto.Provider>
}

export default CryptoContext;

//to export the state whole over the App use hooks useContext
export const CryptoState=()=>{
      return useContext(Crypto);
}
