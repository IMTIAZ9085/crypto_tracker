import React from 'react';
//using of contextapi
import {createContext} from 'react';
import {useContext} from 'react';

import {useState,useEffect} from 'react';

//create context
const Crypto = createContext();

const CryptoContext = ({children}) => {

      const [curr, setcurr] = useState("INR");
      const [Logo,setLogo]=useState("₹");

      //work when there will be any changes in currency
      useEffect(() => {
            if(curr === "INR") setLogo("₹");
            else if(curr === "USD") setLogo("$");
      },[curr]);

      return <Crypto.Provider value={{curr,Logo,setcurr}}>{children}</Crypto.Provider>
}

export default CryptoContext;

//to export the state whole over the App use hooks useContext
export const CryptoState=()=>{
      return useContext(Crypto);
}
