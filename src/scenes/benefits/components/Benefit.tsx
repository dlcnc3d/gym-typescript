import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = BenefitType & { setSelectedPage: (value: SelectedPage) => void };

const Benefit = (props: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {props.icon}
        </div>
      </div>

      <h4 className="font-bold"> {props.title}</h4>
      <p className="my-3">{props.description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => props.setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;
