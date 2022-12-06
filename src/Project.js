import React, { useState,useRef } from 'react'
import {FaCheck,FaGithub,FaChrome } from 'react-icons/fa'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import './style/project.scss'

function Project({timgSrc,mimgSrc,imgSrc,imgAlt,title,subTitle,text,language,GitHref,URLHref,FaChevronRight,FaChevronLeft,project}) {

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
                    <img src={timgSrc} alt={imgAlt} className="t_img" />
                </div>
                <div className='moblie_img'>
                    <img src={mimgSrc} alt={imgAlt} className='m_img' />
                </div>
                <div className='kakao_video'>
                    <video autoPlay muted loop width="100%" height="100%">
                        <source src='video/kakao.mp4' type='mp4/video' />
                    </video>
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