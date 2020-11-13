import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studies" exact>
                  Case Studies
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/approach" exact>
                  Approach
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/about-us" exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <a href="mailto:Info@Westnovo.com">Info@Westnovo.com</a>
                </li>
                {/* <li>
                  <NavLink to="/audit" exact>
                    Get a free audit
                  </NavLink>
                </li> */}
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarter</li>
                <li>Grev Turegatan 7</li>
                <li>114 46 Stockholm</li>
                <li>Sweden</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>
                  <a href="tel:+465555632">+46 (0) 70 555 56 32</a>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>
                  <NavLink to="/cookies" exact>
                    Privacy & Cookies
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
