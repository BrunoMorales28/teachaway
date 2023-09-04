import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { gallerySection, gallerySort, galleryWindow } from "../../types";

interface panelButtonProps {
  buttonLabel: gallerySection | galleryWindow | gallerySort;
  currentValue: gallerySection | galleryWindow | gallerySort;
  action: string;
}

const PanelButton = ({
    buttonLabel,
    currentValue,
    action,
  }: panelButtonProps) => {
    const dispatch = useDispatch();
    const handleClick = (value: gallerySection | gallerySort | galleryWindow) => {
      dispatch({ type: action, payload: value });
    };
    
    return (
      <Button
        sx={{
          bgcolor: buttonLabel !== currentValue ? "primary.main" : "primary.dark",
          py: 1,
        }}
        onClick={() => handleClick(buttonLabel)}
      >
        <Typography> {buttonLabel} </Typography>
      </Button>
    );
  };

  export default PanelButton