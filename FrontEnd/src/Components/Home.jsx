// import axios from "axios";
// import { useState, useEffect } from "react";

function Home(){
    // const [txt, setTxt] = useState("");
    // useEffect(() => {
    //     axios.post("/api/register")
    //     .then(response => setTxt(response.data))
    //     .catch(err => console.error("Error is:", err))
    // })
    return(
        <div className="home">
            <h2>Home Page</h2>
            <h3>From confusions to Clarity</h3>
            <p>Follow a precise roadmap to reach your goal seamlessly!!</p>
            <h4>What are you waiting for</h4>
            <h2>Choose from all the built-in <span>roadmaps</span> & getStarted!!</h2>
            {/* <p>{txt}</p> */}
        </div>
    )
}

export default Home;