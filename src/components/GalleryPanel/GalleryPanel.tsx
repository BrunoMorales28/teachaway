import { Box, Button, ButtonGroup } from "@mui/material";
import CONSTANTS from "../../constants";
import { useState } from "react";

type gallerySection = "hot" | "top" | "user";

interface panelButtonProps {
  sectionName: gallerySection;
  currentSection: gallerySection;
  handleClick: (sectionName: gallerySection) => void;
}

const PanelButton = ({ sectionName, currentSection, handleClick }: panelButtonProps) => (
  <Button disabled={sectionName === currentSection} onClick={() => handleClick(sectionName)}>
    {sectionName}
  </Button>
);

const GalleryPanel = () => {
  const [currentSection, setCurrentSection] = useState<gallerySection>(CONSTANTS.SECTIONS.HOT as gallerySection);
  const handleClick = (value: gallerySection) => {
    setCurrentSection(value);
  };

  const { TOP, HOT, USER } = CONSTANTS.SECTIONS as { TOP: gallerySection; HOT: gallerySection; USER: gallerySection };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup variant="contained" size="small">
        <PanelButton currentSection={currentSection} sectionName={HOT} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={TOP} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={USER} handleClick={handleClick} />
      </ButtonGroup>
    </Box>
  );
};

export default GalleryPanel;
