import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container,Typography } from '@material-ui/core';
import Carosol from "./Carosol";


const Topcarosol = () => {

      const useStyles = makeStyles(()=>({
            banner:{
                  backgroundImage:"url(./b4.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%"
                  
            },
           container:{
                 height:400,
                 display:"flex",
                 flexDirection:"column",
                 paddingTop:25,
                 justifyContent:"space-around",
            //      border:"1px solid #fff"
           },
           heading: {
                 display:"flex",
                 height:"40%",
                 flexDirection:"column",
                 justifyContent:"center",
            //      textAlign:"center",
           }

      }))
      
      const classes=useStyles();

      return (
            <div className={classes.banner}>
            <Container className={classes.container}>
             <div className={classes.heading}>

            <Typography variant="h2"
            style={{ 
                  fontWeight: 'bold',
                  color:"gold",
                  marginBottom:15,
                  // marginLeft:"-750px"
            }}
            >
            Crypto Tracker
            </Typography>
    
            <Typography variant="h5"
            style={{ 
                  fontWeight: 'bold',
                  marginBottom:15,
                  color:"darkgray",
                  // marginLeft:"-750px"
            }}
            >
            Explore The World of Cryptocurrency
            </Typography>

             </div>

             <Carosol/>
             
            </Container>                 
            </div>
      )
}

export default Topcarosol;
