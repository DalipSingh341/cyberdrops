import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Mint6 = () => {
  return (
    <div>
      <Container className="py-3 py-md-5">
        <h2 className="ff_Lato fw_700 fc_white fs_48 mb-3 text-center">
          How it <span className="fc_orange">works </span>
        </h2>
        <Row>
          <Col
            data-aos="zoom-out"
            data-aos-duration="1000"
            md={6}
            lg={3}
            className="my-3 z_index_10"
          >
            <div className="mint_card1 d-flex flex-column align--items-center  mx-auto">
              <div className="mint_circle1 d-flex align-items-center justify-content-center mx-auto mt-3">
                <h2 className="ff_Lato fw_700 fc_white fs_28 mb-0  mint_text1">
                  01
                </h2>
              </div>

              <h2 className="ff_Lato fw_700 fc_white fs_20 mb-0 text-center py-3">
                Mint NFT
              </h2>
              <p className="ff_Lato fw_400 fc_white fs_16 mb-0 text-center mx-auto mint_para1 mt-1 ">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col
            data-aos="zoom-out"
            data-aos-duration="1000"
            md={6}
            lg={3}
            className="my-3 z_index_10"
          >
            <div className="mint_card1 d-flex flex-column align--items-center  mx-auto">
              <div className="mint_circle1 d-flex align-items-center justify-content-center mx-auto mt-3">
                <h2 className="ff_Lato fw_700 fc_white fs_28 mb-0  mint_text1">
                  02
                </h2>
              </div>

              <h2 className="ff_Lato fw_700 fc_white fs_20 mb-0 text-center py-3">
                Verify NFT Ownership
              </h2>
              <p className="ff_Lato fw_400 fc_white fs_16 mb-0 text-center mx-auto mint_para1 mt-1 ">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col
            data-aos="zoom-out"
            data-aos-duration="1000"
            md={6}
            lg={3}
            className="my-3 z_index_10"
          >
            <div className="mint_card1 d-flex flex-column align--items-center  mx-auto">
              <div className="mint_circle1 d-flex align-items-center justify-content-center mx-auto mt-3">
                <h2 className="ff_Lato fw_700 fc_white fs_28 mb-0  mint_text1">
                  03
                </h2>
              </div>

              <h2 className="ff_Lato fw_700 fc_white fs_20 mb-0 text-center py-3">
                Link API to your account
              </h2>
              <p className="ff_Lato fw_400 fc_white fs_16 mb-0 text-center mx-auto mint_para1 mt-1 ">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col
            data-aos="zoom-out"
            data-aos-duration="1000"
            md={6}
            lg={3}
            className="my-3 z_index_10"
          >
            <div className="mint_card1 d-flex flex-column align--items-center  mx-auto">
              <div className="mint_circle1 d-flex align-items-center justify-content-center mx-auto mt-3">
                <h2 className="ff_Lato fw_700 fc_white fs_28 mb-0  mint_text1">
                  04
                </h2>
              </div>

              <h2 className="ff_Lato fw_700 fc_white fs_20 mb-0 text-center py-3">
                Passive Income for life
              </h2>
              <p className="ff_Lato fw_400 fc_white fs_16 mb-0 text-center mx-auto mint_para1 mt-1 ">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mint6
