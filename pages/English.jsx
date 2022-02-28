import React from 'react'
import styled from "styled-components";
import spokeneng from '../public/assets/images/spokeneng.jpg'
import Image from "next/image";
const EnglishStyles = styled.div`
margin-top: 20px;
margin-bottom: 20px;
.business-spoken-eng{
    flex-direction: row-reverse;
}
.spoken-eng,.business-spoken-eng{
    height: 100vh;
    display: flex;
    .description{
        width: 60%;
        margin: 10px 40px ;
        .course-title{
            font-size: 5rem;
            color: var(--orange);
        }
        .subtitle{
            font-size: 3rem;
            color: var(--dark-blue);
            margin-bottom: 30px;
        }
        .spacial{
            font-size: 2rem;
            font-weight: 600;
        }

        .facility{
            font-size: 2rem;
            font-weight: 600;
        }
        ul.list-head{
            margin-top: 20px;
            margin-bottom: 30px;
            .list-item{
                list-style-type: circle;
                font-size: 1.6rem;
                font-weight: 600;
                margin-top: 10px;
            }
        }
        .summary{
            line-height: 2.5rem;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
    .hero-image{
        width: 40%;
        .hero-img{
        height: 200px;
        width: auto;
        border-radius: 4%;
        cursor: none;
        }
    }
    
}
`
const English = () => {
  return (
    <EnglishStyles className='container'>
        <div className='spoken-eng'>
            <div className='description'>
                <h1 className='course-title'>Spoken English Classes</h1>
                <h3 className='subtitle'>Certified by Respro academy</h3>
                <span className='spacial'>Flexible batches are available at your convenience.</span>
                <h6 className='facility'>In this course, you will learn</h6>
                <ul className='list-head'>
                    <li className='list-item'>English reading, writing, and speaking skills</li>
                    <li  className='list-item'>Handling meetings confidently</li>
                    <li  className='list-item'>Delivering presentations and cracking the interview with your English Speaking skills</li>
                    <li  className='list-item'>And, everything else that is important for building confidence in your interpersonal skills</li>
                </ul>
                <span className='summary'>If the answer is yes then take a 10-week challenge with Shiva and see the difference. Shiva is the one spot solution for enhancing your English speaking skills and developing your personality for personal & professional success.</span>
            </div>
            <div className='hero-image'>
            <Image src={spokeneng} className="hero-img" alt='hero'/>
            </div>
        </div>

        <div className='business-spoken-eng'>
            <div className='description'>
                <h1 className='course-title'>Business English Classes</h1>
                <h3 className='subtitle'>Certified by Respro academy</h3>
                <span className='spacial'>Flexible batches are available at your convenience.</span>
                <h6 className='facility'>In this course, you will learn</h6>
                <ul className='list-head'>
                    <li className='list-item'>English reading, writing, and speaking skills</li>
                    <li  className='list-item'>Handling meetings confidently</li>
                    <li  className='list-item'>Delivering presentations and cracking the interview with your English Speaking skills</li>
                    <li  className='list-item'>And, everything else that is important for building confidence in your interpersonal skills</li>
                </ul>
                <span className='summary'>If the answer is yes then take a 10-week challenge with Shiva and see the difference. Shiva is the one spot solution for enhancing your English speaking skills and developing your personality for personal & professional success.</span>
            </div>
            <div className='hero-image'>
            <Image src={spokeneng} sizes="320 640 750"  layout="responsive"  className="hero-img" alt='hero'/>
            </div>
        </div>
    </EnglishStyles>
  )
}

export default English