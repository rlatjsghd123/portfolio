import React, { useState,useRef } from 'react'
import {FaCheck,FaGithub,FaChrome } from 'react-icons/fa'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import './style/project.scss'

function Project({imgSrc,imgAlt,title,subTitle,text,language,GitHref,URLHref,FaChevronRight,FaChevronLeft,project}) {

  return (
        <section>
            {FaChevronRight}
            <h2>{project}</h2>
            <FiArrowDownRight className='left_deco' />
            <div className='project_info'>
                <div className='img_info'>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className='tablet_img'>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className='moblie_img'>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className='text_info'>
                <h3 className='title'>{title}</h3>
                <p className='subTitle'>{subTitle}</p>
                <p className='language'>언어 : {language}</p>
                <ul>
                    {text.map((txt)=> <li><FaCheck className='list' />{txt}</li>)}
                </ul>
                <div className='url'>
                    <span><a href={GitHref}><FaGithub /> GitHub</a></span>
                    <span><a href={URLHref}><FaChrome /> URL</a></span>
                </div>
                </div>
            </div>
            <FiArrowUpLeft className='right_deco' />
            {FaChevronLeft}
        </section>
  )
}

export default Project