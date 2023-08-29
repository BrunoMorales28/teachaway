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
  return (
    <ImageListItem>
      <img src={link || CONSTANTS.DEFAULT_IMG} alt="" referrerPolicy="no-referrer" />
      <Box p={2}>
        <Typography align="center" color="white" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography color="white" variant="subtitle1">
          {description}
        </Typography>
      </Box>
    </ImageListItem>
  );
};

export default ImgThumbnail;
