import { useDispatch, useSelector } from "react-redux";
import { Box, Button, ButtonGroup, Switch, Typography } from "@mui/material";

import CONSTANTS from "../../constants";
import actions from "./actions";
import { selectSection, selectShowViral } from "../../redux/selectors";

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
  const currentSection = useSelector(selectSection) as gallerySection;
  const showViral = useSelector(selectShowViral);
  const dispatch = useDispatch();

  const toggleShowViral = (e: any) => {
    dispatch({ type: actions.toggleShowViral, payload: e.target.value });
  };

  const handleClick = (value: gallerySection) => {
    dispatch({ type: actions.setCurrentSection, payload: value });
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <ButtonGroup variant="contained">
        <PanelButton currentSection={currentSection} sectionName={HOT} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={TOP} handleClick={handleClick} />
        <PanelButton currentSection={currentSection} sectionName={USER} handleClick={handleClick} />
      </ButtonGroup>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography align="center">show viral</Typography>
        <Switch checked={showViral} onChange={toggleShowViral} inputProps={{ "aria-label": "Viral" }} />
      </Box>
    </Box>
  );
};

export default SectionPanel;
