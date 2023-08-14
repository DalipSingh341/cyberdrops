import React, { useState } from 'react'
import logo from "../assets/images/png/cyber_logo.png"
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Discord, M, Twitter, Yatch } from './Icons';
import { Icon } from "react-icons-kit";

import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import {Button} from "react-bootstrap";

const CyberNav = () => {
  const [nav, setNav] = useState(true)
  
    function shownav() {
      setNav(false);
      document.body.classList.add("overflow-hidden");
    }
    function hidenav() {
      setNav(true);
      document.body.classList.remove("overflow-hidden");
    }
  return (
    <div className="position-fixed z_100 w-100 top-0 bg_black">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <img src={logo} alt="logo" />
          <ul
            className={
              nav
                ? "d-flex nav_bar mb-0 ps-0 align-items-center"
                : "ps-0 d-flex nav_bar align-items-center show mb-0 gap-4"
            }
          >
            <li>
              {" "}
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_400 fc_white mb-0 d-inline-block home_text"
              >
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_400 fc_white mb-0 d-inline-block home_text"
              >
                About
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_400 fc_white mb-0 d-inline-block home_text"
              >
                Team
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_400 fc_white mb-0 d-inline-block home_text"
              >
                Roadmap
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_400 fc_white mb-0 d-inline-block home_text"
              >
                Partners
              </Link>{" "}
            </li>
            <li
              onClick={() => {
                setNav(true);
              }}
              className="d-flex gap-3 ms-lg-2"
            >
              <div className="yatch_circle text-center ">
                <Link className="d-inline-block ">
                  <Yatch />
                </Link>
              </div>
              <div className="yatch_circle text-center ">
                <Link className="d-inline-block ">
                  <Discord />
                </Link>
              </div>
              <div className="yatch_circle text-center ">
                <Link className="d-inline-block ">
                  <Twitter />
                </Link>
              </div>
              <div className="yatch_circle text-center ">
                <Link className="d-inline-block ">
                  <M />
                </Link>
              </div>
            </li>
         
            <li>
              <Link
                onClick={() => {
                  setNav(true);
                }}
                className="ff_Lato fs_16 fw_500 fc_white mb-0 d-inline-block connect_btn ms-lg-3"
              >
                Connect Wallet
              </Link>
            </li>
          </ul>
          <Button
            className="position-relative z-3 d-lg-none cross_btn"
            onClick={nav ? shownav : hidenav}
          >
            {" "}
            {nav ? <Icon icon={menu} size={50} /> : <Icon icon={x} size={50} />}
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CyberNav
