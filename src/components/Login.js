import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
// import { ErrorMessage } from '@hookform/error-message';

export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [input, setInput] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const[username, setUserName]= useState('');
  const[email, setEmail]= useState('');
  const[password, setPassWord]= useState('');
  
  const[inputusername, setInputUserName]= useState('');
  const[inputpassword, setInputPassWord]= useState('');



  const [visible, setVisible] = useState(false);
  
  // const handleChange = (event) => {
  //     setInputLogin({ ...inputLogin, username: event.target.value })

  //   }
  
  // to store in local storage
  const onRegister = () => {
    const updateUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const updateUser = {
      username: username, 
      email: email,
      password: password
    }
    updateUsers.push(updateUser);
    localStorage.setItem('users', JSON.stringify(updateUsers));
    // console.log(data);
    // event.preventDefault();
    // sessionStorage.setItem('user', JSON.stringify(input));
    history.push('/login');
  };

  const onLogin = () => {
    const loggedUserLocal = JSON.parse(localStorage.getItem('users'));
    console.log(loggedUserLocal)
    // const loggedUserSession = JSON.parse(sessionStorage.getItem('user'));
    console.log(loggedUserLocal.username)

    if(inputusername.Username === loggedUserLocal.username && inputpassword.Password === loggedUserLocal.password){
      history.push('/')
    }
    else{
      alert('wrong password or Email');
    }
    // if(inputLogin.Username === loggedUserSession.username && inputLogin.Password === loggedUserSession.password){
    //   history.push('/')
    // }
    // else{
    //   alert('wrong password or Email');
    // }
  }
  // console.log(errors);
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
      {!visible && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onLogin)}>
              <h1 className="text-center my-3 mb-2">Login</h1>
              <div className="form-group">
                <label>Username</label>
                <input
                name="Username"
                // value={inputLogin.Username}
                  type="text"
                  className="form-control"
                  autoComplete="Username"
                  {...register("Username", {
                    required: "Username is required",
                  onChange: (e)=> {setInputUserName(e.target.value)}

                  })}
                />
              </div>
              <p className="text-danger">{errors.Username?.message}</p>
              <div className="form-group">
                <label>Password</label>
                <input
                name="Password"
                // value={inputLogin.Password}
                  type="password"
                  className="form-control"
                
                  autoComplete="current-password"
                  {...register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Password must be more than 4 characters.",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "Password cannot exceed more than 10 characters.",
                    },
                  onChange: (e) => {setInputPassWord(e.target.value)}

                  })}
                />
              </div>
              <p className="text-danger">{errors.Password?.message}</p>
              <button
                type="submit"
                className="btn btn-block"
                style={{ backgroundColor: "#721b65", color: "white" }}
              >
                Login
              </button>
            </form>
            <div className="my-3 text-center">
              <button
                onClick={() => setVisible(!visible)}
                className="btn Register_btn"
              >
                Create your Account&rarr;
              </button>
            </div>
          </div>
        </div>
      )}
      {visible && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onRegister)}>
              <h1 className="text-center my-3 mb-2">Registration Form</h1>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  autoComplete="username"
                  {...register("username", {
                    required: "Username is required",
                    onChange:(event) => {setUserName(event.target.value)}

                  })}
                />
              </div>
              <p className="text-danger">{errors.username?.message}</p>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  autoComplete="email"

                  {...register("email", {
                    required: "Email is required",
                    onChange:(e) => {setEmail( e.target.value)},

                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "This is Not a Valid Email.",
                    },
                  })}
                />
              </div>
              <p className="text-danger">{errors.email?.message}</p>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}

                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                    onChange:(event) => {setPassWord(event.target.value)},

                    minLength: {
                      value: 4,
                      message: "Password must be more than 4 characters.",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "Password cannot exceed more than 10 characters.",
                    },
                  })}
                />
              </div>
              <p className="text-danger">{errors.password?.message}</p>
              <button
                type="submit"
                className="btn btn-block"
                style={{ backgroundColor: "#721b65", color: "white" }}
              >
                Register
              </button>
            </form>
            <div className=" my-3 text-center">
              <button className=" btn login_title" disabled>
                Already have an account?
              </button>
              <button
                onClick={() => setVisible(!visible)}
                className="btn login_btn"
              >
                Login &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
