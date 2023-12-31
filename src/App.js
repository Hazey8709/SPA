//* Router
import { Route, Routes } from "react-router-dom";

//* Imports
import Nav from "../src/components/navComp/Nav";
import Header from "./components/headerComp/Header";
import Ads from "./components/adsComp/Ads";

//* Pages
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
//
import { AvatarProvider } from "./context/AvatarContext";
//
//

function App() {
    return (
        <div style={style.frame_Cont}>
            <AvatarProvider>
                <Nav />
                <Header />
                <Ads />

                <main style={style.main_Cont}>
                    {/*  Main Content */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='Home' element={<Home />} />
                        <Route path='Chat' element={<Chat />} />
                        <Route path='Friends' element={<Friends />} />
                        <Route path='Profile' element={<Profile />} />
                    </Routes>
                </main>
            </AvatarProvider>
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
