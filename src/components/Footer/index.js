import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import { FaFacebook, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  
  const backHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Về chúng tôi</FooterLinkTitle>
                <FooterLink to="/">Cam kết</FooterLink>
                <FooterLink to="/">Điều khoản dịch vụ</FooterLink>
                <FooterLink to="/">Chính sách bảo mật</FooterLink>
                <FooterLink to="/">Nhà đầu tư</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Người sáng lập</FooterLinkTitle>
                <FooterLink
                  href="https://www.facebook.com/thinh.lam.3910/"
                  target="_blank"
                >
                  Lâm Xuân Thịnh
                </FooterLink>
                <FooterLink
                  href="https://www.facebook.com/htluan2706"
                  target="_blank"
                >
                  Hoàng Thế Luân
                </FooterLink>
                <FooterLink
                  href="https://www.facebook.com/so.hung.984"
                  target="_blank"
                >
                  Nguyễn Hoàng Việt
                </FooterLink>
                <FooterLink
                  href="https://www.facebook.com/Viethoang1412"
                  target="_blank"
                >
                  Ngô Hùng Sở
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Liên hệ chúng tôi</FooterLinkTitle>
                <FooterLink to="/">Liên lạc</FooterLink>
                <FooterLink to="/">Hỗ trợ</FooterLink>
                <FooterLink to="/">Địa chỉ</FooterLink>
                <FooterLink to="/">Tài trợ</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Mạng xã hội</FooterLinkTitle>
                <FooterLink
                  href="https://www.instagram.com/thinh.lam.3910/"
                  target="_blank"
                >
                  Instagram
                </FooterLink>
                <FooterLink
                  href="https://www.facebook.com/thinh.lam.3910/"
                  target="_blank"
                >
                  Facebook
                </FooterLink>
                <FooterLink
                  href="https://www.youtube.com/channel/UCl836Pk_OV8KqQFEBliB0Lw"
                  target="_blank"
                >
                  Youtube
                </FooterLink>
                <FooterLink
                  href="https://github.com/lamxuanthinh"
                  target="_blank"
                >
                  GitHub
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={backHome}>
                TC-Covid
              </SocialLogo>
              <WebsiteRights>
                TC-Covid © {new Date().getFullYear()} Bản quyền thuộc về nhóm NEVER GIVE UP
              </WebsiteRights>
              <SocialIcon>
                <SocialIconLink
                  href="https://www.facebook.com/thinh.lam.3910/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/thinh.lam.3910/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.youtube.com/channel/UCl836Pk_OV8KqQFEBliB0Lw"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/lamxuanthinh"
                  target="_blank"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
