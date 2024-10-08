import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";



function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   //both of these things will be accessed through the user and setUser states that we created in the UserProvider file
    const {setUser} = useContext(UserContext)
    // in this component we have to pass the data so we use the method that sets the data (setUser)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username} //the value in this field is governed by username
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}

        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login