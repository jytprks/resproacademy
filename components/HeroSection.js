import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import ParagraphText from "./ParagraphText";
import HeroTitle from "./HeroTitle";
import HeroImg from "../public/assets/images/hero.jpg";
import Image from "next/image";

const HeroSectionStyle = styled.div`
  margin-top: calc(var(--header-height) + 10px);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero__info {
    flex: 3;
  }
  .hero_image {
    flex: 2;
    img {
      
      object-fit: contain;
    }
  }
  .hero-title {
    margin-bottom: 1.5rem;
    max-width: 100%;
    color: var(--orange);
  }
  .hero-desc {
    margin-bottom: 1.5rem;
    max-width: 100%;
    line-height: 2.5rem;
    color: var(--light-blue);
  }

  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .hero_image {
      display: flex;
      justify-content: center;
      img {
        z-index:0;
        max-width: 100%;
        margin-top: auto;
      }
    }
  }
`;

const HeroSection = () => (
  <HeroSectionStyle id="hero">
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__info">
          <HeroTitle className="hero-title">Respro Academy Provides</HeroTitle>
          <ParagraphText className="hero-desc">
            The Respro Academy, founded in 2012 September, is a training
            institute in the field of English and technology. The institute is
            based out of Bangalore, Karnataka and started as a franchisee of
            VETA. The institute delivers retail and corporate training in spoken
            English, Business English, Mainframe technology. This is also
            specializes in exam coaching for IELTS and OET.
          </ParagraphText>
          <PrimaryButton>Contact Me</PrimaryButton>
        </div>
        <div className="hero_image">
          <Image src={HeroImg} alt="Artistic" />
        </div>
      </div>
    </div>
  </HeroSectionStyle>
);

export default HeroSection;
