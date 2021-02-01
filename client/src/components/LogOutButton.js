import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";

const LogOutButton = () => {
  const { logoutUser } = useContext(UserContext);

  const handleLogout = () => logoutUser();

  return (
    <div>
      <Button
        pos="absolute"
        top="0"
        right="0"
        variant="ghost"
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutButton;
