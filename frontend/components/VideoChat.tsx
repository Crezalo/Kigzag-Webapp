import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { Picker } from "emoji-mart";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import socket from "../socket";
import { shortenHex } from "../util";

interface VideoChatProp {
  display: boolean;
  roomId: string;
}

const VideoChat = ({ display, roomId }: VideoChatProp) => {
  const { account, library } = useWeb3React();
  const currentUser = account;
  const [showEmoji, setShowEmoji] = useState(false);
  const [msg, setMsg] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    socket.on("FE-receive-message", ({ msg, sender }) => {
      setMsg((msgs) => [...msgs, { sender, msg }]);
    });
  }, []);

  // Scroll to Bottom of Message List
  useEffect(() => {
    scrollToBottom();
  }, [msg]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = (e) => {
    if (e.key === "Enter") {
      const msg = e.target.value;
      console.log("sendMessage");

      if (msg) {
        socket.emit("BE-send-message", { roomId, msg, sender: currentUser });
        inputRef.current.value = "";
      }
    }
  };

  const handleEmojiShow = () => {
    setShowEmoji((v) => !v);
  };

  const handleEmojiSelect = (e) => {
    inputRef.current.value += e.native;
  };

  return (
    <ChatContainer className={display ? "" : "width0"}>
      <TopHeader>Group Chat Room</TopHeader>
      <ChatArea>
        <MessageList>
          {msg &&
            msg.map(({ sender, msg }, idx) => {
              if (sender !== currentUser) {
                return (
                  <Message key={idx}>
                    <strong>{shortenHex(sender, 4)}</strong>
                    <p>{msg}</p>
                  </Message>
                );
              } else {
                return (
                  <UserMessage key={idx}>
                    <strong>{shortenHex(sender, 4)}</strong>
                    <p>{msg}</p>
                  </UserMessage>
                );
              }
            })}
          <div style={{ float: "left", clear: "both" }} ref={messagesEndRef} />
        </MessageList>
      </ChatArea>
      <div>
        <FontAwesomeIcon
          onClick={handleEmojiShow}
          className="fas"
          icon="smile"
          style={{
            color: "#4ea1d3",
            padding: "5px 5px 0 5px",
          }}
        />
        {showEmoji && (
          <Picker
            style={{ width: "100%" }}
            onSelect={handleEmojiSelect}
            emojiSize={30}
            theme={"dark"}
            set={"twitter"} // can be google, facebook, apple, twitter or all
            title="Pick an emoji"
          />
        )}
        <BottomInput
          ref={inputRef}
          onKeyUp={sendMessage}
          placeholder="Enter your message"
        />
      </div>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  hieght: 100%;
  background-color: #2d2d30;
  transition: all 0.5s ease;
  overflow: hidden;
  justify-content: center;
  border-radius: 0.5rem;
`;

const TopHeader = styled.div`
  width: 100%;
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  color: black;
  text-align: center;
  color: #3b82f6;
`;

const ChatArea = styled.div`
  width: 100%;
  height: 83%;
  max-height: 83%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MessageList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  color: #454552;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 15px;
  text-align: left;

  > strong {
    color: #cbccd6;
    margin-left: 3px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    box-shadow: 0px 0px 3px #4ea1d3;
    font-size: 18px;
    overflow-y: visible;
  }
`;

const UserMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  font-size: 16px;
  margin-top: 15px;
  text-align: right;

  > strong {
    color: #cbccd6;
    margin-right: 25px;
  }

  > p {
    max-width: 65%;
    width: auto;
    padding: 9px;
    margin-top: 3px;
    margin-right: 20px;
    border: 1px solid rgb(78, 161, 211, 0.3);
    border-radius: 15px;
    background-color: #4ea1d3;
    color: white;
    font-size: 18px;
    text-align: left;
  }
`;

const BottomInput = styled.textarea`
  bottom: 0;
  width: 100%;
  font-size: 18px;
  color: black;
  background-color: white;
  padding: 5px 5px 5px 5px;
  border: 1px solid rgb(69, 69, 82, 0.25);
  box-sizing: border-box;
  border-radius: 0.5rem;
  overflow-y: visible;

  :focus {
    outline: none;
  }
`;

export default VideoChat;
