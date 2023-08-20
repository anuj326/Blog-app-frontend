import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


function RegisterPage() {
  const ENDPOINT = 'http://3.14.245.184:4000';
    const history = useNavigate();

    const[user, setUser] = useState({
        username:'', password:''
    });

    let   name , value;
    const handelInputs = (e) =>{
       //console.log(e.target.name);
       //console.log(e.target.value);
        e.preventDefault();
        name =  e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
        console.log(user.username);
    }
    const loginUser = async(e)=>{
        e.preventDefault();
        const {username, password} =user;
      const res = await fetch(ENDPOINT+'/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          { username, password  }
        )
      });
      const data = res.json();
      console.log(data);
      if(res.status == 422 || !data){
        window.alert('Username already registered')
      }else{
        window.alert('Registered in Successfully')
       history('/login');
      }
      
    }

  return (
    <div>
  
    <form className="register">
        <h1>Register</h1>
        <input name='username' type="username" placeholder='username'
         value={user.username} 
         onChange={handelInputs} />
        <input name='password' type="password" placeholder='password'
        value={user.password} 
        onChange={handelInputs} />
        <button onClick={loginUser}>Register</button>
    </form>
</div>
  )
}

export default RegisterPage