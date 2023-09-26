//! created this component to bypass the issue of cannot pass functions(any kind including functional components) from server to client cause it's not serializable(turn into string)
"use client";

import { tabs } from "@/constants/tabs";
import Tab from "./ui/Tab";

const Tabs = () => {
  return (
    <ul className="order-3 col-span-2 flex justify-evenly items-center lg:order-1 lg:justify-between ">
      {tabs.map((tab: tab) => {
        return (
          <li key={tab.linkTitle}>
            <Tab
              link={tab.link}
              text={tab.text}
              linkTitle={tab.linkTitle}
              Icon={tab.Icon}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
