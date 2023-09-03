import { useDispatch, useSelector } from "react-redux";
import { Box, Button, ButtonGroup, Switch, Typography } from "@mui/material";

import CONSTANTS from "../../constants";
import actions from "./actions";
import { selectSection, selectShowViral } from "../../redux/selectors";
import { gallerySection } from "../../types";

interface panelButtonProps {
  sectionName: gallerySection;
}

const PanelButton = ({ sectionName }: panelButtonProps) => {
  const dispatch = useDispatch();
  const currentSection = useSelector(selectSection) ;

  const handleClick = (value: gallerySection) => {
    dispatch({ type: actions.setCurrentSection, payload: value });
  };
  return (
  <Button sx={{ bgcolor: sectionName !== currentSection ? "primary.main" : "primary.dark", py: 1 }} onClick={() => handleClick(sectionName)}>
    <Typography color="white"> {sectionName} </Typography>
  </Button>
)};

const SectionPanel = () => {
  const { TOP, HOT, USER } = CONSTANTS.SECTIONS as { TOP: gallerySection; HOT: gallerySection; USER: gallerySection };
  const dispatch = useDispatch();
  const showViral = useSelector(selectShowViral);

  const toggleShowViral = (e: any) => {
    dispatch({ type: actions.toggleShowViral, payload: e.target.value });
  };


  return (
    <Box display="flex" justifyContent="space-around">
      <ButtonGroup  variant="contained">
        <PanelButton sectionName={HOT} />
        <PanelButton sectionName={TOP} />
        <PanelButton sectionName={USER} />
      </ButtonGroup>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography align="center">show viral</Typography>
        <Switch checked={showViral} onChange={toggleShowViral} inputProps={{ "aria-label": "Viral" }} />
      </Box>
    </Box>
  );
};

export default SectionPanel;
