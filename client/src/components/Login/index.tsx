import React,{useState} from 'react'
import { Box, TextField, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Login = () => {
  
  const [email, setEmail] = useState("")

  const [Password, setPassword] = useState("")
 
 const onChangeEmail = (event:any) => {
  setEmail(event.target.value)
  console.log(event.target.value)
}

const onChangePassword = (event:any) => {
  setPassword(event.target.value)
  console.log(event.target.value)
}

 const onChangeLogin = () =>{
  
  const data = {
    

  }
 }

 const onClickLogin = () => {
   const data = {
    
    email: email,
    password: Password,
   

   }
   console.log(data)
 }



    return (
        <div>

        <Box>
            <Typography variant="h6" gutterBottom>
               Login
            </Typography>
            
            <TextField
            required
            id="outlined-required"
            label="email"
            defaultValue=""
            type="email"
            fullWidth
            value={email}
            sx ={{ margin: 1 }}
            name="email"
            onChange={onChangeEmail}
            />
            
           <TextField
            required
            id="outlined-required"
            label="password"
            defaultValue=""
            type="password"
            fullWidth
            value={Password}
            sx ={{ margin: 1 }}
            name="password"
           onChange={onChangePassword}
            />
          
             <Button variant="contained" fullWidth onClick={onClickLogin}>Login</Button>
             </Box>
        

             </div>
    );
}
export default Login;