import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import './header.scss';

class Header extends Component {
  state = {
    menuWidth: "250px"
  };

  componentDidMount() {
    this.setState({
      navbarHeight: document.querySelector(".Navbar").offsetHeight
    });

    this.setMenu();
    window.onresize = () => {
      this.setMenu();
    };
  }

  setMenu() {
    let sideMenu = document.querySelector(".side-menu");

    if (document.body.clientWidth <= 896) {
      sideMenu.style.width = "0px";
    } else {
      document.querySelector(".side-menu").style.width = "100%";
    }
  }

  render() {
    return (
      <div className="Header">
        <nav className="Navbar">
          <span className="open-slide">
            <button
              className="menu-toggle"
              id="menu-toggle"
              onClick={() => {
                let menuButton = document.getElementById("menu-toggle");
                let sideMenu = document.querySelector(".side-menu");
                let menuBackground = document.querySelector(".open-slide");

                if (!menuButton.classList.contains("is-active")) {
                  //open-menu:
                  menuBackground.style.background = '#00000000';
                  menuButton.classList.add("is-active");
                  sideMenu.style.width = this.state.menuWidth;
                } else if (menuButton.classList.contains("is-active")) {
                  //close menu:
                  menuBackground.style.background = '#455A64';
                  menuButton.classList.remove("is-active");
                  sideMenu.style.width = "0px";
                }
              }}
            >
              Menu
            </button>
          </span>

          <ul className="navbar-nav side-menu">
            <li className="navbar-item">
              <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/projects">Projects</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/blog">Blog</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/photographs">Photographs</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
