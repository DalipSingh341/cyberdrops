import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import umbrella1 from "../assets/images/png/yellow_wihte_umbrella.png"
import blur1 from "../assets/images/png/blur_image.png"

const Explore1 = () => {
  return (
    <>
      <div className='position-relative'>
        <img  className='blur1 position-absolute w-50' src={blur1} alt="blur1" />

        <Container className="pt-4 py-md-5 ">
          <Row className="align-items-center py-5">
            <Col data-aos="fade-right" data-aos-duration="800" lg={6} className='order-last order-lg-first'>
              <h2 className="ff_Lato fs_72 fw_800 fc_white mb-0 explore_text1 mb-4">
                Welcome to <span className="fc_orange"> Cyber Drops</span>
              </h2>
              <p className="ff_Lato fs_18 fw_400 fc_white mb-0 explore_para1 mb-2 mb-md-5 ">
                Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
                tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit
                nec curabitur purus. Ullamcorper mattis risus suspendisse
                pretium tristique.
              </p>
              <Link className="ff_Lato fs_20 fw_600 fc_white mb-0 d-inline-block explore_btn mt-3 ">
                Explore Now
              </Link>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="800" lg={6} className='order-first order-lg-last'>
              <div className="text-center my-3 my-md-0">
                <img
                  className="text-center  w-75 w_100 umbrella_1"
                  src={umbrella1}
                  alt="umbrella1"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Explore1
