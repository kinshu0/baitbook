import { Link } from "react-router-dom"
import logolight from "../logolight.svg"

const linkStyle = {
  color: 'white'
}



function NavBar(props) {
  return (
    <nav className="top-nav-general">
      {props.children}
    </nav>
  )
}


const Nav = (props) => {
  return (
    <nav className="top-nav">
      <Link style={linkStyle} to='/'>
        <img src={logolight} className="logo" alt="baitbook" />
      </Link>
      <ul className="nav-links">
        <Link style={linkStyle} to='/about'>
          <li>ABOUT US</li>
        </Link>
      </ul>
    </nav>
  )
}


export { Nav, NavBar }