import { MdEmail, MdPhone } from 'react-icons/md';
import Button from '../common/Button';
import Container from './Container';

const Footer = () => {
  return (
    <Container className="bg-semi-black py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h2 className="font-bold text-primary text-2xl whitespace-nowrap dark:text-white">
            Anne.
          </h2>
          <p className="text-slate-300 text-base">
            Copyright © 2022 Anne. All Right Reserved.
          </p>
        </div>

        <div className="col-span-4">
          <h3 className="mb-2 text-slate-300">Contact Me</h3>

          <div className="bg-semi-black flex flex-col text-slate-300 rounded-md ">
            <div className="flex items-center">
              <MdEmail className="mr-2 text-slate-300" />{' '}
              levohoangan.01@gmail.com
            </div>
            <div className="flex items-center">
              <MdPhone className="mr-2 text-slate-300" /> 065845453
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <h3 className="mb-2 text-slate-300">Subscribe Newsletter</h3>

          <div className="bg-semi-black flex items-center rounded-md">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray outline-none p-2 px-3 rounded-md "
            />
            <Button className="rounded-md ml-2 py-2 ">Subscribe</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
