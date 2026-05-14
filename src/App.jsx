import { BrowserRouter, Routes, Route } from "react-router-dom";
import HKDO_landing from "./pages/HKDO_landing";
import SoKHCNPage1 from "./pages/So_KHCN/So_KHCN_1";
import SoKHCNPage2 from "./pages/So_KHCN/So_KHCN_2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HKDO_landing />} />
        <Route path="/so-khcn/trang-dieu-phoi" element={<SoKHCNPage1 />} />
        <Route path="/so-khcn/can-chuan-bi-gi" element={<SoKHCNPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}
