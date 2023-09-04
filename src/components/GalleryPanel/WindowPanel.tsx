import { ButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";

import CONSTANTS from "../../constants";
import { selectTimeWindow } from "../../redux/selectors";
import { galleryWindow } from "../../types";
import PanelButton from "./PanelButton";
import actions from "./actions";

const WindowPanel = () => {
    const { ALL, DAY, WEEK, MONTH, YEAR } = CONSTANTS.TIME_WINDOWS as {
      ALL: galleryWindow;
      DAY: galleryWindow;
      WEEK: galleryWindow;
      MONTH: galleryWindow;
      YEAR: galleryWindow;
    };
    const currentValue = useSelector(selectTimeWindow) as galleryWindow;
    const {setTimeWindow} = actions
  
    return (
      <ButtonGroup variant="contained">
        <PanelButton
          currentValue={currentValue}
          action={setTimeWindow}
          buttonLabel={ALL}
        />
        <PanelButton
          currentValue={currentValue}
          action={setTimeWindow}
          buttonLabel={DAY}
        />
        <PanelButton
          currentValue={currentValue}
          action={setTimeWindow}
          buttonLabel={WEEK}
        />
        <PanelButton
          currentValue={currentValue}
          action={setTimeWindow}
          buttonLabel={MONTH}
        />
        <PanelButton
          currentValue={currentValue}
          action={setTimeWindow}
          buttonLabel={YEAR}
        />
      </ButtonGroup>
    );
  };

  export default WindowPanel