import React, { Component } from "react";

import Socials from "../item/socials";

import Links from "../../datastore/links.json";

export default class Header extends Component {
  state = {
    links: Links,
  };

  componentDidMount() {
    // Configure toggle for mobile
    const toggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (toggle && navMenu)
      toggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });

    // Configure active scrolling for header
    document.addEventListener("scroll", this.updateHeader);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateHeader);
  }

  render() {
    const { links } = this.state;

    return (
      <header className="header-lg">
        <nav className="nav grid">
          <div>
            <a href="#top" className="nav_logo">
              Darnell
            </a>
          </div>

          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list">
              {links.map((link, index) => (
                <li key={index} className="nav_item">
                  <a
                    href={"#" + link.link}
                    className={"nav_link" + (link.active ? " active" : "")}
                    onClick={() => this.setActiveLink(link)}
                  >
                    {link.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Socials />

          <div className="nav_toggle" id="nav-toggle">
            <i className="bx bx-menu" />
          </div>
        </nav>
      </header>
    );
  }

  setActiveLink = (linkItem) => {
    // Set new active link
    var linksCopy = this.state.links.slice();
    var indexOld = linksCopy.findIndex((link) => link.active);
    var indexNew = linksCopy.findIndex((link) => link.link === linkItem.link);

    linksCopy[indexOld].active = false;
    linksCopy[indexNew].active = true;

    // Remove mobile menu
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");

    this.setState({ links: linksCopy });
  };

  updateHeader = () => {
    var ticking = false;
    var scrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.updateHeaderByScroll(scrollPosition);

        ticking = false;
      });

      ticking = true;
    }
  };

  updateHeaderByScroll = (scrollPos) => {
    // Info: https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
    var sectionPos, active;
    var headerLinks = this.state.links.slice();

    // Find current active section based upon scroll position
    for (let i = 0; i < headerLinks.length; i++) {
      sectionPos =
        document.getElementById(headerLinks[i].link).offsetTop +
        document.getElementById(headerLinks[i].link).offsetHeight -
        250;

      if (scrollPos < sectionPos) {
        active = headerLinks[i].link;
        break;
      }
    }

    // Retrieve Indexes
    const toActiveIndex = headerLinks.findIndex(
      (header) => header.link === active
    );
    const fromActiveIndex = headerLinks.findIndex(
      (header) => header.active === true
    );

    // If Indexes are different, update them
    if (toActiveIndex !== fromActiveIndex) {
      headerLinks[fromActiveIndex].active = false;
      headerLinks[toActiveIndex].active = true;

      this.setState({ links: headerLinks });
    }
  };
}
