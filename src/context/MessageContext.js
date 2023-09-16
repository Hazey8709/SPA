import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export function useMessageContext() {
    return useContext(MessageContext);
}

export function MessageProvider({ children }) {
    const [messageCount, setMessageCount] = useState(3);

    return (
        <MessageContext.Provider value={{ messageCount, setMessageCount }}>
            {children}
        </MessageContext.Provider>
    );
}
