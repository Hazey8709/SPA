//* Imports
import { useMessageContext } from "../../context/MessageContext";
import MessageInfoName from "../nameComp/MessageInfoName";

//* Router
import { Link } from "react-router-dom";

//* Icons
import { BiSolidMessageDetail } from "react-icons/bi";
//
//
//
//

const MessageInfo = () => {
    const { messageCount } = useMessageContext();

    return (
        <section style={style.message_Cont}>
            <MessageInfoName title='Info' />

            <div>
                <Link to='/Chat' title='Chat Page' style={style.chatLink}>
                    <BiSolidMessageDetail style={style.messageIcon} />{" "}
                    {messageCount}
                </Link>
            </div>
        </section>
    );
};

export default MessageInfo;

const style = {
    message_Cont: {
        border: ".1rem solid white",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "20rem",
        height: "10rem",
        marginTop: "1rem",
        marginLeft: "1rem",
        boxShadow: "1px 1px 10px black",
    },

    chatLink: {
        display: "block",
        // border: ".1rem solid white",
        borderRadius: ".3rem",
        width: "4rem",
        height: "2rem",
        marginTop: "1rem",
        marginLeft: "1rem",
        padding: ".1rem",
        //textAlign: "center",
        textDecoration: "none",
        color: "black",
        fontSize: "1.5rem",
        boxShadow: "1px 1px 5px white",
    },
};
