import React from 'react'
import { Col, Row, Container } from "react-bootstrap";
import play_bit1 from "../assets/images/svg/play_bit1.svg"
import play_bit2 from "../assets/images/svg/play_bit2.svg"
import play_bit3 from "../assets/images/svg/play_bit3.svg"
import play_bit4 from "../assets/images/svg/play_bit4.svg"
import blur1 from "../assets/images/webp/blur_image.webp";


const Partners = () => {
  return (
    <>
      <div className="py-3  pb-md-5 position-relative">
        <Container>
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="ff_Lato fs_48 fw_700 fc_white mb-0 text-center pb-3 pb-lg-0"
          >
            Part<span className="fc_orange">ners</span>
          </h2>
        </Container>
        <div className="partners_bg pt-3 pt-md-5 pb-2 position-relative">
          <Container>
            {" "}
            {/* <Row className="py-5 align-items-center ">
            <Col lg={4} className="py-5">
              <div className="part_card1  d-flex flex-column align-items-center">
                <div className="Partner_box_1 mb-4 cp">
                  <img className="cp w-100 " src={play_bit1} alt="play_bit1" />
                </div>
                <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">Playbit</h2>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                <Col  md={6} lg={4} className="py-5">
                  <div className="part_card1  d-flex flex-column align-items-center">
                    <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                      <img className="w-100" src={play_bit2} alt="play_bit2" />
                    </div>
                    <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                      24 Capital
                    </h2>
                  </div>
                </Col>
                <Col md={6} lg={4} className="py-5">
                  <div className="part_card1  d-flex flex-column align-items-center">
                    <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                      <img className=" w-100" src={play_bit3} alt="play_bit3" />
                    </div>
                    <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                      TradingHive
                    </h2>
                  </div>
                </Col>
                <Col md={6} lg={4} className="py-5">
                  <div className="part_card1  d-flex flex-column align-items-center">
                    <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                      <img
                        className=" w-100"
                        src={play_bit4}
                        alt="play_bit4"
                      />
                    </div>
                    <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                      Focus Group Equities
                    </h2>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
            <div className="d-flex flex-column justify-content-center flex-md-row align-items-center  py-md-5 gap-4 ">
              <div className="d-flex flex-column flex-lg-row gap-4 py-md-5 ">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="part_card1  d-flex flex-column align-items-center  pt-2 pt-md-4"
                >
                  <div className="Partner_box_1 mb-4 cp">
                    <img
                      className="cp w-100 "
                      src={play_bit1}
                      alt="play_bit1"
                    />
                  </div>
                  <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                    Playbit
                  </h2>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="part_card1  d-flex flex-column align-items-center pt-4"
                >
                  <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                    <img className="w-100" src={play_bit2} alt="play_bit2" />
                  </div>
                  <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                    24 Capital
                  </h2>
                </div>
              </div>
              <div className="d-flex flex-column flex-lg-row gap-4 py-md-5">
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="part_card1  d-flex flex-column align-items-center pt-4"
                >
                  <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                    <img className=" w-100" src={play_bit3} alt="play_bit3" />
                  </div>
                  <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                    TradingHive
                  </h2>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="part_card1  d-flex flex-column align-items-center pt-4"
                >
                  <div className="Partner_box_1 Partner_box_2 mb-4 cp">
                    <img className=" w-100" src={play_bit4} alt="play_bit4" />
                  </div>
                  <h2 className="ff_Lato fs_18 fw_700 fc_black mb-0 ">
                    Focus Group Equities
                  </h2>
                </div>
              </div>
            </div>
          </Container>
          <h2 className="ff_Lato fs_18 fw_700 fc_orange mb-0 text-center business_text pt-4  pb-5">
            For business and collaborations, contact us team@cyberdrops.finance
          </h2>
          <img
            className="blur3 position-absolute w-50"
            src={blur1}
            alt="blur1"
          />
        </div>
      </div>
    </>
  );
}

export default Partners
