import React, {forwardRef} from 'react'
import './style/Contect.scss'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"

const Contect = forwardRef((props,cRef) => {
  return (
    <div className='contect' ref={cRef}> 
        <FiArrowDownRight className='left_deco' />  
        <div className='c_inner'>
        <h2 className='contect_title'>CONTECT</h2>
            <ul>
                <li>E-MAIL : eoaud447@naver.com</li>
                <li>GitHub : https://github.com/rlatjsghd123</li>
                <li>Phone : 010-3211-0355</li>
            </ul>
        </div>
    <FiArrowUpLeft className='right_deco' />
    </div>
  )
})

export default Contect