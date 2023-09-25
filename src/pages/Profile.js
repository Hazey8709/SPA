//
//*
import React, { useState, useEffect } from "react";
//* Imports
import UserCard from "../components/userComp/UserCard";
import { useAvatar } from "../context/AvatarContext";
//
//

const Profile = () => {
    //*  State
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showWarning, setShowWarning] = useState(false);

    // Get the avatar from the context
    const { setAvatarUrl, setUserName } = useAvatar();

    //* useEffect Async Fetch
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/1.4/");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                // Data
                const data = await response.json();
                const users = data.results;

                // Log
                console.log(users);

                setAvatarUrl(users.length > 0 ? users[0].picture.medium : null);

                // Inside your fetchData function
                setUserName(
                    users.length > 0
                        ? `${users[0].name.first} ${users[0].name.last}`
                        : ""
                );

                setUserData(users);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                // Log
                console.log(error);
            }
        };

        // No Data timeout for 1 minute (1000 milliseconds)
        if (userData.length === 0) {
            const timeoutId = setTimeout(() => {
                setShowWarning(true);
                setLoading(false);
            }, 1 * 60 * 1000);

            fetchData();

            return () => {
                // Clear the timeout if the component unmounts
                clearTimeout(timeoutId);
            };
        }
    }, [setAvatarUrl, setUserName, userData]);

    //* Error Handler
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    //* Warning Handler
    if (showWarning) {
        // Log
        console.log("showWarning: ", showWarning);
        return (
            <p style={style.warningStyle}>
                Loading took too long. Please Check Source! (API).
            </p>
        );
    }

    //* Loading Handler
    if (loading) {
        return <p style={style.loadingStyle}>Loading...</p>;
    }

    return (
        <main style={style.profileMain_Cont}>
            <h1 style={style.pageTitle}>Profile</h1>
            <section style={style.card_Cont}>
                {userData.map((user, index) => (
                    <UserCard
                        style={style.userCard}
                        key={index}
                        avatar={user.picture.medium}
                        fName={user.name.first}
                        lName={user.name.last}
                        street={user.location.street.name}
                        streetNum={user.location.street.number}
                        city={user.location.city}
                        state={user.location.state}
                        zipcode={user.location.postcode}
                        phone={user.phone}
                        gender={user.gender}
                        DOB={user.dob.date}
                        age={user.dob.age}
                        email={user.email}
                        username={user.login.username}
                        editItem={() => {
                            // Handle edit action for this user if needed
                        }}
                    />
                ))}
            </section>
        </main>
    );
};

export default Profile;

const style = {
    profileMain_Cont: {
        border: ".1rem solid white",
        width: "71rem",
        height: "50.3rem",
        marginLeft: ".1rem",
    },

    pageTitle: {
        display: "block",
        // position: "absolute",
        // border: ".1rem solid red",
        // backgroundColor: "lightblue",
        width: "20rem",
        height: "3.2rem",
        margin: "0 auto",
        marginTop: "1.5rem",
        textAlign: "center",
        fontSize: "42px",
        padding: ".5rem",
    },

    card_Cont: {
        border: ".1rem solid black",
        borderRadius: ".3rem",
        backgroundColor: "gray",
        width: "32rem",
        height: "30rem",
        margin: "0 auto",
        marginTop: "3rem",
        boxShadow: "0 0 10px black",
    },

    loadingStyle: {
        marginTop: "10rem",
        marginLeft: "30rem",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "red",
    },

    warningStyle: {
        // marginTop: "10rem",
        // marginLeft: "20rem",
        textAlign: "center",
        fontSize: "3rem",
        fontWeight: "bold",
        color: "red",
    },
};
