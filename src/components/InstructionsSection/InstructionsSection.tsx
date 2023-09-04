import { Box, List, ListItem, Typography, Checkbox } from "@mui/material";

const InstructionsSection = () => (
  <Box>
    <Typography variant="h2">Instructions:</Typography>
    <Typography variant="subtitle1" >Implement a simple web app that allows browsing the Imgur gallery</Typography>
    <List>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1"> consume the Imgur API: https://api.imgur.com/ (check documentation for the api https://apidocs.imgur.com)
        </Typography> 
        </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1">show gallery images in a grid of thumbnails;
        </Typography>
        </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1">show image description in the thumbnail, top or bottom;
        </Typography>
        </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1">allow selecting the gallery section: hot, top, user;
        </Typography> </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1">allow including / excluding viralimages from the result set;</Typography>
      </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1"> allow specifying window and sort parameters;</Typography>
      </ListItem>
      <ListItem>
        <Checkbox checked />
        <Typography variant="subtitle1">when clicking an image in the gallery - show its details: big image, title, description, upvotes, downvotes and score.
        </Typography>   
      </ListItem>
      <ListItem>
        <Checkbox checked={false} />
        <Typography variant="subtitle1">pagination is a plus</Typography>
      </ListItem>
    </List>
  </Box>
);

export default InstructionsSection;
