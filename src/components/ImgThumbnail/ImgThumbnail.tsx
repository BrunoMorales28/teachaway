import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";

import CONSTANTS from "../../constants";

interface thumbnailProps {
  link: string;
  title: string;
  description: string;
}


//  <img src={link || CONSTANTS.DEFAULT_IMG} alt="" referrerPolicy="no-referrer" />
const ImgThumbnail = ({ title, description, link }: thumbnailProps) => {
  if (!link.match((/(\.ogg)|(\.mp4)|(\.webm)/))) return (
    <ImageListItem >
      <Box p={2} bgcolor="secondary.light">
        <Typography align="center" variant="h2">
          {title}
        </Typography>
      </Box>
      <img referrerPolicy="no-referrer" src={link} alt="image unavailable" />
      {description && 
        <Box p={2} bgcolor="secondary.main">
          <Typography variant="subtitle1">
            {description}
          </Typography>
        </Box>
      }
    </ImageListItem>
  );
  return <div/>
};

export default ImgThumbnail;
