//* Imports
import { Component } from "react";
import ChatForm from "../components/formComp/ChatForm";
import ChatList from "../components/chatComp/ChatList";
import Counter from "../components/chatComp/Counter";
// import MessageInfo from "../components/homeComp/MessageInfo";

//* Images for sList
import card1_img from "../images/avatars/girlAvatar.png";
import card2_img from "../images/avatars/guyAvatar.jpg";
import card3_img from "../images/avatars/monkeyAvatar.png";

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
                img: card1_img,
                alt: "Avatar",
            },
            {
                Name: "Jane Doe",
                Status: "lost....",
                Details: "From the tv show ?",
                img: card2_img,
                alt: "Avatar",
            },
            {
                Name: "Joker Tile",
                Status: "speeding",
                Details: "doing 100 on the highway, get out of my way",
                img: card3_img,
                alt: "Avatar",
            },
        ],
        editIndex: -1, // Initialize it with -1 to indicate no message is being edited
        editedValues: {}, // Empty editing values
        messageCount: 3, // message counter
        avatar: card1_img,
    };

    componentDidMount() {
        // Attempt to retrieve data from local storage
        const storedData = localStorage.getItem("sList");

        if (storedData) {
            try {
                // Parse the stored Data
                const parsedData = JSON.parse(storedData);

                // Update state from local storage
                this.setState({
                    sList: parsedData,
                    messageCount: parsedData.length, // update message count
                });
            } catch (error) {
                console.error("Error parsing data from local storage:", error);
            }
        } else {
            this.setState({
                sList: this.state.sList,
            });
        }
    }

    //* Get Value
    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //* Add Item Plus (Check if exist/ local storage)
    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            Name: this.state.Name,
            Status: this.state.Status,
            Details: this.state.Details,
            img: this.state.avatar, // avatar set URL
        };

        // check if exists
        const itemExist = this.state.sList.some((item) =>
            this.areItemsEqual(item, newItem)
        );

        if (itemExist) {
            alert("This item already exists!");
        } else {
            // Get existing data & add new Item to existing list
            const existingList =
                JSON.parse(localStorage.getItem("sList")) || [];
            existingList.push(newItem);

            // Update local storage with updated list
            localStorage.setItem("sList", JSON.stringify(existingList));

            // Update state and reset form
            this.setState({
                sList: existingList,
                messageCount: existingList.length,
            });
            e.target.reset();
        }
    };

    //* Compare Helper
    areItemsEqual(item1, item2) {
        return (
            item1.Name === item2.Name &&
            item1.Status === item2.Status &&
            item1.Details === item2.Details &&
            item1.img === item2.img
        );
    }

    //* Delete Item
    delItem = (key) => {
        const updatedList = this.state.sList.filter((e, post) => post !== key);

        // Update local Storage
        localStorage.setItem("sList", JSON.stringify(updatedList));

        this.setState({
            sList: updatedList,
            messageCount: updatedList.length, // Update the message count
        });
    };

    //* Enable Edit
    enableEdit = (index) => {
        const editedMessage = this.state.sList[index];
        this.setState({
            editIndex: index,
            editedValues: { ...editedMessage },
        });
    };

    //* Edit Message
    editMessage = (index, field, newValue) => {
        const updatedValues = { ...this.state.editedValues };
        updatedValues[field] = newValue; // Update the property you want to edit
        this.setState({
            editedValues: updatedValues,
        });
    };

    //* Confirm Edit
    confirmEdit = (index) => {
        const updatedList = [...this.state.sList];
        updatedList[index] = { ...this.state.editedValues };

        //
        localStorage.setItem("sList", JSON.stringify(updatedList));

        this.setState({
            sList: updatedList,
            editIndex: -1,
            editedValues: {},
        });
    };

    //* Cancel Edit
    cancelEdit = () => {
        this.setState({
            editIndex: -1,
            editedValues: {},
        });
    };

    render() {
        let comList = this.state.sList.map((e, i) => {
            return (
                <ChatList
                    key={i}
                    index={i}
                    val={e}
                    editItem={this.enableEdit}
                    editIndex={this.state.editIndex}
                    editedValues={this.state.editedValues}
                    editMessage={this.editMessage}
                    confirmEdit={this.confirmEdit}
                    cancelEdit={this.cancelEdit}
                    delItem={() => this.delItem(i)}
                />
            );
        });

        return (
            <main style={style.main_Cont}>
                <ChatForm
                    getInput={this.getInput}
                    addItem={this.addItem}
                    avatar={this.state.avatar}
                />
                <div style={style.chatBox_Cont}>{comList}</div>
                <Counter messageCount={this.state.messageCount} />
                {/* <div style={style.messageCounter_Cont}>
                    Number of Messages: {this.state.messageCount}
                </div> */}
                {/* <MessageInfo messageCount={this.state.messageCount} /> */}
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

    // messageCounter_Cont: {
    //     display: "flex",
    //     position: "absolute",
    //     border: ".1rem solid black",
    //     borderRadius: ".2rem",
    //     backgroundColor: "black",
    //     color: "white",
    //     bottom: 0,
    //     padding: ".2rem",
    //     marginLeft: "45rem",
    //     marginBottom: ".8rem",
    // },
};
