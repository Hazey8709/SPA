import EditBtn from "../buttonsComp/EditBtn";
import DeleteBtn from "../buttonsComp/DeleteBtn";
//
//
//
//

const ChatList = (props) => {
    return (
        <article key={props.id} style={style.message_Cont}>
            <img src={props.val.Img} style={style.Img} alt={props.val.cAlt} />
            <h1 style={style.Name}>{props.val.Name}</h1>
            <h3 style={style.Status}>{props.val.Status}</h3>

            <p style={style.Details}>{props.val.Details}</p>
            <div style={style.btn_Cont}>
                <EditBtn onClick={props.editItem} />
                <DeleteBtn onClick={props.delItem} />
            </div>
        </article>
    );
};

export default ChatList;

const style = {
    message_Cont: {
        border: ".2rem inset black",
        borderRadius: ".3rem",
        backgroundColor: "white",
        width: "35rem",
        height: "30rem",
        margin: "0 auto",
        marginTop: "2rem",
        marginBottom: "1rem",
        boxShadow: "1px 1px 10px white",
    },

    Img: {
        border: ".2rem solid black",
        borderRadius: "3rem",
        width: "8rem",
        height: "8rem",
        marginTop: "1rem",
        marginLeft: "1rem",
    },

    Name: {
        // border: ".2rem inset black",
        borderRadius: ".3rem",
        marginLeft: ".2rem",
        textDecoration: "underline",
    },

    Status: {
        // border: ".2rem inset black",
        borderRadius: ".3rem",
        marginTop: "0",
        marginLeft: ".5rem",
    },

    Details: {
        border: ".2rem inset black",
        borderRadius: ".3rem",
        width: "30rem",
        height: "10rem",
        margin: "0 auto",
        textIndent: "1rem",
        textWrap: "wrap",
    },

    btn_Cont: {
        display: "flex",
        // border: ".2rem inset black",
        borderRadius: ".3rem",
        width: "30rem",
        margin: "0 auto",
        marginTop: "1rem",
    },
};