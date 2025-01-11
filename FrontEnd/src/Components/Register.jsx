import { useNavigate } from "react-router-dom";
function Register(){
    const navigate = useNavigate();

    function handleClickRegister(){
        navigate("/main");
    }
    return (
        <div className="wrap">
        <div className="register">
            <h3>Register & Get Started!!...YOoo</h3>
            <form action="/home" method="post">
               <input type="text" name="name" id="" placeholder="name"/>
               <input type="mail" name="mail" id="" placeholder="mail"/>
               <input type="text" name="ph_no" id="" placeholder="Phone N0."/>
               <input type="password" name="password" id="" placeholder="password"/>
               <button className="btn" onClick={handleClickRegister}>Register</button>
            </form>
        </div>
        </div>
    )
}

export default Register;