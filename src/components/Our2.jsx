import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import our1 from "../assets/images/png/our1.png"
import our2 from "../assets/images/png/our2.png"
import our_combo from "../assets/images/webp/our_combo.webp"
import { Link } from 'react-router-dom'
import blur1 from "../assets/images/webp/blur_image.webp";

const Our2 = () => {
  return (
    <div className='position-relative'>
      <img className="blur2 position-absolute w-50" src={blur1} alt="blur1" />

      <Container className="py-md-5 py-2">
        <Row className="py-md-5 align-items-center py-2">
          <Col
            data-aos="zoom-in"
            data-aos-duration="800"
            lg={7}
            className="position-relative  my-3 my-md-0 "
          >
            <div className='ps-lg-5'>
              <img
                className=" our_combo"
                src={our_combo}
                alt="our_combo my-3 my-md-0"
              />
            </div>
            {/* <div className="OurMain">
              <div className="our1">
                <img className=" w-50 radius_48 " src={our1} alt="our1" />
              </div>
              <div className="our2">
                <img
                  className="w-50 radius_48 umbrella_2"
                  src={our2}
                  alt="our2"
                />
              </div>
            </div> */}
          </Col>
          <Col data-aos="zoom-in" data-aos-duration="800" lg={5}>
            <div>
              <h2 className="ff_Lato fc_white fs_48 fw_700 mb-3 ">
                Our <span className="fc_orange">Mission</span>
              </h2>
              <p className="ff_Lato fc_white fs_18 fw_400  our_para1 mt-1 mb-3 mb-md-5">
                We understand that one of the biggest concerns for early-stage
                investors is that it can quickly become stressful, overwhelming,
                and especially extremely time consuming. It isn’t easy to
                balance a full time job, family, and an active investment
                portfolio, especially when just starting out.
              </p>
              <Link className="ff_Lato fc_white fs_20 fw_600 mb-0 d-inline-block read_more_btn mt-2 explore_btn">
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Our2
