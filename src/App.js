import "./App.css";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
