import "./navbar.css";

function Navbar(props) {
  return (
    <nav id="navbar">
      <div id="logo" className="animate__animated animate__wobble">
        <img src={props.logo} alt="Logo" />
      </div>
      <ul>
        <li className="item">
          <a href={props.home}>Home</a>
        </li>
        <li className="item">
          <a href={props.serv}>Service</a>
        </li>
        <li className="item">
          <a href={props.about}>About Us</a>
        </li>
        <li className="item">
          <a href={props.contact}>Contact Us</a>
        </li>
      </ul>
      <div className="user">
        <button className="ubtn">
          <a href={props.login}>Sign Up</a>
        </button>
        <button class="ubtn">
          <a href={props.signup}>Log In</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
