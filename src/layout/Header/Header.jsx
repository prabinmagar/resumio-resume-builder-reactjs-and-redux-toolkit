import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import "./Header.scss";

const Header = () => {
  return (
    <header className="pg-header">
      <div className="container">
        <div className="header-wrap">
          <Link to="/" className="site-brand">
            <img src={Images.Logo} alt="" />
            <span>Resumio.</span>
          </Link>
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/templates">Templates</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">Career Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Link to="/resume" className="resume-btn">
              My Resume
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
