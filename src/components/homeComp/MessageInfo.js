//* Imports

import MessageInfoName from "../nameComp/MessageInfoName";
// import Chat from "../../pages/Chat";
//
//
//
//

const MessageInfo = (props) => {
    return (
        <section style={style.message_Cont}>
            <MessageInfoName />

            <div>Number of Messages: {props.messageCount}</div>
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

    // title_Cont: {
    //     border: ".1rem solid black",
    //     borderRadius: ".3rem",
    //     width: "19.5rem",
    //     height: "1.5rem",
    //     margin: "0 auto",
    //     marginTop: ".2rem",
    //     // marginLeft: ".2rem",
    //     backgroundColor: "#0005",
    // },

    // title: {
    //     color: "white",
    //     marginTop: "0",
    //     textAlign: "center",
    // },
};
