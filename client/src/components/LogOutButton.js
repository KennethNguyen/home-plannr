import React from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const LogOutButton = () => {
  const history = useHistory();

  const handleLogOut = () => history.push("/login");

  return (
    <div>
      <Button
        pos="absolute"
        top="0"
        right="0"
        variant="ghost"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOutButton;
