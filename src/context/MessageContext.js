import React, { createContext, useContext, useState, useEffect } from "react";

const MessageContext = createContext();

export function useMessageContext() {
    return useContext(MessageContext);
}

export function MessageProvider({ children }) {
    //
    // Initialize messageCount from localStorage or default to 3
    const [messageCount, setMessageCount] = useState(() => {
        const storedMessageCount = localStorage.getItem("messageCount");
        return storedMessageCount ? parseInt(storedMessageCount) : 3;
    });

    // Update localStorage whenever messageCount changes
    useEffect(() => {
        localStorage.setItem("messageCount", messageCount.toString());
    }, [messageCount]);

    return (
        <MessageContext.Provider value={{ messageCount, setMessageCount }}>
            {children}
        </MessageContext.Provider>
    );
}
