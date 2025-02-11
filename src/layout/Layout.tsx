import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <div className="container-grid">
        {/* Header */}
        <div className="container-grid-header">
          <Header />
        </div>

        {/* Sidebar */}
        <div className="container-grid-sidebar">
          <Sidebar />
        </div>

        {/* Content */}
        <main className="container-grid-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
