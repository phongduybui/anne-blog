import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="flex-grow pb-16 flex justify-between items-center">
      <div className="text-6xl font-black text-semi-black">
        <p className="mb-4 text-gray">
          Hi, I&apos;m <span className="text-[#d1ff10]">Anne</span>.
        </p>
        <p className="mb-8 text-gray">English Student</p>
        <h2 className=" text-slate-300 text-[19px] mb-8">
          “You only live once, but if you do it right, once is enough.”
        </h2>
        <div className="flex justify-betweeen space-x-4 my-6">
          <Button>Contact Me</Button>
          <Button bordered>About Me</Button>
        </div>
      </div>

      <Image
        src="/images/an.jpg"
        alt="personal-avatar"
        width={360}
        height={360}
        objectFit="cover"
        className="shadow-2xl rounded-full !border-4 !border-gray !border-solid ml-6"
      />
    </div>
  );
};

export default Hero;
