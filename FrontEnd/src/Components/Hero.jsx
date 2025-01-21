import { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Hero(){
    // const [message, setMessage] = useState("");
    // useEffect(() => {
      //call the backend API
    //   axios.get("/api/road")
    //   .then(response => setMessage(response.data.message))
    //   .catch(error => console.error("Error is:", error))
    // }, []);
    const navigate = useNavigate();

    function handleCLickNavigate(){
        navigate("/register");
    }
    const [showPlans, setPlans] = useState(false);
    function handleClickGet(){
        setPlans(true);
    }
    function handleClickClose(){
        setPlans(false);
    }

    const cardRefs = useRef([]);
    useEffect(() => {
        // const cards = document.querySelectorAll(".cards");
        if(showPlans){
            const cards = cardRefs.current;
            // Initialize VanillaTilt for all cards
            cards.forEach((card) => {
                if (card) {
                    window.VanillaTilt.init(card, {
                        max: 25, // Maximum tilt angle
                        speed: 400, // Speed of the tilt
                        glare: true, // Enable glare effect
                        "max-glare": 0.5, // Maximum glare opacity
                    });
                }
            });
        }
        //CleanUP function
        return () => {
            const cards = cardRefs.current;
            cards.forEach((card) => {
                if (card && card.vanillaTilt) {
                    card.vanillaTilt.destroy();
                }
            });
        }
    }, [showPlans]);
    return (
        <div className="hero-content">
            {/* <div><p>{message}</p></div> */}
            <div className="content-1">
            <h2>You are not Stuck</h2>
            <h2>You just need a good Roadmap</h2>
            </div>
            <div className="content-2">
                <h1>RoadmapsAi</h1>
            </div>
            <div>
                <button className="hero-btn" onClick={handleClickGet}>Get Started 🚀</button>
            </div>
            {showPlans && ( <div className="plan">
            {/* <div className="container"> */}
            <div className="cards" 
            ref={(el) => (cardRefs.current[0] = el)} // Store reference to this card
            id="freemium">
                <h2>Freemium</h2>
                <h5>get Started with our free plan</h5>
                <button onClick={handleCLickNavigate}>Sign Up</button>
            </div>
            <div className="cards" 
             ref={(el) => (cardRefs.current[1] = el)} // Store reference to this card
            id="premium">
                <h2>Premium</h2>
                <h5>get Started with our paid plan</h5>
            </div>
            <button className="close-btn" onClick={handleClickClose}><i className="fa-solid fa-x"></i></button>
            {/* </div> */}
        </div>)}
        </div>
    )
}

export default Hero;