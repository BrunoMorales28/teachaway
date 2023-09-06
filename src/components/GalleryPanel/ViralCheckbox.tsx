import { Typography, Switch, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectShowViral } from "../../redux/selectors";
import actions from "./actions";

const ViralCheckbox = () => {
  const dispatch = useDispatch();
  const showViral = useSelector(selectShowViral);

  const toggleShowViral = (e: any) => {
    dispatch({ type: actions.toggleShowViral, payload: e.target.value });
  };
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography align="center">show viral</Typography>
      <Switch checked={showViral} onChange={toggleShowViral} inputProps={{ "aria-label": "Show Viral" }} />
    </Box>
  );
};

export default ViralCheckbox;
