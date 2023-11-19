import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatState } from "../States/ChatProvider";

const GroupChatModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [groupChatName, setGroupChatName] = useState("");
  let [description, setDescription] = useState("");

  const toast = useToast();

  const { chats, setChats } = ChatState();
  const handleSubmit = async () => {
    if (!groupChatName || !description) {
      toast({
        title: "Please fill all the fields",
        status: "warning",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      return;
    } else {
      toast({
        title: "Channel created successfully",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      onClose();
      console.log(groupChatName);
      console.log(description);
      setChats([groupChatName, ...chats]);
      setGroupChatName("");
      setDescription("");
      return;
    }
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            Create Channel
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" flexDir="column">
            <FormControl>
              <Input
                placeholder="Channel Name"
                mb={3}
                onChange={(e) => setGroupChatName(e.target.value)}
              ></Input>
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add Description "
                mb={3}
                onChange={(e) => setDescription(e.target.value)}
              ></Input>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Create Channel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupChatModal;
