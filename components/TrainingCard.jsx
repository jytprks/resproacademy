import React from "react";
import styled from "styled-components";
const TrainingCardStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    position: relative;
    width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
      inset -5px -5px 5px rgba(255, 255, 255, 0.5),
      5px 5px 5px rgba(0, 0, 0, 0.05), -5px -5px 5px rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    margin: 30px;
   
    .box {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      bottom: 20px;
      background: #ebf5fc;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: 15px;
      display: flex;
      transition: 0.5s;
      text-align: start;
      align-items: center;

      .content {
        padding: 20px;
        text-align: center;
        h2 {
          position: absolute;
          top: 10px;
          right: 30px;
          font-size: 8rem;
          color: rgba(0, 0, 0, 0.02);
          transition: 0.5s;
          pointer-events: none;
        }
        h1 {
          font-weight: 700;
          font-size: 2.6em;
          color: #777;
          z-index: 1;
          transition: 0.5s;
        }
        .sub-text {
          padding: 20px 0;
          line-height: 2rem;
          h6 {
            font-weight: 600;
            font-size: 1.5em;
            color: #777;
            z-index: 1;
            transition: 0.5s;
          }
        }
        .timing {
          padding: 20px 0;
          line-height: 2.4rem;
          p {
            font-weight: 500;
            font-size: 1.5em;
            color: #777;
            z-index: 1;
            transition: 0.5s;
          }
        }
        .holiday {
          font-weight: 500;
          font-size: 1.1em;
          color: #777;
          z-index: 1;
          transition: 0.5s;
        }
      }
    }
    &:hover  {
      .content  {
        h2{
            color: rgba(0, 0, 0, 0.05);
        }
        h1{
            color:var(--orange);
        }

        .sub-text h6{
            color:var(--white);
        }
        .timing  p{
            color:var(--white);
        }
        .holiday{
            color:var(--white);
        }
      }
      .box{
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        transform: translateY(-50px);
        background: linear-gradient(45deg, #b95ce4, var(--dark-blue))
      }
      
    }
    /* &:hover .box {
      color: rgba(0, 0, 0, 0.05);
      transform: translateY(-50px)
    } */
  }
`;
const TrainingCard = ({ children, ...rest }) => {
  return (
    <TrainingCardStyle {...rest}>
      <div className="card">
        <div className="box">
         {children}
        </div>
      </div>
    </TrainingCardStyle>
  );
};

export default TrainingCard;
