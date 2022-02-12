import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import styled from "styled-components";

const HeaderStyles = styled.header`
  z-index:11111;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: white;
  //border-bottom: 1px solid var(--mediumSlateBlue);
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .nav_drop_menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 3rem;
  }
  nav ul li {
    position: relative;
    display: inline-block;
    margin: 0 0.5rem;
    .main {
      cursor: pointer;
      font-size: 1.6rem;
      font-weight: 500;
      display: inline-block;
      padding: 0.5rem 1rem;
      color: var(--light-blue);
    }

    &:hover {
      .main {
        text-decoration: underline;
      }
      ul {
        opacity: 1;
        visibility: visible;
      }
    }
  }
  .navMenu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .logo {
    color: var(--dark-blue);
    font-weight: 700;
    font-size: 3rem;
  }
  .menuIcon,
  .closeIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 10px;
    padding: 3px;
    svg {
      color: var(--dark-blue);
    }
    &:hover {
      background-color: #8080803b;
    }
  }

  .drop_menu {
    cursor: pointer;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 3rem;
    left: -1rem;
    box-shadow: 0 0 10px gray;
    background-color: white;
    border-radius: 8px;
    width: 22rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease-in-out;

    li {
      .submenu {
        transition: width 200ms ease-in;
        font-size: 1.6rem;
        font-weight: 500;
        display: inline-block;
        padding: 0.5rem 1rem;
        color: var(--light-blue);
      }
      &:hover {
        background-color: var(--orange);
        font-weight: 900;
        border-radius: 4px;
      }
    }
  }
  .closeIcon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  @media only screen and (max-width: 1050px) {
    z-index:1111111;
    .logo {
      font-size: 2.5rem;
    }
    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      width: 90%;
      max-width: 250px;
      top: 0;
      right: 0%;
      background-color: var(--orange);
      height: 100vh;
      z-index: 100;
      transform: translateX(100%);
      transition: 0.3s ease;
      overflow: hidden;
    }

    nav.open {
      transform: translateX(0%);
    }
    nav ul li {
      display: block;
      text-align: right;
      width: 100%;
      margin: 0%.5rem 0;
      a {
        display: block;
        width: 100%;
      }
      .drop_menu{
        position:static;
        display:none;
        li{
          a{
            color:white;
          }
        }
      }
      &:checked {
      .main {
        text-decoration: underline;
      }
      ul {
        opacity: 1;
        visibility: visible;
        display:block;
      }
    }
    }
  }
`;

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:1050px)").matches);
    });
    setIsMobile(window.matchMedia("(max-width:1050px)").matches)
  }, []);
  return (
    <>
      <HeaderStyles >
        <div className="container">
          <div className="navigation">
            <h3 className="logo">Respro academy</h3>
            <div className="navMenu">
              <nav className={isMobile && isNavOpen ? "open" : "navN"}>
                {isMobile && (
                  <div
                    className="closeIcon"
                    tabIndex="0"
                    role="button"
                    onClick={() => setIsNavOpen(false)}
                    onKeyDown={() => setIsNavOpen(false)}
                  >
                    <FiX />
                  </div>
                )}
                <ul>
                  <li>
                    <Link  href="/">
                      <span className="main">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/Training">
                    <span className="main">Training</span>
                    </Link>
                    <ul className="drop_menu">
                      <li>
                        <Link href="/english">
                        <span className="submenu">English</span>
                        </Link>
                      </li>
                      <li>
                        <Link  href="/english">
                        <span className="submenu">Technology</span>  
                        </Link>
                      </li>
                      <li>
                        <Link  href="/english">
                       <span className="submenu"> Corporate training</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link  href="/placements">
                    <span className="main">Placements</span>
                    </Link>
                    <ul className="drop_menu">
                      <li>
                        <Link  href="/english">
                        <span className="submenu">Technical</span>
                        </Link>
                      </li>
                      <li>
                        <Link  href="/english">
                        <span className="submenu"> Non-Technical </span> 
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link  href="/knowledge">
                    <span className="main">Knowledge</span>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/Team">
                    <span className="main">Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/AboutUs">
                    <span className="main">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link  href="/Contact" smooth>
                    <span className="main">Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {isMobile && (
                <div
                  className="menuIcon"
                  tabIndex="0"
                  role="button"
                  onClick={() => setIsNavOpen(true)}
                  onKeyDown={() => setIsNavOpen(true)}
                >
                  <FiMenu />
                </div>
              )}
            </div>
          </div>
        </div>
      </HeaderStyles>
    </>
  );
};

export default Nav;
