interface thumbnailProps {
  link: string;
  title: string;
  description: string;
}

const ImgThumbnail = ({ title, description, link }: thumbnailProps) => {
  return (
    <div>
      <img src={link} alt="" referrerPolicy="no-referrer" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ImgThumbnail;
