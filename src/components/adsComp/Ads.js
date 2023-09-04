import AdCard1 from "./AdCard-1";
import AdCard2 from "./AdCard-2";
import AdCard3 from "./AdCard-3";

//
//
//
//

const Ads = () => {
    return (
        <aside style={style.ads_Cont}>
            <AdCard1 titleCard_1="Learn API's" />
            <AdCard2 titleCard_2='Learn HTML' />
            <AdCard3 titleCard_3='Learn JS' />
        </aside>
    );
};

export default Ads;

const style = {
    ads_Cont: {
        display: "",
        flexDirection: "column",
        // border: ".1rem solid teal",
        backgroundColor: "#0005",
        width: "20rem",
        height: "100vh",
    },
};
