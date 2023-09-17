//
//
//
//
//

const MessageInfoName = (props) => {
    return (
        <div style={style.title_Cont}>
            <h1 style={style.title}>{props.title}</h1>
        </div>
    );
};

export default MessageInfoName;

const style = {
    title_Cont: {
        border: ".1rem solid black",
        borderRadius: ".3rem",
        width: "19.5rem",
        height: "1.5rem",
        margin: "0 auto",
        marginTop: ".2rem",
        // marginLeft: ".2rem",
        backgroundColor: "#0005",
    },

    title: {
        color: "white",
        marginTop: "0",
        textAlign: "center",
    },
};
