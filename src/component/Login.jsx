import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
        const[password,setPassword]=useState("");

    const handlelogin=(e)=>{
     e.preventDefault();
    }    

    if(email==="admin@gmail.com"&&
    password==="Admin1234"){
        alert("admin login succesfullyyy");
        navigate("/admin/dashboard")
    

     if(email==="customer@gmail.com"&&
    password==="Customer1234"){
        alert("customer login succesfullyyy");
        navigate("/customer/dashboard")
    }
//wrog thing
else{
    alert("invalid email and password")
}
    }

return(
        <div className="login">
            <h1> welcome to login page</h1>

           <form onSubmit={handlelogin}>
           <input
           type="email"
           placeholder="enter email"
           value={email}
           onChange={(e)=>
            setEmail(e.target.value)}
            required
            />

            <input
           type="password"
           placeholder="enter password"
           value={password}
           onChange={(e)=>
            setPassword(e.target.value)}
            required
            />
            
            <button type="submit"> login</button>
           
           </form>

        </div>
    )


}






export default Login;