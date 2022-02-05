import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
import Coininfo from "../Components/Coininfo";
import { SingleCoin } from "../Config/api";
// import { numberWithCommas } from "../Components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import {numberWithCommas} from "../Components/Carosol";


const Coinpage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { curr, Logo } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles=makeStyles((th)=>({
      container:{
            display: 'flex',
           [
                 th.breakpoints.down("md")
           ]:{
                 flexDirection: 'column',
                 alignItems: 'center'
           }
      },
     
      leftside:{
            width: '30%',
            [th.breakpoints.down("md")]:{
                  width: '100%',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:25,
            borderRight:"2px solid grey"
      },
      heading:{
      marginBottom:17,
      fontWeight:"bold",
      fontSize:"3rem"
      },
      description:{
            marginLeft:"1.6rem",
            marginRight:"3rem",
            textAlign:"justify",
            paddingTop:0,
            paddingRight:10,
            padding:25,
            width:"100%",
      },
      market:{
            alignSelf:"start",
            padding:25,
            paddingTop:10,
            width:"100%",

            //responsive Code
            [th.breakpoints.down("md")]:{
                  display:"flex",
                  justifyContent:"space-around",
            },
            [th.breakpoints.down("sm")]:{
                  flexDirection:"column",
                  alignItems:"center",
            },

            [th.breakpoints.down("xs")]:{
                 alignItems:"start",
            },
      }

       
  }));

  const classes=useStyles();

  if(!coin) return <LinearProgress style={{backgroundColor:"gold"}}/>;

      return (
            <>
             <div className={classes.container}>

            <div className={classes.leftside}>
             <img 
             src={coin?.image.large} 
             alt={coin?.name}
             height="200"
             style={{marginBottom:20}} />

             <Typography varient="h3" className={classes.heading}>
                   {coin?.name}
             </Typography>

             <Typography varient="subtitle1" className={classes.description}>
             {coin?.description.en.split(". ")[0]}.
             </Typography>

             <div className={classes.market}>

                  {/* //rank */}
                  <span style={{display:"flex"}}>
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        Rank :
                        </Typography>
                        &nbsp; &nbsp; 
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        {coin?.market_cap_rank}
                        </Typography>
                  </span>

                  {/* //current price */}
                  <span style={{display:"flex"}}>
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        Current Price :
                        </Typography>
                        &nbsp; &nbsp; 
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        {Logo}{" "} {numberWithCommas(coin?.market_data.current_price[curr.toLowerCase()])}
                        </Typography>
                  </span>

                 
                 {/* //market cap */}
                  <span style={{display:"flex"}}>
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        Market Cap :
                        </Typography>
                        &nbsp; &nbsp; 
                        <Typography 
                        variant="h5"
                        style={{
                              fontSize:"2rem"
                        }}>
                        {Logo}{" "} {numberWithCommas(coin?.market_data.market_cap[curr.toLowerCase()]
                        .toString().slice(0,-6)
                        )}M
                        </Typography>
                  </span>



             </div>
            </div>

            {/* //chart part */}
            {/* <Coininfo coin={coin}/> */}

              </div>
            </>
      )
}

export default Coinpage;
