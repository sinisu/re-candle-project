import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ['CANDLE','ACCESSORIES','DIFFUSER','PERFUME','FABRIC',]

    const navigate = useNavigate();
    const getLogin = () => {navigate('/login')}
    const goToHome = () => {navigate('/')}
    const searchItem = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }
    const getCategory = (event) => {
        let category = event.target.textContent.toLowerCase();
        navigate(`/?category=${category}`)
    }

    return (
        <div>
            <div className='login-area main-border'>
                <div className='menu-burger'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='input-area'>
                    <div className='input-box'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input 
                            type='text' 
                            placeholder='검색어를 입력하세요' 
                            onKeyPress={(event)=>searchItem(event)}    
                        />
                    </div>
                    <div className='login-box'>
                        <FontAwesomeIcon icon={faFaceSmile} />
                        <div onClick={getLogin}>LOGIN</div> 
                    </div>    
                </div>  
            </div>
            <div className='logo-area main-border'>
                <img
                src='https://cdn.imweb.me/thumbnail/20201212/9ff64542142a4.png'
                width={180}
                onClick={goToHome}
                />
            </div>
            <div className='menu-area main-border'>
                <ul className='menu-item'>
                    {menuList.map((item)=>item===menuList[menuList.length-1]?(<li onClick={(event)=>getCategory(event)}>{item}</li>):(<li onClick={(event)=>getCategory(event)} className='menu-border'>{item}</li>))}
                </ul>
            </div>
        </div>
  )
}

export default Navbar
