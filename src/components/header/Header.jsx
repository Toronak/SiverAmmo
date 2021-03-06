import React from 'react';
import SlickSlider from '../slider/SlickSlider';
import './header.scss';

function Header() {
  return (
    <header className='header' id='home'>
      <div className='header__main-box'>
      <div className='header__title-box'>
        <h1 className='header__title'>горизонтальный слайдер на 100vh,4 фото</h1>
      </div>
      </div>
      <div className='header__arrow'>
        <a onClick={e => {
          let hero = document.getElementById("ammo");
          e.preventDefault();
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState("ammo", "ammo", "/ammo");
        }}>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 472.682 472.682" fill="rgba(218, 165, 32)" width="30" height="30">
            <polygon points="235.272,417.072 36.36,256.66 8.555,290.881 235.272,472.682 464.127,290.881 438.461,256.66" />
            <polygon points="464.127,34.221 438.461,0 235.272,160.412 36.36,0 8.555,34.221 235.272,216.022" />
            <polygon points="235.272,288.742 36.36,128.33 8.555,162.551 235.272,344.352 464.127,162.551 438.461,128.33" />
          </svg>
        </a>
      </div>
    </header >
  )
}

export default Header;