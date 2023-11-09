import React from "react";
import { FooterText } from "@/common/constant/FooterText";
import clsx from "clsx";

const Footer = () => {
  return (
    <div
      className={clsx(
        `md:absolute relative md:bottom-0 md:flex max-md:justify-start   bg-footer py-8 xl:px-28 px-5 w-full 2xl:max-w-[1200px] xl:max-w-[1500px]`
      )}
    >
      {FooterText.map((item, index) => (
        <div className="flex gap-3  item-center " key={index}>
          <h1 className="text-5xl mt-4 font-bold">{item.index}</h1>
          <div className="h-[80px] w-[1px]  bg-white"></div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">{item.head}</h1>
            <h2 className="text-xs w-[80%]">{item.body}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
