import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
 

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"" , email: "", password: "" , cpassword:""}) 
    let history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials;

        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className = "container"><br></br><h3>Create an account</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"  minLength={5} required />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required />
  </div>

  <div className="form-group">
    <label htmlFor="cpassword">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" 
   name="cpassword" onChange={onChange} placeholder="Password" />
  </div>

  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    )
}

export default Signup
