import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap'
import varun1 from "../assets/images/png/varun1.png"
import varun2 from "../assets/images/png/varun2.png"
import { Discord2, M2, Twitter2 } from './Icons'
import { Link } from 'react-router-dom'
import blur1 from "../assets/images/png/blur_image.png";
import umb_pos1 from "../assets/images/png/umbrella_blur2.png";



const Meet7 = () => {

    var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 2,
     arrows:true,
     slidesToScroll: 1,

     responsive: [
       {
         breakpoint: 1200,
         settings: {
           slidesToShow: 1,
           infinite: true,
         },
       },
     ],
   };

  return (
    <div className="position-relative">
      <img className="blur6 position-absolute w-50" src={blur1} alt="blur1" />
      <img
        className="umbrella_position2 position-absolute d-none d-md-block "
        src={umb_pos1}
        alt="umb_pos1"
      />

      <Container className="py-5 position-relative">
        <h2 className="ff_Lato fw_700 fc_white fs_48 mb-3 text-center">
          Meet the<span className="fc_orange">Team </span>
        </h2>

        <Row className=" d-flex justify-content-center align-items-center ">
          <Slider {...settings}>
            <div className="py-md-5 py-3 d-flex justify-content-center align-items-center cp">
              <div className="varun_card1">
                <div className="d-flex flex-column flex-sm-row align-items-center w-100">
                  <div className="w-50">
                    <img className="w-100" src={varun1} alt="varun1" />
                  </div>
                  <div className=" w-50">
                    <h2 className="ff_Lato fs_24 fw_700 fc_black mb-0 text-center mb-2">
                      Varun Muthu
                    </h2>
                    <h2 className="ff_Lato fs_18 fw_500 fc_black mb-0 text-center mb-4">
                      Marketing Director
                    </h2>
                    <p className="ff_Lato fs_16 fw_400 fc_black mb-0 varun_para1 mx-auto mb-3 text-center">
                      https://www.linkedin.com/ in/varunmuthu1
                    </p>
                    <div className="d-flex gap-2 align-items-center justify-content-center my-4">
                      <Link className="d-inline-block">
                        <Discord2 />
                      </Link>
                      <Link className="d-inline-block">
                        <Twitter2 />
                      </Link>
                      <Link className="d-inline-block">
                        <M2 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="py-md-5 py-3 d-flex justify-content-center  align-items-center cp">
              <div className="varun_card1">
                <div className="d-flex  flex-column flex-sm-row  align-items-center w-100">
                  <div className="w-50">
                    <img className="w-100" src={varun2} alt="varun2" />
                  </div>
                  <div className=" w-50">
                    <h2 className="ff_Lato fs_24 fw_700 fc_black mb-0 text-center mb-2">
                      Shubh Sharma
                    </h2>
                    <h2 className="ff_Lato fs_18 fw_500 fc_black mb-0 text-center mb-4">
                      Operations Director
                    </h2>
                    <p className="ff_Lato fs_16 fw_400 fc_black mb-0 varun_para1 mx-auto mb-3 text-center">
                      https://www.linkedin.com/ in/shubhsharma01/
                    </p>
                    <div className="d-flex gap-2 align-items-center justify-content-center my-4">
                      <Link className="d-inline-block">
                        <Discord2 />
                      </Link>
                      <Link className="d-inline-block">
                        <Twitter2 />
                      </Link>
                      <Link className="d-inline-block">
                        <M2 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="py-md-5 py-3 d-flex justify-content-center align-items-center cp">
              <div className="varun_card1">
                <div className="d-flex flex-column flex-sm-row   align-items-center w-100">
                  <div className="w-50">
                    <img className="w-100" src={varun2} alt="varun2" />
                  </div>
                  <div className=" w-50">
                    <h2 className="ff_Lato fs_24 fw_700 fc_black mb-0 text-center mb-2">
                      Shubh Sharma
                    </h2>
                    <h2 className="ff_Lato fs_18 fw_500 fc_black mb-0 text-center mb-4">
                      Operations Director
                    </h2>
                    <p className="ff_Lato fs_16 fw_400 fc_black mb-0 varun_para1 mx-auto mb-3 text-center">
                      https://www.linkedin.com/ in/shubhsharma01/
                    </p>
                    <div className="d-flex gap-2 align-items-center justify-content-center my-4">
                      <Link className="d-inline-block">
                        <Discord2 />
                      </Link>
                      <Link className="d-inline-block">
                        <Twitter2 />
                      </Link>
                      <Link className="d-inline-block">
                        <M2 />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </Slider>
        </Row>
      </Container>
    </div>
  );
}

export default Meet7
