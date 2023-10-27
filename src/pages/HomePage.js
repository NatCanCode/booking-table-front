import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="hompage">
            <h1>Welcome!</h1>
            <div className="buttons">
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </div>
    )
}

export default HomePage;
