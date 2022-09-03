import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Các loại tài khoản</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={require('../../images/doctor_03.jpg')} />
            <ServicesH2>Y tá kiểm tra sức khoẻ</ServicesH2>
            <ServicesP>
              Kiểm tra sức khoẻ người tiêm chủng và thực hiện quét mã QR.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/doctor_02.jpg')} />
            <ServicesH2>Bác sĩ xác thực bệnh tật</ServicesH2>
            <ServicesP>
              Kiểm tra các bệnh tật triệu chứng của người đi tiêm chủng .
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/doctor_01.png')} />
            <ServicesH2>Bác sĩ tiêm chủng</ServicesH2>
            <ServicesP>
              Thực hiện tiêm chủng và tiến hành in phiếu hoàn thành tiêm chủng .
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
