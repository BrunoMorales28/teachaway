import { Provider } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';

import theme from "./muiTheme"
import store from "./redux/reduxStore";
import { RouterProvider } from "react-router";
import router from "./router";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <RouterProvider router={router}/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
