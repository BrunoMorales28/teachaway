import { useEffect, useState } from "react";
import { getImages } from "../../apis/getImages";
import ImgThumbnail from "../ImgThumbnail";
import { imgurGallery } from "../../types";

interface thumbnailProps {}

const ImgGrid = ({}: thumbnailProps) => {
  const [images, setImages] = useState<imgurGallery[]>([]);
  useEffect(() => {
    getImages().then((imgs) => setImages(imgs));
  }, []);
  return (
    <div>
      {images.map((img: imgurGallery) => (
        <ImgThumbnail key={img.id} link={img.link} title={img.title} description={img.description} />
      ))}
    </div>
  );
};

export default ImgGrid;
