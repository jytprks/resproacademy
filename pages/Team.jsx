import React from 'react'
import styled from "styled-components";
import Image from "next/image";
import img1 from '../public/assets/images/img1.jpg'
import img2 from '../public/assets/images/img2.jpg'
import img3 from '../public/assets/images/img3.jpg'
const TeamStyle = styled.div`
height: 100vh;
display: flex;
justify-content: center;
text-align: center;
margin: auto; 
.container {
  margin: 20px 40px;
  color: #797474;
}

.heading {
  font-size: 60px;
  color: var(--dark-blue);
}

.profiles {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.profile {
  flex-basis: 260px;
}

.profile .profile-img {
  height: 260px;
  width: 260px;
  border-radius: 50%;
  filter: grayscale(100%);
  cursor: pointer;
  transition: 400ms;
}

.profile:hover .profile-img {
  filter: grayscale(0);
}

.profile:hover  {
    h3{
        color: var(--black);
    }
    h6{
        color: var(--black);
    }
}

.user-name {
  margin-top: 30px;
  font-size: 35px;
}

.profile h5 {
    font-weight: 500;
  font-size: 18px;
  letter-spacing: 3px;
  color: var(--orange);
}

.profile p {
  font-size: 16px;
  margin-top: 20px;
  text-align: justify;
}

@media only screen and (max-width: 1150px) {
    height: auto;
  .profiles {
    flex-direction: column;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile p {
    text-align: center;
    margin: 20px 60px 80px 60px;
    font-size: 20px;
  }
}

@media only screen and (max-width: 900px) {
    height: auto;
  .heading {
    font-size: 40px;
    color: white;
    text-align: center;
  }

  .heading span {
    font-size: 15px;
  }

  .profiles {
    margin: 20px 0;
  }

  .profile p {
    margin: 20px 10px 80px 10px;
  }
}
`
 const Team = () => {
  return (
    <TeamStyle><div className="container">
    <h1 className="heading">Meet Our Team</h1>
    <div className="profiles">
      <div className="profile">
        <Image src={img1}  className="profile-img" alt='img1'/>
        <h3 className="user-name">William</h3>
        <h5>Creative Director</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
      </div>
      <div className="profile">
        <Image src={img2} class="profile-img" alt='img2'/>

        <h3 className="user-name">Camila</h3>
        <h5>Managing Partner</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
      </div>
      <div className="profile">
        <Image src={img3} class="profile-img" alt='img3'/>

        <h3 className="user-name">Isabella</h3>
        <h5>Project Manager</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
      </div>
    </div>
  </div></TeamStyle>
  )
}
export default Team