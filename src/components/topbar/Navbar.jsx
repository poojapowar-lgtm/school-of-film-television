import { IoIosCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import "./Navbar.css";
import { SocialIcon } from "react-social-icons";
import socialIconsData from "../reuseable_components/socialIconsData";

const Navbar = ({ open, onClose }) => {
  return (
    <div className={`nav-overlay ${open ? "show" : ""}`}>
      <nav className="navbar">
        <button className="close-btn" onClick={onClose}>
          <IoIosCloseCircleOutline />
        </button>

        {/* Logos */}
        <div className="nav-logos">
          <img src="/assets/icons/film_logo.webp" alt="Logo 1" />
          <img src="/assets/icons/mit_logo_black.webp" alt="Logo 2" />
        </div>

        {/* Menu */}
        <ul className="nav-menu">
          <li>
            <NavLink to="/" onClick={onClose}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={onClose}>About MIT-ADT</NavLink>
          </li>

          <li>
            <NavLink to="/academics" onClick={onClose}>Academics</NavLink>
          </li>

          <li>
            <span>Courses</span> 
            <MdArrowDropDown className="dropdown-icon"/>
            <ul className="submenu">
              <li>
                <NavLink to="/courses/bsc-filmmaking" onClick={onClose}>
                  B.Sc in Filmmaking
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses/msc-filmmaking" onClick={onClose}>
                  M.Sc in Filmmaking
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses/ba-screen-acting" onClick={onClose}>
                  B.A Screen Acting
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/admission" onClick={onClose}>Admissions</NavLink>
          </li>

          <li>
            <NavLink to="/award-stories" onClick={onClose}>
              Award Winning Stories
            </NavLink>
          </li>

          <li>
            <NavLink to="/short-film" onClick={onClose}>
              Short Films / Alumni Works
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={onClose}>Contact Us</NavLink>
          </li>
        </ul>

        <hr style={{maxWidth:"350px"}}/>

<div className="bnr-bottom">
        {/* Footer */}
        <p>Follow us on</p>

        <div className="footer-social-icons" id="nav-social">
          {socialIconsData.map(({ url, network, bgColor }, index) => (
            <SocialIcon
              key={index}
              className="foot-social-icons"
              url={url}
              network={network}
              bgColor={bgColor}
            />
          ))}
        </div>

        <h5>Welcome to MIT-ADT University</h5>
        <address className="bnr-address">
          <p>Rajbaug Campus, Loni Kalbhor, Pune - 412201</p>
          <p>Maharashtra, India</p>
          <span>09595124234</span>
          <br />
          <span>info@mituniversity.edu.in</span>
        </address>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;
