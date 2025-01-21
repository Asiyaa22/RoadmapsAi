import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [ph_no, setPh_no] = useState("");
    const [password, setPassword] = useState("");
    const [formdata, setFormdata] = useState("");


    // function handleClickRegister(){
    //     navigate("/main");
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/main");
        try{
           await axios.post("/api/register", {name, mail, ph_no, password})
            .then(response => setFormdata(response.data))
            .catch(err => console.error("Error is:", err))
        }catch(err){
            console.log("error sending data to backend", err)
        }
    }
    return (
        <div className="wrap">
        <div className="register">
            <h3>Register & Get Started!!...YOoo</h3>
            <form action="/main" method="post" onSubmit={handleSubmit}>
               <input type="text" name="name" id="" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
               <input type="mail" name="mail" id="" placeholder="mail" value={mail} onChange={(e) => setMail(e.target.value)}/>
               <input type="text" name="ph_no" id="" placeholder="Phone N0." value={ph_no} onChange={(e) => setPh_no(e.target.value)}/>
               <input type="password" name="password" id="" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
               <button className="btn">Register</button>
            </form>
            <p>{formdata}</p>
        </div>
        </div>
    )
}

export default Register;