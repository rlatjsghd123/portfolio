
import './style/Header.scss'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"
import { useEffect, useRef, useState } from 'react';

function Header({onClick}) {

  return (
    <header>
        <div class="circles" id="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>  
        <aside class="warning">
        </aside>
        </div>
        <FiArrowDownRight className='left_deco' />
        <div className='h_inner'>
        <ul className='gnb' onClick={onClick} >
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CONTECT</li>
        </ul>
        <svg viewBox="0 0 1320 300" className='text_ani'>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        김선홍의
        </text>
        </svg>  
        <svg viewBox="0 0 1320 300" className='text_ani3'>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        PROTPOLIO
        </text>
        </svg>  
        <svg viewBox="0 0 1320 300" className='text_ani2'>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
        FRONT-END DEVELOFER
        </text>
        </svg>
        </div>
        <FiArrowUpLeft className='right_deco' />
    </header>
  )
}

export default Header