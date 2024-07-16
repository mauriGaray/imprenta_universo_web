import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import BtnWhatsapp from "./btnWhatsapp/BtnWhatsapp";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <BtnWhatsapp />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
