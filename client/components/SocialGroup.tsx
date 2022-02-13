import React from 'react';
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import SocialIcon from './common/SocialIcon';

interface Props {
  facebook?: string;
  insta?: string;
  youtube?: string;
}

const defaultLink = 'https://www.facebook.com/profile.php?id=100006364009186';

const SocialGroup = ({
  facebook = defaultLink,
  insta = defaultLink,
  youtube = defaultLink,
}: Props) => {
  return (
    <div className="flex justify-center flex-wrap space-x-2">
      <SocialIcon href={facebook} icon={<RiFacebookCircleFill />} />
      <SocialIcon href={youtube} icon={<RiYoutubeFill />} />
      <SocialIcon href={insta} icon={<RiInstagramFill />} />
    </div>
  );
};

export default SocialGroup;
