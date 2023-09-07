//* Import Link Icons (Font Awesome, React-Icons)
import {
    FaGithub,
    FaFacebook,
    FaYoutube,
    FaCircle,
    FaTwitter,
    FaStackOverflow,
    FaLinkedin,
    FaCalculator,
} from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
// import { CiMobile2 } from "react-icons/ci";
import { ImProfile } from "react-icons/im";
import { PiFileCss } from "react-icons/pi";
import { GiTestTubes, GiPrivateFirstClass } from "react-icons/gi";
//
//
//
//
//

const Links = () => {
    return (
        <section style={style.links_Cont}>
            <a
                style={style.link}
                target='blank'
                title='GitHub'
                href='https://github.com/Hazey8709'
            >
                <FaGithub style={style.github} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='FaceBook'
                href='https://www.facebook.com/people/Noobie-Js/100077721983756/'
            >
                <FaFacebook style={style.facebook} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='YouTube'
                href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
            >
                <FaYoutube style={style.youtube} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='BitDegree'
                href='https://www.bitdegree.org/user/Hazey87/profile'
            >
                <FaCircle style={style.circle} />
            </a>

            <a
                style={style.link}
                target='blank'
                title='LinkedIn'
                href='https://www.linkedin.com/in/jordan-f-97980725b/'
            >
                <FaLinkedin style={style.linkedin} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='Twitter'
                href='https://twitter.com/JordanFortin87'
            >
                <FaTwitter style={style.twitter} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='Stack OverFlow'
                href='https://stackoverflow.com/users/20392612/noobiej?tab=profile'
            >
                <FaStackOverflow style={style.stack} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='Portfolium'
                href='https://portfolium.com/jordanfortin'
            >
                <AiFillProfile style={style.portfolium} />
            </a>

            <a
                style={style.link}
                target='blank'
                title='Todo List'
                href='http://todo-list.noobiej.tech/'
            >
                <FcTodoList style={style.todo} />
            </a>
            <a
                style={style.link}
                target='blank'
                title='Calculator'
                href='https://calculator.noobiej.tech/'
            >
                <FaCalculator style={style.calculator} />
            </a>
            {/* change icon  */}
            <a
                style={style.link}
                target='blank'
                title='Profile Site'
                href='https://noobiej.tech/'
            >
                <ImProfile style={style.profile} />
            </a>
            {/* change icon */}
            <a
                style={style.link}
                target='blank'
                title='CSS Selectors'
                href='https://css-selectors.noobiej.tech/'
            >
                <PiFileCss style={style.cssSelectors} />
            </a>
            {/* change icon */}
            <a
                style={style.link}
                target='blank'
                title='Responsive Viewer'
                href='http://responsiveviewer.noobiej.tech/'
            >
                <GiTestTubes style={style.responsiveViewer} />
            </a>

            <a
                style={style.link}
                target='blank'
                title='First Site Built'
                href='https://spacedoggo.noobiej.tech/'
            >
                <GiPrivateFirstClass style={style.firstWebSite} />
            </a>
        </section>
    );
};

export default Links;

const style = {
    links_Cont: {
        // border: ".1rem solid blue",
        marginTop: ".1rem",
    },

    link: {
        padding: ".2rem",
        fontSize: "28px",

        marginLeft: "2rem",
    },

    github: {
        color: "black",
    },

    facebook: {
        color: "blue",
    },

    youtube: {
        color: "red",
    },

    circle: {
        color: "green",
    },

    linkedin: {
        color: "Blue",
    },

    twitter: {
        color: "lightBlue",
    },

    stack: {
        color: "orange",
    },

    portfolium: {
        color: "Purple",
    },

    todo: {
        color: "plum",
    },

    calculator: {
        color: "lightGreen",
    },

    profile: {
        color: "black",
    },

    cssSelectors: {
        color: "yellow",
    },

    responsiveViewer: {
        color: "teal",
    },

    firstWebSite: {
        color: "coral",
    },
};
