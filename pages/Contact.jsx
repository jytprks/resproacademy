import React from "react";
import styled from "styled-components";
const ContactSection = styled.div`
height:100vh;
  display:flex;
  a {
    text-decoration: none;
  }
  #contact {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
  }
  .contact-box {
	width:30%;
    background-color: var(--dark-blue);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 30px;
    box-shadow: 2px 0px 30px rgba(0, 0, 0, 0.1);
  }
  .c-heading h1 {
    color: #e7eef3;
    font-size: 2.5rem;
    font-weight: medium;
    margin: 0px;
    padding: 0px;
  }
  .c-heading p {
    color: #cecece;
    font-size: 0.8rem;
    font-weight: lighter;
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
  .c-inputs {
    margin: 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .c-inputs input {
    width: 250px;
    height: 45px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid rgba(251, 251, 251, 0.1);
    outline: none;
    margin: 10px 0px;
    padding: 10px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
  }
  .c-inputs textarea {
    width: 250px !important;
    height: 200px !important;
    outline: none;
    background-color: transparent;
    border: 1px solid #9c9494;
    color: #f4f4f4;
    padding: 10px;
    font-size: 1.2rem;
    box-sizing: border-box;
  }
  .c-inputs button {
    width: 200px;
    height: 40px;
    background-color: #ffffff;
    border: none;
    outline: none;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.1);
    letter-spacing: 1px;
  }
  .c-inputs input:focus {
    border-bottom: 1px solid rgba(252, 252, 252, 1);
    transition: all ease 0.5s;
  }
  .c-inputs textarea:focus {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    transition: all ease 0.5s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .c-inputs button:active {
    transform: scale(1.02);
  }
  .map {
	  width:70%;
    filter: grayscale(0.2);
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    border: 2px solid #ffffff;
  }
  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;
    height: auto;
    .map{
      display: none;
    }
    .social {
      display: none;
    }
    .contact-box {
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }
    #contact {
      position: static;
      transform: translate(0, 0);
      width: 100%;
      height: 100vh;
      box-sizing: border-box;
    }
    .c-heading h1 {
      font-size: 2.2rem;
      text-align: center;
    }
  }
`;
const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="contact-box">
        <div className="c-heading">
          <h1>Get In Touch</h1>
          <p>Call Or Email Us Regarding Question Or Issues</p>
        </div>

        <div className="c-inputs">
          <form action="mailto:someone@example.com" method="post">
            <input name="name" type="text" placeholder="Full Name" />
            <input name="mail" type="email" placeholder="Example@gmail.com" />
            <textarea name="message" placeholder="Write Message"></textarea>
			<button type="submit" value="Send">SEND</button>
          </form>
          
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.666528377882!2d77.5996552!3d12.8970046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd4d0753f331841a!2sRespro%20Academy!5e0!3m2!1sen!2sin!4v1644572496626!5m2!1sen!2sin"
          width="100%" height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </ContactSection>
  );
};

export default Contact;
