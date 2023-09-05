import SubmitBtn from "../buttonsComp/SubmitBtn";
//
//
//
//
//

const ChatForm = (props) => {
    return (
        <form style={style.form_Cont} onSubmit={props.addItem}>
            <input
                name='Name'
                value={props.Name}
                onChange={props.getInput}
                placeholder='Joe Smith:'
                style={style.inputName}
                required
            />
            <input
                name='Status'
                value={props.Status}
                onChange={props.getInput}
                placeholder='Status: '
                style={style.inputTitle}
                // required
            />
            <textarea
                name='Details'
                value={props.Details}
                onChange={props.getInput}
                placeholder='Details:'
                // required
                style={style.Details}
            />
            <div style={style.subBtn_Cont}>
                <SubmitBtn />
            </div>
        </form>
    );
};

export default ChatForm;

const style = {
    form_Cont: {
        // position: "fixed",
        border: ".1rem solid white",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "20rem",
        height: "20rem",
        marginLeft: "5rem",
        marginTop: "5rem",
        boxShadow: "1px 1px 10px black",
    },

    inputName: {
        display: "block",
        border: ".1rem inset black",
        borderRadius: ".3rem",
        width: "15rem",
        // height: "20rem",
        margin: "0 auto",
        marginTop: ".5rem",
        // boxShadow: "1px 1px 5px black",
    },

    inputTitle: {
        display: "block",
        border: ".1rem inset black",
        borderRadius: ".3rem",
        width: "15rem",
        // height: "20rem",
        margin: "0 auto",
        marginTop: "1rem",
        // boxShadow: "1px 1px 5px black",
    },

    Details: {
        display: "block",
        border: ".1rem inset black",
        borderRadius: ".3rem",
        width: "19rem",
        height: "12rem",
        margin: "0 auto",
        marginTop: "1rem",
        // boxShadow: "1px 1px 5px black",
    },

    subBtn_Cont: {
        // border: ".1rem solid red",
        width: "19.5rem",
        height: "2rem",
        margin: "0 auto",
        marginTop: ".1rem",
    },
};
