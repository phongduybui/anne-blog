import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
import Container from './Container';

const Hero = () => {
  return (
    <Container className="bg-white">
      <div className="pb-16 flex justify-between items-center">
        <div className="text-6xl font-black text-semi-black">
          <p className="mb-4 ">
            Hi, I&apos;m <span className="text-primary">Anne</span>.
          </p>
          <p className="mb-8">English Student</p>
          <h2 className=" text-secondary text-[19px] mb-8">
            “You only live once, but if you do it right, once is enough.”
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
    </Container>
  );
};

export default Hero;
