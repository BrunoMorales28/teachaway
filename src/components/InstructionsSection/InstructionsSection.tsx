import { Box, List, ListItem, Typography, Checkbox } from "@mui/material";

const InstructionsSection = () => (
  <Box>
    <Typography>Instructions:</Typography>
    <Typography variant="subtitle1">Implement a simple web app that allows browsing the Imgur gallery</Typography>
    <List>
      <ListItem>
        <Checkbox checked />
        consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com)
      </ListItem>
      <ListItem>
        <Checkbox checked />
        show gallery images in a grid of thumbnails;
      </ListItem>
      <ListItem>
        <Checkbox checked />
        show image description in the thumbnail, top or bottom;
      </ListItem>
      <ListItem>
        <Checkbox checked />
        allow selecting the gallery section: hot, top, user;
      </ListItem>
      <ListItem>
        <Checkbox checked />
        allow including / excluding viralimages from the result set;
      </ListItem>
      <ListItem>
        <Checkbox checked={false} />
        allow specifying window and sort parameters;
      </ListItem>
      <ListItem>
        <Checkbox checked={false} />
        when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.
      </ListItem>
      <ListItem>
        <Checkbox checked={false} />
        pagination is a plus
      </ListItem>
    </List>
  </Box>
);

export default InstructionsSection;
