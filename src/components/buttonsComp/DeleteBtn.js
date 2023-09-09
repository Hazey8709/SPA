import { FaTrash } from "react-icons/fa";
//
//
//
//
//

const DeleteBtn = (props) => {
    return (
        <button
            onClick={props.onClick}
            title='Delete Post'
            style={style.delBtn}
        >
            <FaTrash style={style.Fatrash} />
        </button>
    );
};

export default DeleteBtn;

const style = {
    delBtn: {
        border: ".2rem solid darkRed",
        borderRadius: ".3rem",
        backgroundColor: "#f5b7b1",
        width: "3rem",
        marginLeft: "10rem",
        // marginRight: "3rem",
        color: "red",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
