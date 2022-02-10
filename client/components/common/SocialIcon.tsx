interface Props {
  icon: React.ReactNode;
}

const SocialIcon = ({ icon }: Props) => {
  return (
    <a className="p-3 bg-gray text-2xl rounded-full hover:bg-primary hover:text-white cursor-pointer">
      {icon}
    </a>
  );
};

export default SocialIcon;
