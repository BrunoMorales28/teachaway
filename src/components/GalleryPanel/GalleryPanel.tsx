import { Box } from "@mui/material";
import SectionPanel from "./SectionPanel";
import SortingPanel from "./SortingPanel";
import ViralCheckbox from "./ViralCheckbox";
import WindowPanel from "./WindowPanel";

const GalleryPanel = () => (
  <Box>
    <Box my={3} display="flex" justifyContent="space-around">
      <SectionPanel />
      <ViralCheckbox />
    </Box>
    <Box my={3} display="flex" justifyContent="center" flexDirection="column">
      <SortingPanel />
      <WindowPanel />
    </Box>
  </Box>
);

export default GalleryPanel;
