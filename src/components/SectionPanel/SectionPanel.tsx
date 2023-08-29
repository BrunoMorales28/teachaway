import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import CONSTANTS from "../../constants";
import actions from "./actions";

type gallerySection = "hot" | "top" | "user";

interface panelButtonProps {
  sectionName: gallerySection;
  currentSection: gallerySection;
  handleClick: (sectionName: gallerySection) => void;
}

const PanelButton = ({ sectionName, currentSection, handleClick }: panelButtonProps) => (
  <Button sx={{ bgcolor: "#424855", borderColor: "#000000" }} disabled={sectionName === currentSection} onClick={() => handleClick(sectionName)}>
    <Typography color="white"> {sectionName} </Typography>
  </Button>
);

const SectionPanel = () => {
  const { TOP, HOT, USER } = CONSTANTS.SECTIONS as { TOP: gallerySection; HOT: gallerySection; USER: gallerySection };
  const [currentSection, setCurrentSection] = useState<gallerySection>(HOT);
  const dispatch = useDispatch();
  const handleClick = (value: gallerySection) => {
    dispatch({ type: actions.setCurrentSection, payload: value });
    setCurrentSection(value);
  };

  return (
    <Box display="flex" justifyContent="center">
      <ButtonGroup variant="contained">
        <PanelButton currentSection={currentSection} sectionName={HOT} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={TOP} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={USER} handleClick={handleClick} />
      </ButtonGroup>
    </Box>
  );
};

export default SectionPanel;
