import { Header } from "./components/ui/header";
import { Routing } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <ToastContainer />
    </>
  );
}

export default App;
