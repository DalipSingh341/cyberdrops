import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import blur1 from "../assets/images/webp/blur_image.webp";
import umb_pos1 from "../assets/images/webp/umbrella_blur6.webp";


const Egastus9 = () => {
  return (
    <div className="position-relative">
      <img className="blur7 position-absolute w-50" src={blur1} alt="blur1" />
      <img
        className="umbrella_position6 position-absolute d-none d-md-block "
        src={umb_pos1}
        alt="umb_pos1"
      />

      <Container className="py-3 py-md-5 px-md-5">
        <h2 className="ff_Lato fs_48 fw_700 fc_orange mb-0 text-center mb-5">
          FAQ<span className="fc_white">’s</span>
        </h2>
        <Row className="align-items-center justify-content-center">
          <Col lg={9}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item
                data-aos="fade-right"
                data-aos-duration="1500"
                eventKey="0"
                className="bg_black mb-1 "
              >
                <Accordion.Header className=" pt-4 pb-4 px-3 px-sm-5">
                  <h2 className="ff_Lato mb-0 fs_20 fw_500 fc_white">
                    Egestas scelerisque duis quis aliquet. Consectetur?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className=" pb-4 px-3 px-sm-5">
                  <p className="ff_Lato mb-0 fs_16 fw_400 fc_white accordian_para1 w-100">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-left"
                data-aos-duration="1500"
                eventKey="1"
                className="bg_black mt-4"
              >
                <Accordion.Header className="fc_white pt-4 pb-4 px-3 px-sm-5">
                  <h2 className="ff_Lato mb-0 fs_20 fw_500 fc_white">
                    Ac nec enim amet, leo lorem quis neque vitae aliquet?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="fc_white pb-4 px-3 px-sm-5">
                  <p className="ff_Lato mb-0 fs_16 fw_400 fc_white accordian_para1 w-100">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-right"
                data-aos-duration="1500"
                eventKey="2"
                className="bg_black mt-4"
              >
                <Accordion.Header className="fc_white  pt-4 pb-4 px-3 px-sm-5">
                  <h2 className="ff_Lato mb-0 fs_20 fw_500 fc_white">
                    Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                    donec?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="fc_white pb-4 px-3 px-sm-5 ">
                  <p className="ff_Lato mb-0 fs_16 fw_400 fc_white accordian_para1 w-100">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-left"
                data-aos-duration="1500"
                eventKey="3"
                className="bg_black mt-4"
              >
                <Accordion.Header className="fc_white pt-4 pb-4 px-3 px-sm-5">
                  <h2 className="ff_Lato mb-0 fs_20 fw_500 fc_white">
                    Porta amet tortor nec pulvinar urna. Et blandit sit id?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="fc_white pb-4 px-3 px-sm-5">
                  <p className="ff_Lato mb-0 fs_16 fw_400 fc_white accordian_para1 w-100">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                data-aos="fade-right"
                data-aos-duration="1500"
                eventKey="4"
                className="bg_black mt-4"
              >
                <Accordion.Header className="fc_white pt-4 pb-4 px-3 px-sm-5">
                  <h2 className="ff_Lato mb-0 fs_20 fw_500 fc_white">
                    Tellus hendrerit fermentum ut hendrerit ac vestibulum?
                  </h2>
                </Accordion.Header>
                <Accordion.Body className="fc_white pb-4 px-3 px-sm-5">
                  <p className="ff_Lato mb-0 fs_16 fw_400 fc_white accordian_para1 w-100">
                    Viverra metus viverra rhoncus eget quam suspendisse diam
                    amet, nisl. Mattis maecenas libero lacinia accumsan amet.
                    Quam quam egestas feugiat amet. Ut nibh vulputate.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Egastus9;
