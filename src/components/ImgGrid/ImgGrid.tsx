import { useEffect, useState } from "react";
import { getImages } from "../../apis/getImages";
import ImgThumbnail from "../ImgThumbnail";
import { imgurGallery } from "../../types";
import { Card, ImageList } from "@mui/material";

const ImgGrid = () => {
  const [images, setImages] = useState<imgurGallery[]>([]);
  useEffect(() => {
    getImages().then((imgs) => setImages(imgs));
  }, []);
  return (
    <ImageList sx={{ bgcolor: "#282c34", p: 1 }} cols={1} gap={8}>
      {images.map((img: imgurGallery) => (
        <Card sx={{ bgcolor: "#424855" }}>
          <ImgThumbnail key={img.id} link={img.link} title={img.title} description={img.description} />
        </Card>
      ))}
    </ImageList>
  );
};

export default ImgGrid;
