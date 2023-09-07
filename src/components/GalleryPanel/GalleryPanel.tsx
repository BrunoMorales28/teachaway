import { Box, Theme, useMediaQuery } from "@mui/material";
import SectionPanel from "./SectionPanel";
import SortingPanel from "./SortingPanel";
import ViralCheckbox from "./ViralCheckbox";
import WindowPanel from "./WindowPanel";

const GalleryPanel = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

  return (
    <Box>
      <Box my={3} display="flex" justifyContent="space-around">
        <SectionPanel />
        <ViralCheckbox />
      </Box>
      <Box my={3} display="flex" justifyContent="center" flexDirection={isSmallScreen ? "row" : "column"} gap={3}>
        <SortingPanel />
        <WindowPanel />
      </Box>
    </Box>
  );
};

export default GalleryPanel;
