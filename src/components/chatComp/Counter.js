//
//
//
//
//
//

const Counter = (props) => {
    return (
        <div style={style.messageCounter_Cont}>
            Number of Messages: {props.messageCount}
        </div>
    );
};

export default Counter;

const style = {
    messageCounter_Cont: {
        display: "flex",
        position: "absolute",
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "black",
        color: "white",
        bottom: 0,
        padding: ".2rem",
        marginLeft: "45rem",
        marginBottom: ".8rem",
    },
};
