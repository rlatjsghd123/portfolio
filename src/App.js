import React, { useEffect, useRef, useState } from 'react';
import {FaChevronRight,FaChevronLeft,FaCheck, FaArrowRight} from 'react-icons/fa'
import About from './About';
import Contect from './Contect';
import Header from './Header';
import Project from './Project';
import './style/App.scss'


function App() {
  const [scroll,setScroll] = useState(0);
  const hRef = useRef();
  const aRef = useRef();
  const pRef = useRef();
  const cRef = useRef();
  const onClick = (e) =>{
    const text = e.target.innerText;
    if(text === "HOME"){
      hRef.current.scrollIntoView({ behavior: 'smooth' });
    }else if(text === "ABOUT"){
      aRef.current.scrollIntoView({ behavior: 'smooth' });
    }else if(text === "PROJECT"){
      pRef.current.scrollIntoView({ behavior: 'smooth' });
    }else if(text === "CONTECT"){
      cRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const ArrowRightClick = () =>{
    setScroll(scroll+1);
    if(scroll >= 3) setScroll(0);
    pRef.current.style.left = -scroll*100+"%";
    pRef.current.style.transition = "all 0.25s ease-in 0s";
  }
  const ArrowLeftClick = () => {
    setScroll(scroll-1);
    if(scroll <= 0) setScroll(3);
    pRef.current.style.left = -scroll*100+"%";
    pRef.current.style.transition = "all 0.25s ease-in 0s";
  }
  return (
    <div className='wrap' ref={hRef}>
    <Header onClick={onClick} ref={hRef} />
    <About ref={aRef} />
    <div className='projects' ref={pRef}>
      <Project project={"1 . PROJECT"} mimgSrc={'img/locknlock(m).png'} FaChevronRight={<FaChevronRight className='prev' onClick={ArrowRightClick} />} FaChevronLeft={<FaChevronLeft className='next' onClick={ArrowLeftClick}/>} imgSrc={'img/locknlock.png'} imgAlt={"locknlock홈페이지"} title={"LOCKNLOCK"} subTitle={"LOCKNLOCK공식홈페이지 클론코딩"} language={"HTML5,CSS,Javascript"} GitHref={"https://github.com/rlatjsghd123/webProject03"} URLHref={" https://rlatjsghd123.github.io/webProject03/"}
       text={["시멘틱 마크업","웹 표준 및 웹 접근성 고려","크로스 브라우징","반응형 웹사이트"]} />
      <Project project={"2 . PROJECT"} mimgSrc={'img/m_cjone.png'} timgSrc={'img/t_cjone.png'} FaChevronRight={<FaChevronRight className='prev' onClick={ArrowRightClick} />} FaChevronLeft={<FaChevronLeft className='next' onClick={ArrowLeftClick}/>} imgSrc={'img/cjone.png'} imgAlt={"cjone홈페이지"} title={"CJ ONE"} subTitle={"CJ ONE공식홈페이지 클론코딩"} language={"HTML5,CSS,Javascript"} GitHref={" https://github.com/rlatjsghd123/webProject02"} URLHref={" https://rlatjsghd123.github.io/webProject02/"}
      text={["시멘틱 마크업","웹 표준 및 웹 접근성 고려","크로스 브라우징","반응형 웹사이트"]} />
      <Project project={"3 . PROJECT"} FaChevronRight={<FaChevronRight className='prev' onClick={ArrowRightClick} />} FaChevronLeft={<FaChevronLeft className='next' onClick={ArrowLeftClick}/>} imgSrc={'img/kakao.png'} imgAlt={"kakao앱"} title={"KAKAO TILK"} subTitle={"카카오톡앱"} language={"HTML5,CSS(scss),react"} GitHref={"https://github.com/rlatjsghd123/kakao _app"} URLHref={" https://rlatjsghd123.github.io/kakao_app/"}
      text={["react를 이용한 SPA입니다.","axiso를 이용해 데이터를 받아옴","firebase를 이용한 회원가입,로그인서비스 추가" , "firebase를 이용한 댓글기능 추가"]} />
      <Project project={"4 . PROJECT"} FaChevronRight={<FaChevronRight className='prev' onClick={ArrowRightClick} />} FaChevronLeft={<FaChevronLeft className='next' onClick={ArrowLeftClick}/>} imgSrc={'img/nexflix.png'} imgAlt={"nexflix홈페이지"} title={'NEXFLIX'} subTitle={"NEXFLIX공식홈페이지 클론코딩"} language={"HTML5,CSS(scss),react"} GitHref={"https://github.com/rlatjsghd123/netflix_app"} URLHref={"https://rlatjsghd123.github.io/nexflix_app/"}
      text={["react를 이용한 SPA입니다.","영화검색기능 추가,firebase를 이용한 로그인,회원가입 추가","hook을 이용한 최적화","axiso를 이용해 데이터를 받아옴"]} />
    </div>
    <Contect ref={cRef} />
    </div>
  );  
}     


export default App