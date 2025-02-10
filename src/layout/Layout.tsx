import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
