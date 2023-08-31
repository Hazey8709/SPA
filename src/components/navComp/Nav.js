import { Link } from "react-router-dom";

import SiteName from "../nameComp/SiteName";

const Nav = () => {
    return (
        <nav style={style.nav_Cont}>
            <section>
                <SiteName siteName='Chat Box' />
            </section>

            <section style={style.navBtn_Cont}>
                <Link to='/' style={style.navLinks}>
                    Home
                </Link>
                <Link to='/' style={style.navLinks}>
                    Chat
                </Link>
                <Link to='/' style={style.navLinks}>
                    Friends
                </Link>
                <Link to='/' style={style.navLinks}>
                    Profile
                </Link>
            </section>
            {/* <section style={style.quickLinks}></section> */}
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
    },

    navBtn_Cont: {
        // display: "",
        // border: ".1rem solid green",
        // borderRadius: ".3rem",
        borderTopRightRadius: ".3rem",
        borderBottomRightRadius: ".3rem",
        width: "10rem",
        height: "30rem",
        marginTop: "3rem",
        padding: ".5rem",
        boxShadow: "1px 1px 5px white",
    },

    navLinks: {
        display: "block",
        // border: ".1rem solid orange",
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

    // quickLinks: {
    //     // display: "",
    //     border: ".1rem solid yellow",
    //     borderRadius: ".3rem",

    //     width: "12rem",
    //     height: "10rem",
    //     margin: "0 auto",
    //     marginTop: "3rem",
    // },
};
