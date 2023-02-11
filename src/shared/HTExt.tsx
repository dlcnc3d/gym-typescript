import React from "react";

type Props = {
  children: React.ReactNode;
};

const HTExt = (props: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
      {props.children}
    </h1>
  );
};

export default HTExt;
