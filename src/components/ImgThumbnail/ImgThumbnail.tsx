import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";

import CONSTANTS from "../../constants";

interface thumbnailProps {
  link: string;
  title: string;
  description: string;
}

const ImgThumbnail = ({ title, description, link }: thumbnailProps) => {
  console.log(description)
  return (
    <ImageListItem>
       <Box p={2} bgcolor="secondary.light">
        <Typography align="center" variant="body1">
          {title}
        </Typography>
      </Box>
      <img src={link || CONSTANTS.DEFAULT_IMG} alt="" referrerPolicy="no-referrer" />
      {description && <Box p={2} bgcolor="secondary.main">
        <Typography variant="subtitle1">
          {description}
        </Typography>
      </Box>}
    </ImageListItem>
  );
};

export default ImgThumbnail;
