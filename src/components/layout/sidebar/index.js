import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/future/image";
import SimpleBar from "simplebar-react";

//import logo
import logoSm from "/public/images/logo-sm.png";
import logoDark from "/public/images/logo-dark.png";
import logoLight from "/public/images/logo-light.png";

//Import Components
import VerticalLayout from "./VerticalLayout";
import { Container } from "reactstrap";

const Sidebar = () => {
  
  useEffect(() => {
    var verticalOverlay = document.getElementsByClassName("vertical-overlay");
    if (verticalOverlay) {
      verticalOverlay[0].addEventListener("click", function () {
        document.body.classList.remove("vertical-sidebar-enable");
      });
    }
  }, []);

  const addEventListenerOnSmHoverMenu = () => {
    // add listener Sidebar Hover icon on change layout from setting
    if (document.documentElement.getAttribute("data-sidebar-size") === "sm-hover") {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover-active");
    } else {
      document.documentElement.setAttribute("data-sidebar-size", "sm-hover");
    }
  };

  return (
    <>
      <div className="app-menu navbar-menu">
        <div className="navbar-brand-box">
          <Link href="/">
            <a className="logo logo-dark">
              <span className="logo-sm">
                {/* <img src={logoSm} alt="" height="22" /> */}
                <Image
                  src={logoSm}
                  height={22}
                  //   width={120}
                  placeholder="blur"
                  className="w-auto"
                  // layout="responsive"
                  alt="logo"
                />
              </span>
              <span className="logo-lg">
                <Image
                  src={logoDark}
                  height={17}
                  //   width={120}
                  placeholder="blur"
                  className="w-auto"
                  // layout="responsive"
                  alt="logo dark"
                />
                {/* <img src={logoDark} alt="" height="17" /> */}
              </span>
            </a>
          </Link>

          <Link href="/">
            <a className="logo logo-light">
              <span className="logo-sm">
                <Image
                  src={logoSm}
                  height={22}
                  //   width={120}
                  placeholder="blur"
                  className="w-auto"
                  // layout="responsive"
                  alt="logo light"
                />
                {/* <img src={logoSm} alt="" height="22" /> */}
              </span>
              <span className="logo-lg">
                <Image
                  src={logoLight}
                  height={17}
                  placeholder="blur"
                  className="w-auto"
                  alt="logo light"
                />
                {/* <img src={logoLight} alt="" height="17" /> */}
              </span>
            </a>
          </Link>
          <button
            onClick={addEventListenerOnSmHoverMenu}
            type="button"
            className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>
        <>
          <SimpleBar id="scrollbar" className="h-100">
            <Container fluid>
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <VerticalLayout />
              </ul>
            </Container>
          </SimpleBar>
          <div className="sidebar-background"></div>
        </>
      </div>
      <div className="vertical-overlay"></div>
    </>
  );
};

export default Sidebar;
