import { Box, ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";

import CONSTANTS from "../../constants";
import { gallerySection, gallerySort } from "../../types";
import PanelButton from "./PanelButton";
import actions from "./actions";
import { selectSection } from "../../redux/selectors";

const SectionPanel = () => {
  const { TOP, HOT, USER } = CONSTANTS.SECTIONS as {
    TOP: gallerySection;
    HOT: gallerySection;
    USER: gallerySection;
  };
  const currentValue = useSelector(selectSection) as gallerySort;
  const { setCurrentSection } = actions;

  return (
    <Box display="flex" justifyContent="space-around">
      <ButtonGroup variant="contained">
        <PanelButton currentValue={currentValue} action={setCurrentSection} buttonLabel={HOT} />
        <PanelButton currentValue={currentValue} action={setCurrentSection} buttonLabel={TOP} />
        <PanelButton currentValue={currentValue} action={setCurrentSection} buttonLabel={USER} />
      </ButtonGroup>
    </Box>
  );
};

export default SectionPanel;
