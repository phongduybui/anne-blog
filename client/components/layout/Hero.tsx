import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="pb-16 flex justify-between items-center">
      <div className="text-6xl font-black text-semi-black">
        <p className="mb-4 ">
          Hi, I'm <span className="text-primary">Hoang An</span>.
        </p>
        <p className="mb-8">English Student</p>
        <h2 className=" text-secondary text-[19px] mb-8">
          Specialized in Gatsby and React
        </h2>
        <div className="flex justify-betweeen space-x-4 my-6">
          <Button>Contact Me</Button>
          <Button bordered>About Me</Button>
        </div>
      </div>

      <Image
        src="/images/blob.png"
        alt="personal-avatar"
        width={500}
        height={500}
        objectFit="cover"
      />
    </div>
  );
};

export default Hero;
