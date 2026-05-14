import { BrowserRouter, Routes, Route } from "react-router-dom";
import HKDO_landing from "./pages/HKDO_landing";
import SoKHCNPage from "./pages/So_KHCN_1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HKDO_landing />} />
        <Route path="/so-khcn" element={<SoKHCNPage />} />
      </Routes>
    </BrowserRouter>
  );
}
