import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfiguration } from "./utils/snackbar-management";
import { AppRouter } from "./router/router";

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfiguration />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
