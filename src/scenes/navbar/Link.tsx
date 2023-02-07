import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = (props: Props) => {
  const lowerCasePage = props.page.toLowerCase().replace(/ /g, "");

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