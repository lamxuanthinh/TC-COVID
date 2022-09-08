import React from "react";
import { useState } from "react";
import VideoBackgroundHome from "../../videos/backgroundHome02.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWraper,
  BtnLink,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={VideoBackgroundHome}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Website Tiêm Chủng COVID-19</HeroH1>
          <HeroP>
          Chỉ những người là y tá bác sĩ tham gia vào hệ thống tiêm chủng thì mới được đăng ký tài khoản
          </HeroP>
          <HeroBtnWraper onMouseEnter={onHover} onMouseLeave={onHover}>
            <BtnLink
              to="signup"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
            >
              Bắt Đầu {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnLink>
          </HeroBtnWraper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
