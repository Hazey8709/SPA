//* Imports
import { useState, useEffect } from "react";
import { useMessageContext } from "../context/MessageContext";
import ChatForm from "../components/formComp/ChatForm";
import ChatList from "../components/chatComp/ChatList";

//* For Class Component
//import React, { Component } from "react";

//* Images for sList
import card1_img from "../images/avatars/girlAvatar.png";
import card2_img from "../images/avatars/guyAvatar.jpg";
import card3_img from "../images/avatars/monkeyAvatar.png";

//
//
//
//

//! Functional Component with Hooks
const Chat = () => {
    const [sList, setSList] = useState([
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
    ]);

    //* State Management
    const [editIndex, setEditIndex] = useState(-1);
    const [editedValues, setEditedValues] = useState({});
    const { messageCount, setMessageCount } = useMessageContext();

    const [selectedAvatar, setSelectedAvatar] = useState(card1_img);

    useEffect(() => {
        // Attempt to retrieve data from local storage
        const storedData = localStorage.getItem("sList");

        if (storedData) {
            try {
                // Parse the stored Data
                const parsedData = JSON.parse(storedData);

                // Update state from local storage
                setSList(parsedData);
                setMessageCount(parsedData.length);
            } catch (error) {
                console.error("Error parsing data from local storage:", error);
            }
        }
    }, [setMessageCount]); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    //* Get Value
    const getInput = (e) => {
        setEditedValues({
            ...editedValues,
            [e.target.name]: e.target.value,
        });
    };

    //* Avatar
    const handleAvatarSelection = (newAvatar) => {
        setSelectedAvatar(newAvatar);
    };

    //* Add Item Plus (Check if exist/ local storage)
    const addItem = (e) => {
        e.preventDefault();

        const newItem = {
            Name: editedValues.Name,
            Status: editedValues.Status,
            Details: editedValues.Details,
            img: selectedAvatar, // avatar set URL
        };

        // check if exists
        const itemExist = sList.some((item) => areItemsEqual(item, newItem));

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
            setSList(existingList);
            setMessageCount(existingList.length);
            e.target.reset();
        }
    };

    //* Compare Helper
    const areItemsEqual = (item1, item2) => {
        return (
            item1.Name === item2.Name &&
            item1.Status === item2.Status &&
            item1.Details === item2.Details &&
            item1.img === item2.img
        );
    };

    //* Delete Item
    const delItem = (key) => {
        const updatedList = sList.filter((e, post) => post !== key);

        // Update local Storage
        localStorage.setItem("sList", JSON.stringify(updatedList));

        setSList(updatedList);
        setMessageCount(updatedList.length);
    };

    //* Enable Edit
    const enableEdit = (index) => {
        const editedMessage = sList[index];
        setEditIndex(index);
        setEditedValues({ ...editedMessage });
    };

    //* Edit Message
    const editMessage = (index, field, newValue) => {
        const updatedValues = { ...editedValues };
        updatedValues[field] = newValue; // Update the property you want to edit
        setEditedValues(updatedValues);
    };

    //* Confirm Edit
    const confirmEdit = (index) => {
        const updatedList = [...sList];
        updatedList[index] = { ...editedValues };

        // Update local Storage
        localStorage.setItem("sList", JSON.stringify(updatedList));

        setSList(updatedList);
        setEditIndex(-1);
        setEditedValues({});
    };

    //* Cancel Edit
    const cancelEdit = () => {
        setEditIndex(-1);
        setEditedValues({});
    };

    let comList = sList.map((e, i) => (
        <ChatList
            key={i}
            index={i}
            val={e}
            editItem={enableEdit}
            editIndex={editIndex}
            editedValues={editedValues}
            editMessage={editMessage}
            confirmEdit={confirmEdit}
            cancelEdit={cancelEdit}
            delItem={() => delItem(i)}
        />
    ));

    return (
        <main style={style.main_Cont}>
            <ChatForm
                getInput={getInput}
                addItem={addItem}
                avatar={selectedAvatar}
                handleAvatarSelection={handleAvatarSelection}
            />
            <div style={style.chatBox_Cont}>{comList}</div>

            <div style={style.messageCounter_Cont}>
                Number of Messages: {messageCount}
            </div>
        </main>
    );
};

export default Chat;

//
//

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

    messageCounter_Cont: {
        display: "flex",
        position: "absolute",
        border: ".1rem solid black",
        borderRadius: ".2rem",
        backgroundColor: "black",
        color: "white",
        bottom: 0,
        padding: ".2rem",
        marginLeft: "45rem",
        marginBottom: ".8rem",
    },
};
