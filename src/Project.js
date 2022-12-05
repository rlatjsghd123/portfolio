import React, { useState,useRef } from 'react'
import {FaCheck } from 'react-icons/fa'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import './style/project.scss'

function Project({imgSrc,imgAlt,title,subTitle,text,language,GitHref,URLHref,FaChevronRight,FaChevronLeft}) {

  return (
        <section>
            {FaChevronRight}
            <h2>PROJECT</h2>
            <FiArrowDownRight className='left_deco' />
            <div className='project_info'>
                <div className='img_info'>
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className='text_info'>
                <h3 className='title'>{title}</h3>
                <p className='subTitle'>{subTitle}</p>
                <ul>
                    {text.map((txt)=> <li><FaCheck className='list' />{txt}</li>)}
                </ul>
                <div className='url'>
                    <p>언어 : {language}</p>
                    <p>GitHub : <a href={GitHref}>{GitHref}</a></p>
                    <p>url : <a href={URLHref}>{URLHref}</a></p>
                </div>
                </div>
            </div>
            <FiArrowUpLeft className='right_deco' />
            {FaChevronLeft}
        </section>
  )
}

export default Project