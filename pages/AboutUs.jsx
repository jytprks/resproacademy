import React from "react";
import styled from "styled-components";
const AboutUsStyle = styled.div`
  height: 100vh;
  background-color: var(--light);
  /* $screen-lg: 920px;
  $screen-md: 760px;
  $screen-sm: 580px;
  $screen-xsm: 370px; */

  /* body {
  min-height: 100vh;
  font-family: $font-copy;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 300;
  color: var(--black);
  background-color:var(--light-gray);
} */

  /* .container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 6rem 6rem 6rem;
} */

  /* .nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8rem 0 6rem 0;

  @include respond($screen-sm) {
    padding-bottom: 2rem;
  }

  &__list {
    display: flex;
    gap: 16rem;
    list-style: none;

    @include respond($screen-lg) {
      gap: 6rem;
    }

    @include respond($screen-sm) {
      gap: 4rem;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-white;
    transition: color 0.2s ease;

    &:hover {
      color: darken($color-white, 40%);
    }

    &--active {
      color: darken($color-white, 60%);

      &:hover {
        color: darken($color-white, 60%);
      }
    }
  }

  &__copy {
    @include respond($screen-sm) {
      display: none;
    }
  }
} */
@media only screen and (max-width:370px) {
    height: auto;
    .page-title {
        margin-bottom: 0rem;
        font-size: 4rem;
    }
  }
  @media only screen and (max-width: 920px) {
    height: auto;
    .container {
      .content {
        .descriptor {
          .title {
          }
        }
        .text-box {
          margin-right: 0;
          .text {
          }
        }
      }
    }
  }

  @media only screen and (max-width: 580px) {
    .container {
        .page-title{
            margin-bottom: 4rem;
            font-size: 7rem;
        }
      .content {
        .descriptor {
          .title {
          }
        }
        .text-box {
        border-bottom: none;
          .text {
            width: 100%;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .container {
      .page-title {
        margin-bottom: 6rem;
        font-size: 8rem;
      }
      .content {
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        .descriptor {
          width: 100%;
          padding: 2rem 0;
          border-top: none;
          .title {
          }
        }
        .text-box {
          width: 100%;
          padding: 2rem 0;
          .text {
          }
        }
      }
    }
  }
  .page-title {
    margin-bottom: 8rem;
    font-size: 8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.4px;
    line-height: 16rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .descriptor {
      width: 14%;
      border-top: 1px solid gray;
      padding-top: 4rem;
    }

    .title {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .text-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 2rem;
      width: 50%;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      margin-right: 10rem;
      padding: 4rem 0;
    }

    .text {
      width: 420px;
      font-weight: medium;
      font-size: 1.5rem;
      line-height: 1.8rem;
    }
  }
`;
const AboutUs = () => {
  return (
    <AboutUsStyle>
      <div className="container">
        <header>
          <h1 className="page-title">About Us</h1>
        </header>
        <main>
          <article className="content">
            <section className="descriptor">
              <h2 className="title">Info</h2>
            </section>
            <section className="text-box">
              <p className="text">
                The Respro Academy, founded in 2012 September, is a training
                institute in the field of English and technology. The institute
                is based out of Bangalore, Karnataka and started as a franchisee
                of VETA. The institute delivers retail and corporate training in
                spoken English, Business English, Mainframe technology. This is
                also specializes in exam coaching for IELTS and OET.
              </p>
              <p className="text">
                The founding members are engineering graduate and Master in
                science and from IT, Medical transcription and English language.
                The founders wish to deliver the unique and value added training
                to the learning community.
              </p>
              <p className="text">
                The IT expert has experience in mainframe and core languages.
                Expert provides corporate training to Indian IT companies. We
                also work with small IT companies to deliver the resources as a
                staff augmentation.
              </p>
              <p className="text">
                The company believes in core value and provides effective
                training to the customers.
              </p>
            </section>
          </article>
        </main>
      </div>
    </AboutUsStyle>
  );
};

export default AboutUs;
