import { useEffect, useState } from "react";
import { getImages } from "../../apis/getImages";
import ImgThumbnail from "../ImgThumbnail";
import { imgurGallery } from "../../types";
import { Card, ImageList } from "@mui/material";
import { useSelector } from "react-redux";

const selectSection = (state: any) => state.currentSection;

const ImgGrid = () => {
  const [images, setImages] = useState<imgurGallery[]>([]);
  const currentSection = useSelector(selectSection);
  useEffect(() => {
    getImages(currentSection).then((imgs) => setImages(imgs));
  }, [currentSection]);
  return (
    <ImageList sx={{ bgcolor: "#282c34", p: 1 }} cols={1} gap={8}>
      {images.map((img: imgurGallery) => (
        <Card key={img.id} sx={{ bgcolor: "#424855" }}>
          <ImgThumbnail link={img.link} title={img.title} description={img.description} />
        </Card>
      ))}
    </ImageList>
  );
};

export default ImgGrid;
