import {NavLink} from 'react-router-dom';

function Header(props) {
  
  return (
    <header>
      <h3>{props.brand}</h3>
  
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/search">Search</NavLink>
      </nav>

    </header>
  )
}

export default Header;
