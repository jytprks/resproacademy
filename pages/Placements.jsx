import React from 'react'
import JobCard from '../components/cards/JobCard'
import JobData from '../public/assets/JobData'
import styled from "styled-components";
const PlacementsStyles = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media only screen and (max-width: 700px)  {
    display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr  ;
  grid-template-rows: 1fr  ;
  }

`


const Placements = () => {
  return (
    <PlacementsStyles>{
      JobData.map(el =>{
        return (<JobCard key={el.jobId} obj={el}/>)
      })
      }</PlacementsStyles>
  )
}

export default Placements