import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfiguration } from "./utils/snackbar-managment";

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfiguration />
      <BrowserRouter></BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
