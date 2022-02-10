import { MdEmail, MdPhone } from 'react-icons/md';
import Button from '../common/Button';
import Container from './Container';

const Footer = () => {
  return (
    <Container className="bg-white py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <h2 className="font-bold text-primary text-2xl whitespace-nowrap dark:text-white">
            Anne.
          </h2>
          <p className="text-secondary text-base">
            Copyright © 2022 Anne. All Right Reserved.
          </p>
        </div>

        <div className="col-span-4">
          <h3 className="mb-2 text-secondary">Contact Me</h3>

          <div className="bg-white flex flex-col text-secondary rounded-md">
            <div className="flex items-center">
              <MdEmail className="mr-2 text-secondary" />{' '}
              levohoangan.01@gmail.com
            </div>
            <div className="flex items-center">
              <MdPhone className="mr-2 text-secondary" /> 065845453
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <h3 className="mb-2 text-secondary">Subscribe Newsletter</h3>

          <div className="bg-white flex items-center rounded-md">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray outline-none p-2 px-3 rounded-md "
            />
            <Button className="rounded-md ml-3 py-2">Subscribe</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
