import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => (
  <div className="relative" style={{ cursor: "auto" }}>
    <div className="grid-overlay" />
    <div className="grain-overlay" />
    <div className="top-radial-glow" />
    <CustomCursor />
    <Navbar />
    <main className="page-wrapper">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Layout;
