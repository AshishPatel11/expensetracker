import React from 'react'
import { PrettyChatWindow } from "react-chat-engine-pretty";
import { ChatEngine } from 'react-chat-engine'
import Nav from '../Nav'
const ChatComp = (props) => {
    return (
        <>
            <div className="NavBar">
                <Nav />
            </div>
            <div style={{ height: '100vh', width: '90vw', marginLeft: '11vw' }}>
                <PrettyChatWindow
                    projectId={"9f774ec5-5c39-45fa-8311-52331b0e0c12"}
                    username={props.user.username}
                    secret={props.user.secret}
                    style={{ height: '100%' }}
                />
            </div>
            {/* <ChatEngine
                publicKey={'9f774ec5-5c39-45fa-8311-52331b0e0c12'}
                userName={props.user.username}
                userSecret={props.user.username}
            /> */}
        </>
    )
}

export default ChatComp
