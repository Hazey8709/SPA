//* State:
import React, { useState, useEffect } from "react";

//* Imports
import UserCard from "../components/userComp/UserCard";
//
//
//
//

const Friends = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchApi() {
            try {
                const response = await fetch(
                    "https://randomuser.me/api/1.4/?results=20"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const users = data.results;
                console.log(users);

                setUserData(users);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchApi();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <main style={style.friendsMain_Cont}>
            <h1 style={style.pageTitle}>Friends</h1>
            <div style={style.friends_Cont}>
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
                        email={user.email}
                        phone={user.phone}
                        gender={user.gender}
                        username={user.login.username}
                        DOB={user.dob.date} // convert date to normal format
                        age={user.dob.age}
                        editItem={() => {
                            // Handle edit action for this user if needed
                        }}
                    />
                ))}
            </div>
        </main>
    );
};

export default Friends;

const style = {
    friendsMain_Cont: {
        display: "block",
        // position: "absolute",
        border: ".1rem solid red",
        // backgroundColor: "lightblue",
        width: "71rem",
        height: "50.3rem",

        marginLeft: ".1rem",
    },

    pageTitle: {
        display: "block",
        // position: "absolute",
        // border: ".1rem solid red",
        // backgroundColor: "lightblue",
        width: "71rem",
        height: "3.2rem",
        margin: "0 auto",
        marginTop: "1.5rem",
        textAlign: "center",
        fontSize: "42px",
        padding: ".5rem",
    },

    friends_Cont: {
        display: "block",
        border: ".3rem inset black",
        // borderRadius: ".5rem",
        backgroundColor: "gray",
        width: "60rem",
        height: "43rem",
        margin: "0 auto",
        overFlow: "hidden",
        overflowY: "scroll",
    },
};
