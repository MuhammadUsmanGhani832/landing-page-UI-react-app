
import logoImage from '../assets/images/brand_logo.png'

const Navigation = () => {
  return (
    <nav>
      <div>
        <img src={logoImage}></img>
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
}

export default Navigation