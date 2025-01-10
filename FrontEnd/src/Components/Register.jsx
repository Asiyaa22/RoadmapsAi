function Register(){
    return (
        <div className="wrap">
        <div className="register">
            <h3>Register & Get Started!!...YOoo</h3>
            <form action="/home" method="post">
               <input type="text" name="name" id="" placeholder="name"/>
               <input type="mail" name="mail" id="" placeholder="mail"/>
               <input type="text" name="ph_no" id="" placeholder="Phone N0."/>
               <input type="password" name="password" id="" placeholder="password"/>
               <button className="btn">Register</button>
            </form>
        </div>
        </div>
    )
}

export default Register;