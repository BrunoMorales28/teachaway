import ImageListItem from "@mui/material/ImageListItem/ImageListItem";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box";

interface thumbnailProps {
  link: string;
  title: string;
  description: string;
}

const ImgThumbnail = ({ title, description, link }: thumbnailProps) => (
  <ImageListItem>
    <Box p={2} bgcolor="secondary.light">
      <Typography align="center" variant="h2">
        {title}
      </Typography>
    </Box>
    <img style={{ objectFit: "contain" }} referrerPolicy="no-referrer" src={link} alt="unavailable" />
    {description && (
      <Box p={2} bgcolor="secondary.main">
        <Typography variant="subtitle1">{description}</Typography>
      </Box>
    )}
  </ImageListItem>
);

export default ImgThumbnail;
