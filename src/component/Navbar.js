import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const menuList = ['CANDLE','ACCESSORIES','DIFFUSER','PERFUME','FABRIC',]

    return (
        <div>
            <div className='login-area main-border'>
                <div className='input-area'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' placeholder='검색어를 입력하세요' />
                </div>
                <div className='login-box'>
                    <FontAwesomeIcon icon={faFaceSmile} />
                    <div>LOGIN</div> 
                </div>
            </div>
            <div className='logo-area main-border'>
                <img
                src='https://cdn.imweb.me/thumbnail/20201212/9ff64542142a4.png'
                width={180}
                />
            </div>
            <div className='main-border'>
                <ul className='menu-area'>
                    {menuList.map((item)=>item===menuList[menuList.length-1]?(<li>{item}</li>):(<li className='menu-border'>{item}</li>))}
                </ul>
            </div>
        </div>
  )
}

export default Navbar
