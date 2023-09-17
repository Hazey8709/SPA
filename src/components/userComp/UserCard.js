//
//* Imports
// import EditBtn from "../buttonsComp/EditBtn";

//
//
//

const UserCard = (props) => {
    return (
        <div style={style.user_Cont}>
            <img src={props.avatar} style={style.avatar} alt='Person Avatar' />

            <h2 style={style.friendName}>
                {props.fName} {props.lName}
            </h2>

            <p style={style.info1}>
                <span style={style.span}>{props.streetNum} </span>
                <span style={style.span}> {props.street}</span>
                <br />
                <span style={style.span}>{props.city} </span>
                <span style={style.span}> {props.state}</span>
                <span style={style.span}> {props.zipcode}</span>
                <br />
                <span style={style.span}>{props.phone}</span>
            </p>

            <p style={style.info2}>
                <span style={style.span}>{props.age},</span>
                <span style={style.span}> {props.gender.toUpperCase()}</span>
                <br />
            </p>

            <p style={style.info3}>
                <span style={style.span}>{props.DOB}</span>
                <br />
                <span style={style.span}>{props.username}</span>
                <br />
                <span style={style.span}>{props.email}</span>
            </p>

            <p style={style.info4}>
                <br />

                <br />
            </p>

            {/* <EditBtn onClick={props.editItem} /> */}
        </div>
    );
};

export default UserCard;

const style = {
    user_Cont: {
        display: "inline-block",
        // position: "relative",
        border: ".1rem solid white",
        borderRadius: ".5rem",
        backgroundColor: "white",
        width: "25rem",
        height: "25rem",
        marginLeft: "3.2rem",
        marginTop: "1.5rem",
        boxShadow: "1px 1px 10px white",
    },

    avatar: {
        borderRadius: ".3rem",
        width: "100px",
        marginLeft: ".5rem",
        marginTop: ".5rem",
    },

    friendName: {
        display: "inline-block",
        // position: "relative",
        marginTop: "1rem",
        marginLeft: "1rem",
        // marginBottom: "1rem",
        fontSize: "32px",
        color: "white",
        textShadow: "1px 1px 10px black",
    },

    info1: {
        // border: ".1rem solid black",
        width: "17rem",
        marginLeft: "1rem",
        padding: ".2rem",
    },

    info2: {
        // border: ".1rem solid black",
        width: "15rem",
        marginLeft: "1rem",
        padding: ".2rem",
    },

    info3: {
        // border: ".1rem solid black",
        width: "18rem",
        marginLeft: "1rem",
        padding: ".2rem",
    },

    info4: {},
};
