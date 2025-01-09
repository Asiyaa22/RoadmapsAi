function Register(){
    return (
        <div>
            <form action="/home" method="post">
               <input type="text" name="name" id="" placeholder="name"/>
               <input type="mail" name="mail" id="" placeholder="mail"/>
               <input type="text" name="ph_no" id="" placeholder="Phone N0."/>
               <input type="password" name="password" id="" placeholder="password"/>
            </form>
        </div>
    )
}

export default Register;