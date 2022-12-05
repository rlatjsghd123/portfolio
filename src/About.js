import React,{forwardRef} from 'react'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import './style/About.scss'

const About = forwardRef((props,aRef) => {
  return (
    <div className='about' ref={aRef}>
        <FiArrowDownRight className='left_deco' />
        <h2 className='about_title'> ABOUT ME</h2>
        <div className='a_inner'>
            <div className='me'>
                <img src='' alt='my' />
            </div>
            <div>
                <p>
                안녕하세요. <strong>프론트앤드 개발자</strong>의 길을 걷고 있는 학생입니다.<br />
                협업에 있어서 <strong>원활한 커뮤니케이션</strong>을 할 수 있도록 노력하겠습니다.<br />
                꾸준한 노력으로 학습하고 경험하며, 성장하는 <strong>개발자</strong>가 되려합니다.<br />
                </p>
                <div className='my_skills'>
                    <h3 className='skill_title'>SKILLS</h3>
                    <ul className='skills'>
                        <li><img src='img/logo192.png' alt='html5' /></li>
                        <li><img src='img/css.png' alt='css' /></li>
                        <li><img src='img/javascript.png' alt='js' /></li>
                        <li><img src='img/React-icon.png' alt='react' /></li>
                    </ul>
                </div>
            </div>
        </div>
        <FiArrowUpLeft className='right_deco' />
    </div>
  )
})

export default About