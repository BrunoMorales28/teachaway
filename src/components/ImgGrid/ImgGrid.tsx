import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, ImageList } from "@mui/material";

import { getImages } from "../../apis/getImages";
import ImgThumbnail from "../ImgThumbnail";
import { imgurGallery } from "../../types";
import { selectSection, selectShowViral } from "../../redux/selectors";

const ImgGrid = () => {
  const [images, setImages] = useState<imgurGallery[]>([]);
  const currentSection = useSelector(selectSection);
  const showViral = useSelector(selectShowViral);

  useEffect(() => {
    getImages(currentSection, showViral).then((imgs) => setImages(imgs));
  }, [currentSection, showViral]);

  return (
    <ImageList cols={1} gap={8}>
      {images.map((img: imgurGallery) => (
        <Card key={img.id}>
          <ImgThumbnail link={img.link} title={img.title} description={img.description} />
        </Card>
      ))}
    </ImageList>
  );
};

export default ImgGrid;
