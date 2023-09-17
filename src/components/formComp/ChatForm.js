import SubmitBtn from "../buttonsComp/SubmitBtn";
//
import card1_img from "../../images/avatars/girlAvatar.png";
import card2_img from "../../images/avatars/guyAvatar.jpg";
import card3_img from "../../images/avatars/monkeyAvatar.png";
//
//
//
//

const ChatForm = (props) => {
    return (
        <form style={style.form_Cont} onSubmit={props.addItem}>
            <section style={style.avatar_Cont}>
                <label htmlFor='avatar' style={style.avatarFormLabel}>
                    Select Avatar:{" "}
                </label>

                {/* // selection of avatars */}
                <select
                    name='avatar'
                    id='avatar'
                    value={props.avatar}
                    onChange={(e) =>
                        props.handleAvatarSelection(e.target.value)
                    }
                    style={style.avatarOptions}
                    title='Choose One!'
                >
                    <option value={card1_img}>Girl Avatar</option>
                    <option value={card2_img}>Guy Avatar</option>
                    <option value={card3_img}>Monkey Avatar</option>
                </select>
            </section>
            <input
                name='Name'
                value={props.Name}
                onChange={props.getInput}
                placeholder='Joe Smith:'
                title='Your Name'
                style={style.inputName}
                required
            />
            <input
                name='Status'
                value={props.Status}
                onChange={props.getInput}
                placeholder='Status: '
                title='Your Status'
                style={style.inputTitle}
                // required
            />
            <textarea
                name='Details'
                value={props.Details}
                onChange={props.getInput}
                placeholder='Details:'
                title='Your Details'
                required
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
        height: "23rem",
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

    avatar_Cont: {
        display: "block",
        // border: ".1rem solid red",
        width: "15rem",
        height: "3rem",
        margin: "0 auto",
        marginTop: ".2rem",
    },

    avatarFormLabel: {
        display: "block",
        textAlign: "center",
        fontWeight: "bold",
    },

    avatarOptions: {
        display: "block",
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "black",
        color: "white",
        margin: "0 auto",
    },
};
