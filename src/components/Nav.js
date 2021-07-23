import { Link } from "react-router-dom"
import logolight from "../logolight.svg"

const linkStyle = {
  color: 'white'
}




export const Nav = (props) => {
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


// export const Nav = (props) => {
//   return (
//     <nav>
//       <Link style={linkStyle} to='/home'>
//         <img src={logolight} className="nav-logo" alt="baitbook" />
//       </Link>
//       <ul className="nav-links">
//         <Link style={linkStyle} to='/about'>
//           <li>ABOUT US</li>
//         </Link>
//         <Link style={linkStyle} to='/lol'>
//           <li>Lol</li>
//         </Link>
//       </ul>
//     </nav>
//   )
// }
