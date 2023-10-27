import React from "react";
import { Link } from "react-router-dom";

const LoadingPage = () => {
    return (
        <div style= {styles.load}>
            <h1 >Loading</h1>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link> */}
        </div>
    )
}

const styles = {
    load: {
        backgroundColor: "black",
        // height: 90,
        // padding: 5,
        // display: "flex",
    }
}

export default LoadingPage;