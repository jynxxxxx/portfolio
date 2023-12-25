import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {

  return (
    <div className="masterctn">
      <Header />
      <div className="content" style={{ minHeight: '60vh' }}>
        <Outlet />
      </div>
    </div>
  );
}