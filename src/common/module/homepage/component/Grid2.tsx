import React from "react";
import { GridText } from "@/common/constant/GridText";

const Grid2 = () => {
  return (
    <div className="w-[25%] relative z-[9]">
      {GridText.map((item, index) => (
        <div className="flex relative mb-10 px-2 flex-col" key={index}>
          <h1 className="text-xl font-bold">{item.head}</h1>
          <h2 className="text-xs mt-5 line-clamp-3">{item.body}</h2>
          <div className="absolute left-0 top-[5px] h-[90px] w-[1px] bg-white"></div>
        </div>
      ))}
    </div>
  );
};

export default Grid2;
