import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SharePage from "./pages/SharePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s/:shareId" element={<SharePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
