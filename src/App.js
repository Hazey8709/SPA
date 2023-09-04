import { Route, Routes } from "react-router-dom";
import Nav from "../src/components/navComp/Nav";
import Header from "./components/headerComp/Header";
import Ads from "./components/adsComp/Ads";
import Chat from "./pages/Chat";

function App() {
    return (
        <div style={style.frame_Cont}>
            <Nav />
            <Header />
            <Ads />
{/* add */}
            <main style={style.main_Cont}>
                {/* Main Content */}
                <Routes>
                    {/* <Route path='/' element={<Chat />} /> */}
                    <Route path='/Chat' element={<Chat />} />
                    {/* <Route path='Friends' element={<Friends />} /> */}
                    {/* <Route path='Profile' element={<Profile />} /> */}
                </Routes>
            </main>
        </div>
    );
}

export default App;

const style = {
    frame_Cont: {
        display: "flex",
        // border: ".1rem solid red",
        flexDirection: "row",
        height: "100%",
        width: "100%",
    },

    main_Cont: {
        display: "inline-block",
        position: "absolute",
        // border: ".1rem solid violet",
        height: "50.2rem",
        width: "66.5%",
        marginTop: "10.1rem",
        marginLeft: "18.1rem",
    },
};
