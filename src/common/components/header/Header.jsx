import React, {useState} from 'react';
import "./header.scss";
import Logo from 'assets/icons/logo.svg';
import HamBurger from 'assets/icons/icon-hamburger.svg';
import Close from 'assets/icons/icon-close.svg';

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = e =>{
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div>
        <header>
            <nav className='navbar container'>
                <div className='logo'>
                    <a href='/'>
                        <img src={Logo} alt='logo' />
                    </a>
                </div>
                
                <ul className={open ? 'nav-items active' : 'nav-items'}>
                    <a href='#'>
                        <li>Services</li>
                    </a>
                    <a href='#'>
                        <li>Industries</li>
                    </a>
                    <a href='#'>
                        <li>Cases</li>
                    </a>
                    <a href='#'>
                        <li>Contact</li>
                    </a>
                </ul>
                    
                <div className={'nav-btn chat-btn'}>
                    <button className='btn btn--nav-btn'>Let's Talk</button>
                </div>


                {open ? 
                    <div className='hamburger-close'>
                        <img src={Close} onClick={handleClick} alt='close-menu' />
                    </div>
                    :
                    <div className='hamburger-close'>
                        <img src={HamBurger} alt='ham-menu' onClick={handleClick}/>
                    </div>
                }
            </nav>
        </header>
    </div>
  )
}

export default Header