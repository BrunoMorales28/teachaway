import { Box } from "@mui/material";
import SectionPanel from ".";
import SortingPanel from "./SortingPanel";
import ViralCheckbox from "./ViralCheckbox";
import WindowPanel from "./WindowPanel";

const GalleryPanel = () => (
  <Box>
    <SectionPanel />
    <SortingPanel />
    <WindowPanel />
    <ViralCheckbox />
  </Box>
);

export default GalleryPanel;
