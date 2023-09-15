import { Link } from "react-router-dom";

import SiteName from "../nameComp/SiteName";

const Nav = () => {
    return (
        <nav style={style.nav_Cont}>
            <section>
                <SiteName siteName='Chat Box' />
            </section>

            <section style={style.navBtn_Cont}>
                <Link to='/Home' title='Home Page' style={style.navLinks}>
                    Home
                </Link>
                <Link to='/Chat' title='Chat Page' style={style.navLinks}>
                    Chat
                </Link>
                <Link to='/Friends' title='Friends Page' style={style.navLinks}>
                    Friends
                </Link>
                <Link to='/Profile' title='Profile Page' style={style.navLinks}>
                    Profile
                </Link>
            </section>
        </nav>
    );
};

export default Nav;

const style = {
    nav_Cont: {
        display: "flex",
        // border: ".1rem solid black",
        flexDirection: "column",
        width: "20rem",
        height: "100vh",
        backgroundColor: "#0005",
        paddingRight: ".5rem",
    },

    navBtn_Cont: {
        // display: "",
        // border: ".1rem solid white",
        borderTopRightRadius: ".3rem",
        borderBottomRightRadius: ".3rem",
        width: "10rem",
        height: "30rem",
        marginTop: "3rem",
        padding: ".5rem",
        boxShadow: "1px 1px 10px white",
    },

    navLinks: {
        display: "block",
        border: ".1rem inset white",
        borderRadius: ".3rem",
        marginTop: "4rem",
        textAlign: "center",
        color: "#0005",
        backgroundColor: "black",
        fontSize: "28px",
        fontWeight: "bolder",
        textShadow: "2px 1px 1px white",
        padding: ".1rem",
        textDecoration: "none",
        boxShadow: "1px 1px 5px white",
    },
};
