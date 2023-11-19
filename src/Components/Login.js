import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [show, setShow] = useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);
  const history = useNavigate();

  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        duration: 4000,
        status: "warning",
        isClosable: true,
        position: "bottom",
      });
      return;
    } else {
      history("/chatting");
      toast({
        title: "Login Successful",
        duration: 4000,
        status: "success",
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel> Email </FormLabel>{" "}
        <Input
          placeholder="Enter Your Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></Input>
      </FormControl>{" "}
      <FormControl id="password" isRequired>
        <FormLabel> Password </FormLabel>{" "}
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          ></Input>{" "}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {" "}
              {show ? "Hide" : "show"}{" "}
            </Button>{" "}
          </InputRightElement>{" "}
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="pink"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        // isLoading={loading}
      >
        Login{" "}
      </Button>{" "}
      
    </VStack>
  );
};
export default Login;
