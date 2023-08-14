import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import umb_pos1 from "../assets/images/png/umbrella_blur3.png";
import umb_pos2 from "../assets/images/png/umbrella_blur4.png";
import umb_pos3 from "../assets/images/png/umbrella_blur5.png";
import road1 from "../assets/images/svg/road_umb1.svg";
import road2 from "../assets/images/svg/road_umb2.svg";
import road3 from "../assets/images/svg/road_umb3.svg";
import road4 from "../assets/images/svg/road_umb4.svg";
import road5 from "../assets/images/svg/road_umb5.svg";
import road6 from "../assets/images/svg/road_umb6.svg";
import road7 from "../assets/images/svg/road_umb7.svg";
import road8 from "../assets/images/svg/road_umb8.svg";

const RoadMap8 = () => {
  return (
    <>
      <Container className="py-3 py-md-5">
        <h2 className="ff_Lato fs_48 fw_700 fc_white  mb-0 text-center mb-5">
          Road<span className="fc_orange">Map</span>
        </h2>
      </Container>
      <div className="position-relative roadmap_bg">
        <img
          className="umbrella_position3 position-absolute d-none d-md-block "
          src={umb_pos1}
          alt="umb_pos1"
        />
        <img
          className="umbrella_position4 position-absolute d-none d-md-block "
          src={umb_pos2}
          alt="umb_pos2"
        />
        <img
          className="umbrella_position5 position-absolute d-none d-md-block "
          src={umb_pos3}
          alt="umb_pos3"
        />

        <Container className="py-5">
          <Row className="timeliner ">
            <Col lg={6}></Col>
            <Col lg={6} className="position-relative mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative">
                <img
                  className="road_umb1_poa position-absolute"
                  src={road1}
                  alt="road1"
                />
                <div className="march_left_line march_circle position-relative ms-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    March 2022
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative ">
                <img
                  className="road_umb2_poa position-absolute"
                  src={road2}
                  alt="road2"
                />
                <div className="march_left_line2 march_circle2 position-relative text-end me-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    March 2022
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    1000 Drops Launch on Ethereum
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>

            <Col lg={6} className=""></Col>

            <Col lg={6} className="mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative">
                <img
                  className="road_umb1_poa position-absolute"
                  src={road3}
                  alt="road3"
                />
                <div className="march_left_line3 march_circle3 position-relative ms-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    March 2022
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Creation of Treasury
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative ">
                <img
                  className="road_umb2_poa position-absolute"
                  src={road4}
                  alt="road4"
                />
                <div className="march_left_line4 march_circle4 position-relative text-end me-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    April 2022
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Our First Airdrop
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>

            <Col lg={6}></Col>
            <Col lg={6} className="mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative">
                <img
                  className="road_umb1_poa position-absolute"
                  src={road5}
                  alt="road5"
                />
                <div className="march_left_line5 march_circle5 position-relative ms-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    June 2022
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Major Collabs
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-5 pb-5">
              <div className="d-flex justify-content-center position-relative ">
                <img
                  className="road_umb2_poa position-absolute"
                  src={road6}
                  alt="road6"
                />
                <div className="march_left_line2 march_circle2 position-relative text-end me-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    Sometime in Q3
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Cyber Celebs come on Ethereum
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>

            <Col lg={6}></Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center position-relative">
                <img
                  className="road_umb1_poa position-absolute"
                  src={road7}
                  alt="road7"
                />
                <div className="march_left_line6 march_circle6 position-relative ms-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    Sometime in Q3
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Streetwear + Merch
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex justify-content-center position-relative mt-5 pt-5">
                <img
                  className="road_umb2_poa position-absolute"
                  src={road8}
                  alt="road8"
                />
                <div className="march_left_line7 march_circle7 position-relative text-end me-5">
                  <h2 className="ff_Lato fs_24 fw_600 fc_white mb-3">
                    Sometime in Q4
                  </h2>
                  <p className="ff_Lato fs_16 fw_400 fc_white mb-0">
                    Enhanced Partnerships
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default RoadMap8;
