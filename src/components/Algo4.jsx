import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import algo1 from "../assets/images/webp/algo1.webp";
import algo2 from "../assets/images/webp/algo2.webp";
import algo3 from "../assets/images/webp/algo3.webp";
import blur1 from "../assets/images/webp/blur_image.webp";


const Algo4 = () => {
  return (
    <div className="position-relative">
      <Container>
        <Row className="py-3 py-md-5 align-items-center justify-content-between">
          <Col
            data-aos="zoom-in"
            data-aos-duration="1000"
            lg={6}
            className="my-2 my-lg-0"
          >
            <h2 className="ff_Lato fs_48 fw_700 fc_white mb-3">
              Our <span className="fc_orange">Algo</span>
            </h2>
            <p className="ff_Lato fs_18 fw_400 fc_white mb-0 mt-1 Algo_para1">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>
          <Col lg={5} className="my-2 my-lg-0">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="box_2 box_1 w-100 my-3 "
                >
                  <img className="w-100 " src={algo1} alt="algo1" />
                </div>
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="mt-4 box_2 box_1 w-100 my-3"
                >
                  <img className="w-100" src={algo2} alt="algo2" />
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="ms-4 box_1 w-100 my-3"
              >
                <img className="w-100" src={algo3} alt="algo3" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="blur4 position-absolute w-50" src={blur1} alt="blur1" />
    </div>
  );
};

export default Algo4;
