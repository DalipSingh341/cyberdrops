import React from 'react'
import { Container } from 'react-bootstrap'
import   footer_umb from "../assets/images/png/footer_umb.png"
import { Discord, M, Twitter, Yatch } from './Icons';
import { Link } from 'react-router-dom';
import blur1 from "../assets/images/png/blur_image.png";


const Footer = () => {
  return (
    <div className="pt-md-5 pb-4 position-relative">
      <img className="blur8 position-absolute w-50" src={blur1} alt="blur1" />

      <Container className="pt-md-5 py-3">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-center"
        >
          <img className="" src={footer_umb} alt="footer_umb" />
        </div>
        <h2
          data-aos="fade-left"
          data-aos-duration="1000"
          className="ff_Lato fs_36 fw_600 fc_orange  text-center my-2"
        >
          Cyber Drops
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="ff_Lato fs_16 fw_400 fc_white  text-center my-2 mx-auto text-center footer_para1"
        >
          Viverra metus viverra rhoncus eget quam suspendisse diam amet, nisl.
          Mattis maecenas libero lacinia accumsan amet.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="d-flex gap-3 align-items-center justify-content-center my-3"
        >
          <Link className="d-inline-block yatch_circle text-center">
            <Yatch />
          </Link>
          <Link className="d-inline-block yatch_circle text-center">
            <Discord />
          </Link>
          <Link className="d-inline-block yatch_circle text-center">
            <Twitter />
          </Link>
          <Link className="d-inline-block yatch_circle text-center">
            <M />
          </Link>
        </div>
      </Container>
      <h2
        data-aos="fade-right"
        data-aos-duration="1000"
        className="ff_Lato fs_16 fw_400 fc_white  footer_text1 text-center pt-4"
      >
        Copyright By 2022
      </h2>
      <Container></Container>
    </div>
  );
}

export default Footer
