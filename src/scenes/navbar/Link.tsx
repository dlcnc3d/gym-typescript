import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = (props: Props) => {
  const lowerCasePage = props.page.toLowerCase().replace(/ /g, "") as SelectedPage;  
  console.log("lowerCasePage", lowerCasePage)

  return (
    <AnchorLink
      className={`${
        props.selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => props.setSelectedPage(lowerCasePage)}
    >
      {props.page}
    </AnchorLink>
  );
};


export default Link;