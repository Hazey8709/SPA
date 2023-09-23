//* Imports
import MessageInfo from "../components/homeComp/MessageInfo";
import Stocks from "../components/homeComp/Stocks";

//
//
//
//

const Home = () => {
    return (
        <main style={style.homeMain_Cont}>
            <MessageInfo />

            <div>
                <Stocks />
            </div>
        </main>
    );
};

export default Home;

const style = {
    homeMain_Cont: {
        display: "flex",
        border: ".1rem solid red",
        width: "71rem",
        height: "50.3rem",
        marginLeft: ".1rem",
    },
};
