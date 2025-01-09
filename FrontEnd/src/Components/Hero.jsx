import { useNavigate } from "react-router-dom";
function Hero(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/plan");
    }
    return (
        <div className="hero-content">
            <div className="content-1">
            <h2>You are not Stuck</h2>
            <h2>You just need a good Roadmap</h2>
            </div>
            <div className="content-2">
                <h1>RoadmapsAi</h1>
            </div>
            <div>
                <button className="hero-btn" onClick={handleClick}>Get Started 🚀</button>
            </div>
        </div>
    )
}

export default Hero;