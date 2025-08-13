import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import "./Layout.scss";

export function Layout() {
  return (
    <>
      <Header />
      <main className="layout-content">
        <Outlet />
      </main>
    </>
  );
}
