import React from "react";
import { useContext } from "react"
import { CardContext } from "../../pages/ProjectsPage";


const Image = () => {
    const imageString = useContext(CardContext)
  return (
    <>
        <div>
        <img
          src={imageString}
          alt=""
          className="h-65 w-60 lg:w-70 object-cover m-4"
        />
      </div>
    </>
  );
};

export default Image;
