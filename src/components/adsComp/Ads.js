//* Add Card
import AdCard1 from "./AdCard-1";
import AdCard2 from "./AdCard-2";
import AdCard3 from "./AdCard-3";

//* Add Card Images
import imgCard_1 from "../../images/ads/api.jpg";
import imgCard_2 from "../../images/ads/htmlTitle.png";
import imgCard_3 from "../../images/ads/jsTitle.png";
//
//
//
//
const cardLinks = {
    card1_link: "https://github.com/Hazey8709/SPA/tree/main",
    card2_link: "https://github.com/Hazey8709/SPA/tree/DEV",
    card3_link: "https://github.com/Hazey8709/SPA/tree/DEV",
};

const Ads = () => {
    return (
        <aside style={style.ads_Cont}>
            <AdCard1
                imgCard_1={imgCard_1}
                alt='Ad #1'
                titleCard_1="Learn API's"
                hrefLink={cardLinks.card1_link}
                linkName='API'
            />
            <AdCard2
                imgCard_2={imgCard_2}
                alt='Ad #2'
                titleCard_2='Learn HTML'
                hrefLink={cardLinks.card2_link}
                linkName='HTML'
            />
            <AdCard3
                imgCard_3={imgCard_3}
                alt='Ad #3'
                titleCard_3='Learn JS'
                hrefLink={cardLinks.card3_link}
                linkName='JavaScript'
            />
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
