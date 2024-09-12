import React from 'react';
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center' >{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const content = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Pankaj </span> 👋
            <br/>
            a tech savvy trying to be problem solver
        </h1>
    ),
    2: (
        <InfoBox 
            text='A passionate MERN Stack Developer💡💻'
            link='/about'
            btnText='Know more'
        />
    ),
    3: (
        <InfoBox
            text='Checkout some of my work🚀 and projects✨'
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox
            text="Reach Out & Let's Build Something Awesome🤝"
            link='/contact'
            btnText="Let's chat"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return (
    content[currentStage] || null
  )
}

export default HomeInfo