import Buttons from "@/common/component/element/Buttons";
import Image from "@/common/component/element/Image";
import React from "react";
import { AiFillRead } from "react-icons/ai";
import Grid2 from "./Grid2";
import Layouts from "@/common/component/element/Layouts";
import Translate from "@/common/component/element/Translate";

const Mainpage = () => {
  return (
    <div className="md:flex grid grid-cols-1 justify-between relative py-[150px] overflow-x-hidden px-10 max-w-[1200px]">
      <Translate tranlateY={100}>

      <div className="relative z-[9]">
        <h1 className="lg:text-7xl text-5xl font-bold md:w-[50%]">
          ENERGY DRINK
        </h1>
        <h2 className="lg:w-[50%]  md:w-[40%] mt-3 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
          text ever since the 1500s,
        </h2>
        <Buttons
          className="mt-3"
          href=""
          icon={<AiFillRead size={20} />}
          icons={
            <AiFillRead
              size={40}
              className="text-orange-600 group-hover:text-orange-200 lg:transition-all lg:duration-300"
            />
          }
          title="Read More"
        />
      </div>
      </Translate>
      <Grid2 />
      <div className="absolute  md:top-[-50px] top-[380px] right-[-70px] md:right-[-70px] lg:right-[-10px] overflow-hidden z-[9]">
        <Layouts>
        <Image
          src="/img/drink.png"
          alt="drink"
          width={800}
          height={469}
          priority
          className="md:w-[830px] w-[500px] overflow-hidden object-cover"
        />
          </Layouts>
      </div>
    </div>
  );
};

export default Mainpage;
