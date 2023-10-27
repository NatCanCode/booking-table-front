import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div style= {styles.header}>
            <h2 >Header</h2>
            {/* <Link to="/loading">Loading</Link> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/reservationconfimation">Confirmation</Link>
            <Link to="/reservationlist">My bookings</Link>
            <Link to="/reservationEdit">My bookings</Link>
            <Link to="/account">My account</Link>
            <Link to="/accountedit">My account</Link>
            <Link to="/passwordforgotten">Password forgotten?</Link> */}
            {/* <Link to="/history">About</Link> */}
        </div>
    )
}

const styles = {
    header: {
        backgroundColor: "pink",
        height: 90,
        padding: 5,
        // display: "flex",
    }
}

export default Header;