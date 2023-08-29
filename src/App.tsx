import Container from "@mui/material/Container/Container";
import ImgGrid from "./components/ImgGrid/ImgGrid";
import InstructionsSection from "./components/InstructionsSection/InstructionsSection";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import GalleryPanel from "./components/GalleryPanel/GalleryPanel";
import appReducer from "./appReducer";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: appReducer,
});

function App() {
  return (
    <Provider store={store}>
      <Container sx={{ minHeight: "100vh", bgcolor: "#282c34", color: "white" }}>
        <Box height="100vh" display="flex" flexDirection="column" justifyContent="space-around">
          <img src="https://www.teachaway.com/themes/contrib/tams/logo.svg" alt="logo" />
          <Typography align="center">Bruno Morales' Coding Challenge</Typography>
          <Typography align="center">Frontend - Image gallery with filters</Typography>
        </Box>
        <GalleryPanel />
        <ImgGrid />
        <InstructionsSection />
      </Container>
    </Provider>
  );
}

export default App;
