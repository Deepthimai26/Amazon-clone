import React,{useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Signup = () => {
  const [email,setEmail]=useState(null)
  const [password,setPassword]=useState(null)
  const [firstname,setFirstname]=useState(null)
  const [lastname,setLastname]=useState(null)
    const [phonenumber,setPhonenumber]=useState(null)
    const Signupuser=async()=>{
      changeLoading(true)
      const data=new FormData()
  
  data.append("email",email)
  data.append("password",password)
  data.append("first_name",firstname)
  data.append("last_name",lastname)
  data.append("phone_number",phonenumber)
  const response =await axios.post("https://amazon.indianhackerslab.com/signup.php",data,{header:{'content-type':'multipart/form-data'}})
  if(response){
      console.log (response)
      if(response.data)
        {
          if(response.data.status==="success"){
            setDisplaymodel(true)
          }else{
            setErrormodel(true)
          }
        }
  }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [loading,changeLoading]=useState(null)
  const [displaymodel,setDisplaymodel]=useState(null)
  const [errormodel,setErrormodel]=useState(null)
  return (
    <div>
      <Modal open={displaymodel}>
          <Box sx={style}>
            <h2>Success</h2>
            <p>Your login successful</p>
            <button onClick={()=>{setDisplaymodel(false)}} className='btn btn-danger w-100'>close</button>
          </Box>
        </Modal>
        <Modal open={errormodel}>
          <Box sx={style}>
            <h2>Invalid credentials</h2>
            <p>Enter correct password</p>
            <button onClick={()=>{setErrormodel(false)}} className='btn btn-danger w-100'>close</button>
          </Box>
        </Modal>







      <main class="form-signin col-4 mx-auto">
    <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
    <div class="form-floating">
      <input type="text"  onChange={(event)=>{setFirstname(event.target.value)}}class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="3r5vsj"/>
      <label for="floatingInput">First Name</label>
    </div>
    <div class="form-floating">
      <input type="text"  onChange={(event)=>{setLastname(event.target.value)}}class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="3r5vsj"/>
      <label for="floatingInput">Last Name</label>
    </div>
    <div class="form-floating">
      <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  onChange={(event)=>{setPhonenumber(event.target.value)}} class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="3r5vsj"/>
      <label for="floatingInput">Phone Number</label>
    </div>
    <div class="form-floating">
      <input type="email"  onChange={(event)=>{setEmail(event.target.value)}} class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="3r5vsj"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password"  onChange={(event)=>{setPassword(event.target.value)}} class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="9o44e"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div class="form-check text-start my-3">
      <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label class="form-check-label" for="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button onClick={()=>{Signupuser()}} class="btn btn-primary w-100 py-2" type="submit" fdprocessedid="s2ca1">{loading?"Account Creating":"Sign up"}</button>
    <p class="mt-5 mb-3 text-body-secondary">© 2025–2030</p>

</main>
      </div>
  );
};

export default Signup;
