import { useState, useEffect } from "react";
// import ThemeToggle from './ThemeToggle.jsx';

import "../css/navigation.css";

export default function Navigation() {
  const form = "#form";
  const [isMobileNav, setIsMobileNav] = useState(false);
  // const [click, setClick] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  function handleNavToggleButton() {
    console.log("nav toggle working");
    setIsMobileNav(!isMobileNav);
  }
  const handleMenuToggle = () => setIsMobileNav(!isMobileNav);

  useEffect(() => {
    //function to hide navigation after scroll position is greater 2000px and display it again when scroll position is  less than 2000px
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > 2000) {
        setPreviousScrollPosition(currentScrollPosition);
        setIsVisible(false);
      } else if (currentScrollPosition < 2000) setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <>
      {isVisible && (
        <header className="navbar header">
          <div className="nav-container">
            <div className="social-media-icons">
              <a
                className="top-icon-social"
                aria-label="visit github page"
                href="/"
                target="_blank"
              >
                <svg
                  xmlnsXlink="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <title>GitHub</title>{" "}
                  <path
                    d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                    fill="#fff"
                  />
                </svg>
              </a>

              <a
                className="top-icon-social"
                aria-label="visit twitter page"
                href="/"
                target="_blank"
              >
                <svg
                  fill="#DC7633"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.9999"
                  height="30"
                  version="1.0"
                >
                  <defs>
                    <path
                      d="M 11.972656 11.972656 L 359.222656 11.972656 L 359.222656 359.222656 L 11.972656 359.222656 Z M 11.972656 11.972656 "
                      fill="#000000"
                    ></path>
                  </defs>
                  <g>
                    <path
                      d="M 185.597656 359.222656 C 89.675781 359.222656 11.972656 280.984375 11.972656 185.597656 C 11.972656 90.210938 89.675781 11.972656 185.597656 11.972656 C 281.519531 11.972656 359.222656 89.675781 359.222656 185.597656 C 359.222656 281.519531 280.984375 359.222656 185.597656 359.222656 Z M 185.597656 22.691406 C 95.570312 22.691406 22.691406 95.570312 22.691406 185.597656 C 22.691406 275.625 95.570312 348.503906 185.597656 348.503906 C 275.625 348.503906 348.503906 275.625 348.503906 185.597656 C 348.503906 95.570312 275.089844 22.691406 185.597656 22.691406 Z M 185.597656 22.691406 "
                      fillOpacity="1"
                      fillRule="nonzero"
                      fill="#ffffff"
                    ></path>
                  </g>
                  <g transform="translate(85, 75)">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      version="1.1"
                      height="205"
                      width="205"
                    >
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        fill="#ffffff"
                      ></path>
                    </svg>{" "}
                  </g>
                </svg>
              </a>
              {/* <ThemeToggle /> */}
            </div>
            <nav className="desktop-nav nav">
              <ul className="desktop-navItems">
                <li>
                  <a className="desktop-navLink" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="desktop-navLink" href="/about">
                    About
                  </a>
                </li>
                <li>
                  <a className="desktop-navLink" href={form}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <button
              className="nav-toggler"
              role="navigation"
              aria-label="menu"
              onClick={handleNavToggleButton}
            >
              {isMobileNav ? (
                <img
                  src="/assets/img/close-icon.png"
                  alt="close navigation icon"
                />
              ) : (
                <img
                  src="/assets/img/hamburger-icon.png"
                  alt="open navigation icon"
                />
              )}
            </button>
          </div>

          {/* display mobile nav if isMobileNav is true else hide mobile nav */}
          {isMobileNav && (
            <nav className="mobile-nav nav">
              <ul className="display-mobile-nav">
                <li>
                  {" "}
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="mobile-navLink"
                    onClick={handleMenuToggle}
                    href={form}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </header>
      )}
    </>
  );
}
