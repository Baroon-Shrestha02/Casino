import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import CoursePage from "./Pages/CoursePage";
import ContactPage from "./Pages/ContactPage";
import CareerPage from "./Pages/CareerPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursePage />} />
        {/* <Route path="/services" element={<ServicePage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
