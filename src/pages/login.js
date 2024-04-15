import React, { useEffect, useState } from "react";
import Axios from 'axios';
import "./login.css";

function App() {

    const [usernameReg, setUernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");

    const [username, setUername] = useState("");
    const [password, setPassword] = useState ("");

    const [loginStatus, setLoginStatus] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        }).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
    };

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.message) {
                setLoginStatus( response.data.message);
            } else {
                setLoginStatus (response.data[0].message);
            }
        });
    };

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUernameReg(e.target.value);
                    }}
                /><br/>
                <label>password</label>
                <input
                    type="text"
                    onChange={(e) =>{
                        setPasswordReg(e.target.value);
                    }}
                /> <br />
                <button onClick={register} > Register</button>
            </div>

            <div className="login">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username…"
                    onChange = { (e) => {
                        setUername (e.target.value);
                    }}
                /> <br/>
                <input
                    type="password"
                    placeholder="Password…"
                    onChange = { (e) => {
                        setPassword (e.target.value);
                    }}
                />
                <button onClick={login}>Login</button>
            </div>
            <h1> {loginStatus}</h1>
        </div>
    );
}

export default App;