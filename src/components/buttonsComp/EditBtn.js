import { FaEdit } from "react-icons/fa";
//
//
//
//

const EditBtn = (props) => {
    return (
        <button onClick={props.onClick} title='Edit Post' style={style.editBtn}>
            <FaEdit />
        </button>
    );
};

export default EditBtn;

const style = {
    editBtn: {
        border: ".2rem solid darkGreen",
        borderRadius: ".3rem",
        backgroundColor: "#c8face",
        color: "darkGreen",
        marginLeft: "6.8rem",
        width: "3rem",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
