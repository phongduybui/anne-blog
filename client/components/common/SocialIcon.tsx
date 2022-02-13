interface Props {
  icon: React.ReactNode;
  href?: string;
}

const SocialIcon = ({ icon, href = '' }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3 bg-gray text-2xl rounded-full hover:bg-primary hover:text-white cursor-pointer"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
