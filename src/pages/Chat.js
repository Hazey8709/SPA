import React, { Component } from "react";
import ChatForm from "../components/formComp/ChatForm";
import ChatList from "../components/chatComp/ChatList";

//
//
//
//

class Chat extends Component {
    state = {
        sList: [
            {
                Name: "Debra Gens",
                Status: "Feeling sick..",
                Details: "Woke up with a cold yikes!",
                // Img: girlAvatar,
                Alt: "comment #24375",
            },
            {
                Name: "Jane Doe",
                Status: "lost....",
                Details: "From the tv show ?",
                // Img: girlAvatar,
                Alt: "comment #2656557",
            },
            {
                Name: "Joker Tile",
                Status: "speeding",
                Details: "doing 100 on the high get out of my way",
                // Img: girlAvatar,
                Alt: "comment #2435354",
            },
        ],
    };

    //* Get Value
    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //* Add Item
    addItem = (e) => {
        e.preventDefault();
        this.setState({
            sList: [
                ...this.state.sList,
                {
                    Name: this.state.Name,
                    Status: this.state.Status,
                    Details: this.state.Details,
                    Img: this.state.Img,
                },
            ],
        });
        e.target.reset();
    };

    //* Delete Item
    delItem = (key) => {
        const updatedList = this.state.sList.filter((e, post) => post !== key);
        this.setState({ sList: updatedList });
    };

    //* Render
    render() {
        let comList = this.state.sList.map((e, i) => {
            return <ChatList key={i} val={e} detItem={() => this.delItem(i)} />;
        });

        return (
            <main style={style.main_Cont}>
                <ChatForm getInput={this.getInput} addItem={this.addItem} />
                <div style={style.chatBox_Cont}>{comList}</div>
            </main>
        );
    }
}

export default Chat;

const style = {
    main_Cont: {
        display: "flex",
        position: "absolute",
        border: ".1rem solid white",
        backgroundColor: "white",
        width: "70.9rem",
        height: "50.3rem",
        // marginTop: ".1rem",
        marginLeft: ".1rem",
    },

    chatBox_Cont: {
        display: "block",
        // position: "fixed",
        border: ".1rem solid white",
        borderRadius: ".3rem",
        backgroundColor: "#0005",
        width: "40rem",
        height: "45rem",
        marginTop: "2rem",
        marginLeft: "4rem",
        overflowX: "auto",
        boxShadow: "1px 1px 10px black",
    },
};
