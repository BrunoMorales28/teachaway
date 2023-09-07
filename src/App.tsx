import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

import theme from "./muiTheme";
import store from "./redux/reduxStore";
import { RouterProvider } from "react-router";
import router from "./router";
import TeachawayAppBar from "./components/TeachawayAppBar";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TeachawayAppBar />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
