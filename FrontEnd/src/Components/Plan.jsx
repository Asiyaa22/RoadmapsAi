import { useNavigate } from "react-router-dom";

function Plan(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/register");
    }
    
    return(
        <div className="plan">
            <div className="free">
                <h2>Freemium</h2>
                <h5>get Started with our free plan</h5>
                <button onClick={handleClick}>Sign Up</button>
            </div>
            <div className="premium">
                <h2>Premium</h2>
                <h5>get Started with our paid plan</h5>
            </div>
        </div>
    )
}

export default Plan;