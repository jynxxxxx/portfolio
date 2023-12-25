import { Link } from "react-router-dom"


export function NavBar() {

  return (
    <>
      <div className="navlink ">
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}>
          Home
        </Link>
      </div>
      <div className="navlink ">
        <Link
          to="/aboutme"
          onClick={() => {
            window.scroll(0, 0);
          }}>
          About Me
        </Link>
      </div>
      <div className="navlink ">
        <Link
          to="/projects"
          onClick={() => {
            window.scroll(0, 0);
          }}>
          Projects
        </Link>
      </div>
      <div className="navlink ">
        <Link
          to="/contact"
          onClick={() => {
            window.scroll(0, 0);
          }}>
          Contact
        </Link>
      </div>
    </>
  )
}