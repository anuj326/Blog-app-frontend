import React ,{useContext, useState } from 'react'
import { Navigate} from 'react-router-dom';
import { UserContext } from '../UserContext';



function LoginPage() {
  const ENDPOINT = 'http://3.14.245.184:4000';
    //const history = useNavigate();

    const[user, setUser] = useState({
        username:'', password:''
    });
    const [redirect , setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

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
      const response = await fetch(ENDPOINT+'/login',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        credentials:'include',
        body:JSON.stringify(
          { username, password  }
        ),
      });
      // const data = response.json();
      // console.log(data);
      if(response.ok){
       response.json().then(userInfo =>{
        setUserInfo({userInfo});
         // window.alert('Logged in Successfully')
         setTimeout(() => {
          localStorage.setItem("token", userInfo.token);
           window.location = "/";	
        }, 1000);
        //window.location = '/';
          setRedirect(true);
         // history('/');
       })
        
      }else{
        window.alert('Invalid username or password')
      }


      // if(res.status == 400 || !data){
      //   window.alert('Invalid username or password')
      // }else{
        
      //   res.json().then(userInfo =>{
      //     setUserInfo(userInfo);
      //     window.alert('Logged in Successfully')
      //     history('/');
      //   })
        
      // }
      
    }
if(redirect){
  return <Navigate to={'/'} />
}

  return (
    <div>
   
        <form className="login">
            <h1>Login</h1>
            <input name='username' type="username" placeholder='username'
            value={user.username}
            onChange={handelInputs} 
            />
            <input name='password' type="password" placeholder='password'
            value={user.password}
            onChange={handelInputs}
            />
            <button onClick={loginUser}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage