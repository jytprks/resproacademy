import React from 'react'
import styled from "styled-components";
import IELTS from '../components/cards/IELTS';
import Mainframe from '../components/cards/Mainframe';
import OET from '../components/cards/OET';
import Spoken from '../components/cards/Spoken';
import SpokenEnglish from '../components/cards/SpokenEnglish';
import TrainingCard from '../components/TrainingCard';
const TrainingStyle = styled.div`
height:180vh;
.containerr{
      display:flex;
      justify-content:center;
      align-items:center;
      max-width:1200px;
      flex-wrap:wrap;
     
  }
.title{
  color:var(--orange);
 // display:flex;
  text-align:center;
  margin:40px auto;
  font-weight:900;
  font-size:4.5rem;
}
`

const Training = () => {
  return (
    <TrainingStyle>
      <div className='container'>
      <h1 className='title'>Trainings</h1>
      <div className='containerr'>
      <TrainingCard><SpokenEnglish/></TrainingCard>
      <TrainingCard><Spoken/></TrainingCard>
      <TrainingCard><Mainframe/></TrainingCard>
      <TrainingCard><IELTS/></TrainingCard>
      <TrainingCard><OET/></TrainingCard>
      </div>
      </div>
    </TrainingStyle>
  )
}

export default Training