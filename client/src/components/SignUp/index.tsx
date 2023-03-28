import React,{useState} from 'react'
import { Box, TextField, Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [mobilenumber, setMobileNumber] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
 const onChangeUsername = (event:any) => {
    setUsername(event.target.value)
    console.log(event.target.value)
 }
 const onChangeEmail = (event:any) => {
  setEmail(event.target.value)
  console.log(event.target.value)
}
const onChangeMobileNumber = (event:any) => {
  setMobileNumber(event.target.value)
  console.log(event.target.value)
}
const onChangePassword = (event:any) => {
  setPassword(event.target.value)
  console.log(event.target.value)
}
const onChangeConfirmPassword = (event:any) => {
  setConfirmPassword(event.target.value)
 
}
 const onChangeSignup = () =>{
  
  const data = {
    

  }
 }

 const onClickSignup = () => {
   const data = {
    name: username,
    email: email,
    mobilenumber: mobilenumber,
    password: Password,
    Confirmpassword: ConfirmPassword

   }
   console.log(data)
 }



    return (
        <div>

        <Box>
            <Typography variant="h6" gutterBottom>
                SignUp
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="Name"
                value={username}              
                  fullWidth
                sx={{ margin: 1 }}
                onChange ={onChangeUsername}
            />
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
            label="mobilenumber"
            defaultValue=""
            type="mobile number"
            fullWidth
            value={mobilenumber}
            sx ={{ margin: 1 }}
            name="mobile number"
            onChange={onChangeMobileNumber}
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
          <TextField
            required
            id="outlined-required"
            label="confirm password"
            defaultValue=""
            type="password"
            fullWidth
            value={ConfirmPassword}
            sx ={{ margin: 1 }}
            name="confirmPassword"
           onChange={onChangeConfirmPassword}
            /> 
            <Box>
            <Checkbox {...label} defaultChecked /> 
            <Typography variant="caption" gutterBottom>
                Accept terms and conditions
            </Typography>
            </Box>
             <Button variant="contained" fullWidth onClick={onClickSignup}>Signup</Button>
             </Box>
        

             </div>
    );
}
export default SignUp;