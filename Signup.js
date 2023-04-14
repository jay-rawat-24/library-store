import React, { useState } from "react";
import Footer from "./Footer";

const Signup = () => {
  const [param, setParam] = useState({
    email_id: "",
    emp_name: "",
    address: "",
  })

  const { email_id, emp_name, address } = param
 
 const inputChange = (e) => {
 
    setParam({ ...param, [e.target.name]: e.target.value })
    console.log(param)
    
  }
  const login = (e) => {
    e.preventDefault()
    if(param.email_id=='' || param.address=='' || param.emp_name=='' )
    {
   alert("please input value")
    }
    else{
      fetch("http://localhost:8080/savedata", {

      method: "POST",

      body: JSON.stringify({
        ...param
        
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      .then(response => response.json())
      .then(json => console.log(json));
      
    }
    setParam = ""
  }
  const submit = () => {
    setParam = ""
  }

  return (
    <>
    <div className="conto" style={{paddingTop:'4em',paddingLeft:'-113rem' , backgroundColor:'#e6b2b2', position:'sticky'}} >
    <div >
  
    <div className='signup4' >
      <div className="mail-container">
        <form className='for'>
        <div className="email2">
          <bold>Email </bold><input className='email' name="email_id" value={email_id} type="text" onChange={inputChange} placeholder="enter the email" required="required"  /><br />
        </div>
       
        <div className="username2">
          <bold>Username </bold><input className='pass' name="emp_name" value={emp_name} type="text" onChange={inputChange} placeholder="enter the name" required="required" /><br />
        </div>
     
        <div className="location2">
          <bold>Location </bold><input className='city' name="address" value={address} type="text" onChange={inputChange} placeholder="enter the location" required="required" /><br />
        </div>
       
        <button style={{ borderRadius: '12px 14px 14px 12px' }} className='loginBtn' onSubmit={submit} onClick={login}>Submit</button>
       
      </form></div>
      
    </div>
   
    </div>
    </div>
    <Footer/>
    </>
  )
}
export default Signup;

//  {
//    "emp_name":"rawat",
//    "email_id":2,
//  "address":"pune"
//  }

// material design iconic fonts
{/* <div className="conto" style={{paddingTop:'4em',paddingLeft:'-113em' , backgroundColor:'#e6b2b2' , marginRight:'-34em' , position:'sticky'}} >
    
    <div className='signup4' >
      <form className='for'>
        <div>
          <bold>Email </bold><input className='email' name="email_id" value={email_id} type="text" onChange={inputChange} placeholder="enter the email" required="required"  /><br />
        </div>
       
        <div>
          <bold>Username </bold><input className='pass' name="emp_name" value={emp_name} type="text" onChange={inputChange} placeholder="enter the name" required="required" /><br />
        </div>
     
        <div>
          <bold>Location </bold><input className='city' name="address" value={address} type="text" onChange={inputChange} placeholder="enter the location" required="required" /><br />
        </div>
       
        <button style={{ borderRadius: '12px 14px 14px 12px' }} className='loginBtn' onSubmit={submit} onClick={login}>Submit</button>
       
      </form>
    </div>
   
   
    </div> */}