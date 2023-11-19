import React, { useEffect } from "react";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import GroupChatModal from "./GroupChatModal";
import { ChatState } from "../States/ChatProvider";
import { AddIcon } from "@chakra-ui/icons";

const MyChats = () => {
  const { selectedChat, setSelectedChat, chats, setChats } = ChatState();

  useEffect(() => {
    // Simulate fetching chat data
    let chatList = [
      "Family Group Channel",
      "Vijayaragavan",
      "Friends Group Channel",
      "Varun ",
      "Thiru",
      "Sports Group Channel",
      "Bala Krishnan",
      "Vimal Raj",
      "Boopathi Selvan",
      "Surya Kumar",
      "Thamarai Selvan",
      "Vishnu",
      "Vignesh",
      "Jaya Kumar",
      "Gowtham Surya",
    ];
    setChats(chatList);
  }, [setChats]);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Lists
        <GroupChatModal>
          <Button
            d="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
          >
            New Channel
          </Button>
        </GroupChatModal>
      </Box>

      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        <Stack overflowY="scroll">
          {chats.map((chat) => (
            <Box
              onClick={() => setSelectedChat(chat)}
              cursor="pointer"
              bg={selectedChat === chat ? "#702459" : "#E8E8E8"}
              color={selectedChat === chat ? "white" : "black"}
              px={3}
              py={2}
              borderRadius="lg"
              key={chat}
            >
              <Text>{chat}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default MyChats;
