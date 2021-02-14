import * as React from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  Spacer,
  useDisclosure
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./Drawer";

const Layout: React.FC = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<null | any>(null);
  return (
    <Box>
      <Flex w="90%" mx="auto" align="center" pt={4}>
        <Heading bgGradient="linear(to-l,green.400,blue.400)" bgClip="text">
          BlogBase
        </Heading>
        <Spacer />
        <Button
          fontSize="4xl"
          variant="ghost"
          ref={btnRef}
          onClick={onOpen}
          cursor="pointer"
        >
          <GiHamburgerMenu />
        </Button>
        <SideBar btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Box w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
