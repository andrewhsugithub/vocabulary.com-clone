"use client";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsProps {
  text: string;
  link: string;
  linkTitle: string;
  Icon: React.FC<LucideProps>; //! need to add LucideProps to add props like classname, color, size, etc... otherwise can't because it's an intrinsic element
}

const Tabs = ({ text, link, linkTitle, Icon }: TabsProps) => {
  const path = usePathname();
  const isActive = path === link;

  return (
    <Link
      href={link}
      title={linkTitle}
      className={`${
        linkTitle !== "trainer"
          ? "flex gap-2 items-center"
          : "hidden items-center sm:flex sm:gap-2"
      }`}
    >
      <Icon
        className={cn("h-6 w-6", {
          "font-bold text-md": isActive,
        })}
        color={`${isActive ? "#36B100" : "white"}`}
      />
      <p className="text-white text-xs lg:text-base">{text}</p>
    </Link>
  );
};

export default Tabs;
