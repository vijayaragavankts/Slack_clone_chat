import React, { useRef, useEffect } from "react";
import avatarImage from "../images/836.jpg";
import { Avatar, Tooltip } from "@chakra-ui/react";

const ScrollableChat = ({ messages, timeStamp }) => {
  const chatContainerRef = useRef();
  const name = "you";

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  function getCurrentTimestampFormatted() {
    const date = new Date();
    return date.toLocaleTimeString(); // Returns a string representation of the date and time
  }
  console.log(timeStamp);
  // Example usage

  return (
    <div
      ref={chatContainerRef}
      style={{
        paddingTop: "80px",
        height: "650px",
        overflowY: "auto",
        paddingRight: "10px",
      }}
    >
      {messages &&
        messages.map((m, i) => (
          <div key={i} style={{ display: "flex" }}>
            {
              <Tooltip label={name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m}
                  src={avatarImage}
                />
              </Tooltip>
            }
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "bold",
                marginTop: "8px",
              }}
            >
              You
            </span>
            <span
              style={{
                marginTop: "8px",
                marginLeft: "10px",
                fontStyle: "italic",
              }}
            >
              {timeStamp[i]}
            </span>
            <span
              style={{
                backgroundColor: "#702459",
                borderRadius: "20px",
                color: "white",
                padding: "5px 15px",
                maxWidth: "75%",
                marginTop: 40,
                marginLeft: -120,
              }}
            >
              {m}
            </span>
          </div>
        ))}
    </div>
  );
};

export default ScrollableChat;
