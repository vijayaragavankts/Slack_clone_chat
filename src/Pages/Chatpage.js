import React, { useState } from "react";
import SideMenu from "../Components/SideMenu";
import { Box } from "@chakra-ui/react";
import MyChats from "../Components/MyChats";

// import { ChatState } from "../States/ChatProvider";
import BoxChats from "../Components/BoxChats";

const Chatpage = () => {
  // const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {<SideMenu />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {<MyChats fetchAgain={fetchAgain} />}
        {<BoxChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </Box>
    </div>
  );
};

export default Chatpage;
