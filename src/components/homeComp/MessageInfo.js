//* Imports
import { useMessageContext } from "../../context/MessageContext";
import MessageInfoName from "../nameComp/MessageInfoName";

//* Router
import { Link } from "react-router-dom";

//* Icons
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
//
//
//
//

const MessageInfo = () => {
    const { messageCount } = useMessageContext();

    return (
        <section style={style.messageInfo_Cont}>
            <MessageInfoName title='Info' />

            <div style={style.icons_Cont}>
                <div style={style.chatLink}>
                    <Link to='/Chat' title='Messages' style={style.link}>
                        <BiSolidMessageDetail style={style.messageIcon} />
                        {messageCount}
                    </Link>
                </div>

                <div style={style.chatLink}>
                    <Link to='/Friends' title='Friends' style={style.link}>
                        <BsPeopleFill style={style.peopleIcon} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MessageInfo;

const style = {
    messageInfo_Cont: {
        border: ".1rem solid white",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "20rem",
        height: "10rem",
        marginTop: "1rem",
        marginLeft: "1rem",
        // padding: ".2rem",
        boxShadow: "1px 1px 10px black",
    },

    icons_Cont: {
        // border: ".1rem solid green",
        width: "9rem",
        height: "7.3rem",
        padding: ".1rem",
        marginLeft: ".2rem",
        marginTop: ".2rem",
    },

    chatLink: {
        // border: ".1rem solid white",
        borderRadius: ".2rem",
        width: "4rem",
        height: "2.5rem",
        margin: "0 auto",
        marginTop: ".5rem",
        boxShadow: "1px 1px 7px white",
    },

    link: {
        // display: "block",
        color: "black",
        fontSize: "2rem",
        marginLeft: ".5rem",
        marginTop: "1rem",
        marginRight: ".3rem",
        textDecoration: "none",
    },

    messageIcon: {
        marginTop: ".3rem",
    },

    peopleIcon: {
        marginTop: ".3rem",
        marginLeft: ".4rem",
    },
};
