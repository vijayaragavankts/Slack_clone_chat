import { Box, Text } from "@chakra-ui/react";
import { ChatState } from "../States/ChatProvider";
import React from "react";
import SingleChat from "./SingleChat";

const BoxChats = () => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat />
    </Box>
  );
};

export default BoxChats;
