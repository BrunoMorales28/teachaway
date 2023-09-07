import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, ImageList, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

import { getImages } from "../../apis/getImages";
import ImgThumbnail from "../ImgThumbnail";
import { imgurGallery } from "../../types";
import { selectSection, selectShowViral } from "../../redux/selectors";
import { Link } from "react-router-dom";

const ImgGrid = () => {
  const [images, setImages] = useState<imgurGallery[]>([]);
  const currentSection = useSelector(selectSection);
  const showViral = useSelector(selectShowViral);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isBigScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  const imageListColumns = () => {
    if (isSmallScreen) return 1;
    if (isBigScreen) return 4;
    return 2;
  };

  useEffect(() => {
    getImages(currentSection, showViral).then((imgs) => setImages(imgs));
  }, [currentSection, showViral]);

  return (
    <ImageList cols={imageListColumns()} gap={8}>
      {images
        .filter((img: imgurGallery) => !img.link.match(/(\.ogg)|(\.mp4)|(\.webm)/))
        .map((img: imgurGallery) => {
          const { id, link, title, description } = img;

          return (
            <Card key={id} sx={{ p: 1 }}>
              <Link to={`image/${id}`} style={{ textDecoration: "none" }}>
                <ImgThumbnail link={link} title={title} description={description} />
              </Link>
            </Card>
          );
        })}
    </ImageList>
  );
};

export default ImgGrid;
