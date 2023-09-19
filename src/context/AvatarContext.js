import React, { createContext, useContext, useState } from "react";

const AvatarContext = createContext();

export function AvatarProvider({ children }) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [userName, setUserName] = useState(" ");

    return (
        <AvatarContext.Provider
            value={{
                avatarUrl,
                setAvatarUrl,
                userName,
                setUserName,
            }}
        >
            {children}
        </AvatarContext.Provider>
    );
}

export function useAvatar() {
    return useContext(AvatarContext);
}
