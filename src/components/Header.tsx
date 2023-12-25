import { Link } from "react-router-dom"
import smallLogo from "../assets/images/smalllogo.png"
import { NavBar } from "./NavBar"

export default function Header() {
  return (
    <>
      <div className="header">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            window.scroll(0, 0);
          }}>
          <object className="logo" data={smallLogo}></object>
        </Link>
        <div className="navbarbtns">
          <NavBar />
        </div>
      </div>
    </>
  )
}
