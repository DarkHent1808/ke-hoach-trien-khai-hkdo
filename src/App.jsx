import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HKDO_landing from "./pages/HKDO_landing";
// import SoKHCNPage from "./pages/so_khcn/So_KHCN_1";
// import UbndPage from "./pages/ubnd-xa-phuong/Ubnd_1";
const HKDO_landing = lazy(() => import("./pages/HKDO_landing"));
const SoKHCNPage = lazy(() => import("./pages/so_khcn/So_KHCN_1"));
const UbndPage = lazy(() => import("./pages/ubnd-xa-phuong/Ubnd_1"));
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <BrowserRouter basename="/sanpham/trien-khai-dia-phuong">
      
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HKDO_landing />} />
        <Route path="/so-khcn" element={<SoKHCNPage />} />
        <Route path="/ubnd-xa-phuong" element={<UbndPage />} />
      </Routes>
    </BrowserRouter>
  );
}
