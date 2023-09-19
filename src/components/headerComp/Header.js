import { Link } from "react-router-dom";
import Links from "../linksComp/Links";
//* Avatar
import Avatar from "../../images/avatars/guyAvatar.jpg";

//* Context Avatar
import { useAvatar } from "../../context/AvatarContext";
//
//
//

const Header = () => {
    const { avatarUrl, userName } = useAvatar();

    const defaultAvatar = "Jane Doe";

    const showAvatar = () => {
        if (!userName || userName.trim() === "") {
            return defaultAvatar;
        } else {
            return userName;
        }
    };

    return (
        <header style={style.header_Cont}>
            <Link to='Profile'>
                <img
                    src={avatarUrl || Avatar}
                    alt='Avatar'
                    title='Avatar'
                    style={style.avatar}
                />
                <h2 title='User Name' style={style.avatarName}>
                    {showAvatar()}
                </h2>
            </Link>
            <section style={style.quickLinks}>
                <Links />
            </section>
        </header>
    );
};

export default Header;

const style = {
    header_Cont: {
        // display: "",

        border: ".1rem solid white",
        backgroundColor: "#0005",
        width: "80rem",
        height: "10rem",
    },

    quickLinks: {
        // display: "",
        border: ".1rem inset white",
        borderRadius: ".3rem",

        width: "60rem",
        height: "2rem",
        margin: "0 auto",
        marginTop: "1.7rem",
        boxShadow: "1px 1px 10px white",
    },

    avatar: {
        // display: "flex",
        // flexDirection: "column",
        border: ".1rem solid white",
        borderRadius: ".3rem",
        margin: "1rem",
        float: "left",
        width: "75px",
        boxShadow: "1px 1px 5px white",
    },

    avatarName: {
        display: "inline-block",

        border: ".1rem inset white",
        borderRadius: ".3rem",
        backgroundColor: "black",
        color: "#0005",
        width: "15rem",

        marginTop: "2.7rem",
        textAlign: "center",
        textShadow: "2px 1px 1px white",
        boxShadow: "1px 1px 10px white",
    },
};
