import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import fourUmb1 from "../assets/images/png/fourUmb1.png"
import fourUmb2 from "../assets/images/png/fourUmb2.png"
import fourUmb3 from "../assets/images/png/fourUmb3.png"
import fourUmb4 from "../assets/images/png/fourUmb4.png"
import blur1 from "../assets/images/png/blur_image.png";
import umb_pos1 from "../assets/images/png/umbrella_blur1.png";


const FourEmbrella5 = () => {
  return (
    <div className='position-relative'>
      <Container className="py-3 py-md-5">
        <Row className="align-items-center justify-content-between">
          <Col data-aos="zoom-in" data-aos-duration="1000" lg={5}>
            <Row className="position-relative">
              <Col md={6} className=" px-0">
                <img className="w-100" src={fourUmb1} alt="fourUmb1" />
              </Col>
              <Col md={6} className=" px-0">
                <img className="w-100" src={fourUmb2} alt="fourUmb2" />
              </Col>
              <Col md={6} className="four_transform px-0">
                <img className="w-100" src={fourUmb3} alt="fourUmb3" />
              </Col>
              <Col md={6} className="four_transform px-0">
                <img className="w-100" src={fourUmb4} alt="fourUmb4" />
              </Col>
            </Row>
          </Col>
          <Col data-aos="zoom-in" data-aos-duration="1000" lg={5}>
            <h2 className="ff_Lato fw_700 fc_white fs_48 mb-3">
              What <span className="fc_orange">we do</span>
            </h2>
            <p className="ff_Lato fw_400 fc_white fs_18 fourUmb_para1 mt-1" a>
              1000 Cyber Drops will be dropping on Ethereum in March 2022. Each
              and every Cyber Drop is uniquely hand crafted. This is just the
              beginning of our journey. Owning a Cyber Drop will unlock monthly
              airdrops and future governance rights in addition to our
              revolutionary algorithm. We strive to always bring innovation and
              keep BUILDing. Cyber Drops is a community driven project and
              always will be that way. That’s our promise.
            </p>
          </Col>
        </Row>
      </Container>
      <img className="blur5 position-absolute w-50" src={blur1} alt="blur1" />
      <img className="umbrella_position1 position-absolute d-none d-md-block " src={umb_pos1} alt="umb_pos1" />

    </div>
  );
}

export default FourEmbrella5
