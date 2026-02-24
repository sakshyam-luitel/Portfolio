import React from "react";
import { useContext } from "react"
import { CardContext } from "../../pages/ProjectsPage";


const Image = () => {
    const imageString = useContext(CardContext)
  return (
    <>
        <div className="object-contain">
        <img
          src={imageString}
          alt=""
          className="rounded-2xl h-70 my-1"
        />
      </div>
    </>
  );
};

export default Image;
