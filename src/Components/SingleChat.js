import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatState } from "../States/ChatProvider";
import { ArrowBackIcon } from "@chakra-ui/icons";
import ScrollableChat from "./ScrollableChat";

const SingleChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();
  const toast = useToast();
  const { user, selectedChat, setSelectedChat } = ChatState();
  const [timeStamp, setTimeStamps] = useState([]);

  useEffect(() => {
    setMessages([...messages, newMessage]);
  }, [setMessages]);

  useEffect(() => {
    setMessages([]);
  }, [selectedChat]);

  const typingHandler = (e) => {
    setNewMessage(e.target.value);
  };

  const handleClick = () => {
    if (!newMessage) {
      toast({
        title: "Please Enter something",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    setMessages([...messages, newMessage]);
    setNewMessage("");
    const currentTimeStamp = getCurrentTimeFormatted();
    setTimeStamps([...timeStamp, currentTimeStamp]);
    console.log(timeStamp);
  };

  function getCurrentTimeFormatted() {
    const date = new Date();
    return date.toLocaleTimeString(); // Returns a string representation of the time
  }

  console.log(messages);
  console.log(timeStamp);
  return (
    <>
      {selectedChat ? (
        <>
          <Box
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />

            {selectedChat.toUpperCase()}
          </Box>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            <div className="messages">
              <ScrollableChat messages={messages} timeStamp={timeStamp} />
            </div>
            {/* {<div className="messages">{messages}</div>} */}
            <FormControl isRequired mt={3}>
              <InputGroup colorScheme="red">
                <Input
                  variant="filled"
                  bg="#E0E0E0"
                  placeholder="Enter a message..."
                  onChange={typingHandler}
                  value={newMessage}
                />
                <Button
                  onClick={handleClick}
                  style={{
                    backgroundColor: "#702459",
                    color: "white",
                    marginLeft: "5px",
                  }}
                >
                  Send
                </Button>
              </InputGroup>
            </FormControl>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
