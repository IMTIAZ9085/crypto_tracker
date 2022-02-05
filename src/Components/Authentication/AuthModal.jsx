import React,{ useState} from 'react';
import {Typography,Box,Modal,Button, AppBar,Fade, Tabs, Tab} from '@material-ui/core';
import Login from './Login';
import SignUp from './SignUp';
// import  from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  // border: '2px solid #fff',
  // boxShadow: 204,/
  color:"white",
  p: 4,
};

const AuthModal=()=> {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [value, setvalue] = useState(0);

  const handleChange=(event,newValue) => {
    setvalue(newValue);
  };
console.log(value);
  return (
    <div>
      <Button variant="contained" style={{
        width:85,
        height:35,
        backgroundColor:"red",
        color: "white"

      }} onClick={handleOpen}>Log in</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}  style={{ background: "linear-gradient(#e66465, #9198e5)" }}>
          {/* <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          
          <AppBar position="static"
          style={{
            backgroundColor:"blue",
            color:"white"
          }}
          >
          <Tabs  value={value}
          onChange={handleChange}
          varient="fullWidth"
          style={{borderRadius:10}}
           >
          <Tab label="LogIn"/>
          <Tab label="SignUp"/>
          </Tabs>
           
          </AppBar>
        
          {value==0 && <Login handleClose={handleClose}/>}
          {value==1 && <SignUp handleClose={handleClose}/>}
           

        </Box>
      </Modal>
    </div>
  );
}

export default AuthModal;