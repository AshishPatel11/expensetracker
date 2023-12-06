import React, { useState } from 'react'
import ChatComp from './ChatComp'
import AuthPage from './AuthPage'
const ChatPage = (props) => {
    const [user, setUser] = useState(undefined);

    if (!user) {
        return <AuthPage onAuth={(user) => setUser(user)} />;
    } else {
        return <ChatComp user={user} />;
    }
}

export default ChatPage
