import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "../styles/Header.css"

function Header() {
  return ( 
    <header>
      <article>
        <img src={logo} alt="logotype planned planthood" />
        <h5>PLANNED PLANTHOOD</h5>
        <nav>
          <ul>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'hotpink' : 'white'})} to='/'>Hem</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'hotpink' : 'white'})} to='/tips'>Så-tips</NavLink></li>
            <li><NavLink style={({isActive}) => ({color: isActive ? 'hotpink' : 'white'})} to='/about'>Mer info</NavLink></li>
          </ul>
        </nav>
      </article>
    </header>
   );
}

export default Header;