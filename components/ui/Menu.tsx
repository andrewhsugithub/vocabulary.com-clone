"use client";

import { useState } from "react";
import { Icons } from "../Icons";
import { Fade as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleNav = (isToggled: boolean) => {
    if (isToggled) {
      // show menu
    } else {
      //close menu
    }
    setIsToggled(!isToggled);
  };

  return (
    <Hamburger
      // className="h-6 w-6 cursor-pointer"
      color="white"
      size={6}
      direction="right"
      duration={0.3}
      label="toggle menu"
      onToggle={(isToggled) => toggleNav(isToggled)}
    />
  );
};

export default Menu;
