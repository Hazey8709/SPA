import { Link } from "react-router-dom";

import SiteName from "../nameComp/SiteName";

const Nav = () => {
    return (
        <nav style={style.navCont}>
            <section>
                <SiteName siteName='Chat Box' />
            </section>

            <section style={style.navBtnCont}>
                <Link to='/' style={style.navLink}>
                    Home
                </Link>
                <Link to='/' style={style.navLink}>
                    Chat
                </Link>
                <Link to='/' style={style.navLink}>
                    Friends
                </Link>
                <Link to='/' style={style.navLink}>
                    Profile
                </Link>
            </section>
            <section style={style.quickLinks}></section>
        </nav>
    );
};

export default Nav;

const style = {
    navCont: {
        display: "flex",
        border: ".1rem solid black",
        flexDirection: "column",
        width: "20rem",
        height: "100vh",
        backgroundColor: "#0005",
    },

    navBtnCont: {
        // display: "",
        border: ".1rem solid green",
        borderRadius: ".3rem",
        width: "10rem",
        height: "30rem",
        marginTop: "3rem",
    },

    quickLinks: {
        // display: "",
        border: ".1rem solid yellow",
        borderRadius: ".3rem",

        width: "18rem",
        height: "10rem",
        margin: "0 auto",
        marginTop: "3rem",
    },
};
