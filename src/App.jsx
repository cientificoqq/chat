import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
