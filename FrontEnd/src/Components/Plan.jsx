import { useState } from "react";

function Plan(){
    //Making API Calls
    const [plans, setPlans] = useState([]);

    const fetchPlans = async () => {
        try {
            const response = await fetch("http://localhost:3000/plans");
            const data = response.text;
            console.log(data);
            setPlans(data);
        }catch(error){
            console.log("Error Fetching PLans", error);
        }
    };


    return(
        <div className="plan">
            <div className="free">
                <h2>Freemium</h2>
                <h5>get Started with our free plan</h5>
                <button onClick={fetchPlans}>Sign Up</button>
                <p>{plans}</p>
            </div>
            <div className="premium">
                <h2>Premium</h2>
                <h5>get Started with our paid plan</h5>
            </div>
        </div>
    )
}

export default Plan;