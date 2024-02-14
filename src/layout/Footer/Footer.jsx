import { Link } from "react-router-dom";
import "./Footer.scss";
import { Images } from "../../assets/images";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-items">
            <div className="footer-item">
              <Link to="/" className="footer-item-brand">
                <img src={Images.Logo} alt="" />
                <span>Resumio</span>
              </Link>
              <p className="footer-item-lead">
                Resumio is a career site fueled by the best career experts and a
                community of miliions of readers yearly. We share this tool to
                help everyone find their dream job.
              </p>
              <ul className="social-links">
                <li className="link-item">
                  <Link to="/">
                    <FaFacebook />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <FaTwitter />
                  </Link>
                </li>
                <li className="link-item">
                  <Link to="/">
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
              <ul className="contact-info">
                <li className="info-item">
                  <span className="info-item-lbl">Call us:</span>
                  <span className="info-item-val">855-454-34534</span>
                </li>
                <li className="info-item">
                  <span className="info-item-lbl">Email:</span>
                  <span className="info-item-val">support@resumio.com</span>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Resume</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">Resume Builder</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Resume Templates</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Resume Examples</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Resume Hlep</Link>
                </li>
                <li className="link-item">
                  <Link to="/">How to Write a Resume</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">CV</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">CV Builder</Link>
                </li>
                <li className="link-item">
                  <Link to="/">CV Templates</Link>
                </li>
                <li className="link-item">
                  <Link to="/">CV Examples</Link>
                </li>
                <li className="link-item">
                  <Link to="/">CV Hlep</Link>
                </li>
                <li className="link-item">
                  <Link to="/">How to Write a CV</Link>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <p className="footer-item-ttl">Support</p>
              <ul className="footer-links">
                <li className="link-item">
                  <Link to="/">About</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Contact</Link>
                </li>
                <li className="link-item">
                  <Link to="/">FAQ</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="link-item">
                  <Link to="/">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="footer-bottom-text">
          &copy; {currentYear} Works Limited.All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
