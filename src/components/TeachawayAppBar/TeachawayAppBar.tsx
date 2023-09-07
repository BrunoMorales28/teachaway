import { AppBar, Typography } from "@mui/material";
import CONSTANTS from "../../constants";

const TeachawayAppBar = () => (
  <AppBar>
    <img style={{ objectFit: "contain", maxHeight: 40 }} referrerPolicy="no-referrer" src={CONSTANTS.TEACHAWAY_LOGO} alt="teachaway" />
  </AppBar>
);

export default TeachawayAppBar;
