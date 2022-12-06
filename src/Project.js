import React, { useState,useRef } from 'react'
import {FaCheck,FaGithub,FaChrome } from 'react-icons/fa'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import ReactPlayer from 'react-player/lazy';
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
                <ReactPlayer
                    className='react-player'
                    url={'video.kakao.mp4'}   
                    width='100%'         // 플레이어 크기 (가로)
                    height='100%'        // 플레이어 크기 (세로)
                    playing={true}        // 자동 재생 on
                    muted={true}          // 자동 재생 on
                    controls={false}       // 플레이어 컨트롤 노출 여부
                    light={false}         // 플레이어 모드
                    pip={true}            // pip 모드 설정 여부
                    poster={'kakao.png'}   // 플레이어 초기 포스터 사진
                    onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
                />
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