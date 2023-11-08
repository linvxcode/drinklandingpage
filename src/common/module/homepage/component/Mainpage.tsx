import Buttons from "@/common/component/element/Buttons";
import Image from "@/common/component/element/Image";
import React from "react";
import {AiFillRead} from 'react-icons/ai'

const Mainpage = () => {
  return (
    <div className="flex justify-between relative py-[150px] overflow-hidden px-20 max-w-[1500px]">
      <div>
        <h1 className="lg:text-7xl font-bold w-[50%]">ENERGY DRINK</h1>
        <h2 className="w-[50%] mt-3 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&rsquo;s standard dummy text ever
          since the 1500s,
        </h2>
        <Buttons className="mt-3 " href="" icon={<AiFillRead size={20}  />} icons={<AiFillRead size={40} className="text-orange-600 group-hover:text-orange-200 lg:transition-all lg:duration-300" />} title="Read More" />
      </div>
      <div className="w-[20%] relative z-[9]">
        <h1>ashkjdasd</h1>
      </div>
      <div className="rightbg h-screen w-[40%] top-0 right-0 absolute"></div>
      <div className="absolute top-0 right-[-10px] overflow-hidden">
        <Image src='/img/drink.png' alt="drink" width={800} height={569} priority className="w-[900px] h-auto overflow-hidden object-cover" />
      </div>
    </div>
  );
};

export default Mainpage;
