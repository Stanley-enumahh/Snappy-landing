import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharePage from "./pages/SharePage";
import PrivacyPolicy from "./pages/privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s/:shareId" element={<SharePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
