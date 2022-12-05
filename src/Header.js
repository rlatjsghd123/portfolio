
import './style/Header.scss'
import {FiArrowDownRight,FiArrowUpLeft} from "react-icons/fi"

function Header({onClick}) {
  

  return (
    <header>
        <FiArrowDownRight className='left_deco' />
        <div className='h_inner'>
        <ul className='gnb' onClick={onClick} >
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CONTECT</li>
        </ul>
        <h1 className='h_title'>김선홍의 PROTFOLIO</h1>
        <p className='front'>FRONT-END DEVELOPER</p>
        </div>
        <FiArrowUpLeft className='right_deco' />
    </header>
  )
}

export default Header