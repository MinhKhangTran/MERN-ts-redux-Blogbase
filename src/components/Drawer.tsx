import * as React from "react";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = ({
  isOpen,
  onClose,
  btnRef
}: {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menü</DrawerHeader>
          <DrawerBody>
            <Text onClick={onClose} cursor="pointer" fontSize="xl" my={2}>
              <Link to="/">Home</Link>
            </Text>
            <Text onClick={onClose} cursor="pointer" fontSize="xl" my={2}>
              <Link to="/login">Login</Link>
            </Text>
            <Divider />
            <Text onClick={onClose} cursor="pointer" fontSize="xl" my={2}>
              <Link to="/dashboard">Dashboard</Link>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
