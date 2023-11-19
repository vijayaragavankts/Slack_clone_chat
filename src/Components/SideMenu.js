import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "./UserList";
import { ChatState } from "../States/ChatProvider";

const data = [
  "Vijay",
  "John",
  "Kumar",
  "Joseph",
  "Miller",
  "Morgan",
  "Duminy",
  "Lisa",
  "Adam",
  "Ajay",
  "Ashok",
  "Bala",
  "Baskar",
  "Chandhru",
  "Chinraj",
  "Dheena",
  "Deva",
  "Fathima",
  "Elango",
  "Elan",
  "Francis",
  "Govind",
  "Gopal",
  "Hari",
  "Harold",
  "India",
  "Imma",
  "Jack",
  "Jhonny",
  "Kane",
  "Kavi",
  "Lenin",
  "Livingstone",
  "Deepika",
  "Ragina",
  "Varun",
];

const SideMenu = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSelectedChat, chats, setChats } = ChatState();
  const navigate = useNavigate();
  const logoutHandler = () => {
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
    navigate("/");
  };

  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    // searching which string matches with the entered string
    const info = data.filter((element) => {
      if (element.toLowerCase().includes(search.toLowerCase())) {
        // console.log(element);
        return element;
      }
    });
    //console.log(info);
    setSearchResult(info);
    console.log(searchResult);
  };

  const accessChat = async (user) => {
    const data = user;

    setChats([data, ...chats]);

    setSelectedChat(data);

    onClose();
  };

  return (
    <>
      <Box>
        <Flex
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          w="100%"
          p="5px 10px 5px 10px"
          borderWidth="5px"
        >
          <Tooltip label="Search User to chat" hasArrow placement="bottom-end">
            <Button variant="ghost" onClick={onOpen} leftIcon={<SearchIcon />}>
              <i>{}</i>
              <Text display={{ base: "none", md: "flex" }} px="4">
                Search User
              </Text>
            </Button>
          </Tooltip>
          <Text fontSize="2xl" fontFamily="Work sans">
            Slack Messenger
          </Text>

          <div>
            <Menu>
              <MenuButton p={1}>
                <BellIcon fontSize="2xl" m={1} />
              </MenuButton>
              <MenuButton
                as={Button}
                onClick={logoutHandler}
                style={{
                  color: "white",
                  backgroundColor: "#702459",
                }}
              >
                Logout
              </MenuButton>
            </Menu>
          </div>
        </Flex>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {searchResult?.map((user) => (
              <UserList user={user} handleFunction={() => accessChat(user)} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideMenu;
