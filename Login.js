import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()

  const valid = () => {
    let name = document.getElementById("name");
    let pass = document.getElementById("pass")

    const username = ""
    const userpass = ""

    if (name.value && pass.value === 0){
      alert("enter the details")
    }
       else if (name.value !== username) {
        alert("invalid username")
    }
    else if (pass.value !== userpass) {
      alert("invalid password")
    }
     
    else {
      navigate("/main")
    }
  }
  return (
    <>
      <div className='login' style={{paddingTop:'6em'}}>
      
    <div className='loginHead'>
      <h1 style={{color:'#f9ebc2', paddingTop:"2em", marginLeft:"42rem",fontSize:'4em',fontWeight:'bold',opacity:'879'}}>Login Form</h1>
      </div>
    <div style={{color:'black', paddingTop:"0.4em", marginLeft:"34rem"}} className='login'>
      <form className='loginform' >
      <div className="mb-3" >
        <label for="exampleFormControlInput1" className="form-label" style={{opacity:'963'}} >Email address</label>
        <input style={{width:"52rem",fontSize:'1.8em',borderRadius:'1em',padding:'20px',fontWeight:'600',opacity:'63'}} type="email" id="name"  className="form-control" placeholder="enter the mail id" required />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label" style={{opacity:'963'}} >Password</label>
        <input style={{width:"52rem",fontSize:'1.8em',borderRadius:'1em',padding:'20px',fontWeight:'600',opacity:'63'}} className="form-control" id="pass" placeholder="enter the password"  required />

        <button  style={{ width:"144px" ,padding:"14px" , marginRight:'534px',fontSize:'1.8em',borderRadius:'1em'}} onClick={valid}  >Submit</button>
      </div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Login
// onClick={()=>{navigate("/home")}}
