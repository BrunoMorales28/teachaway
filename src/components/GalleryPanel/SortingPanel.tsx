import { ButtonGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import CONSTANTS from "../../constants";
import { selectSorting } from "../../redux/selectors";
import { gallerySort } from "../../types";
import PanelButton from "./PanelButton";
import actions from "./actions";

const SortingPanel = () => {
  const { TOP, VIRAL, TIME } = CONSTANTS.SORT_OPTIONS as {
    TOP: gallerySort;
    VIRAL: gallerySort;
    TIME: gallerySort;
  };
  const currentValue = useSelector(selectSorting) as gallerySort;
  const { setTimeWindow } = actions;

  return (
    <ButtonGroup variant="contained">
      <PanelButton currentValue={currentValue} action={setTimeWindow} buttonLabel={VIRAL} />
      <PanelButton currentValue={currentValue} action={setTimeWindow} buttonLabel={TOP} />
      <PanelButton currentValue={currentValue} action={setTimeWindow} buttonLabel={TIME} />
    </ButtonGroup>
  );
};

export default SortingPanel;
