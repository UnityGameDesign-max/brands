import React, {useState} from 'react';
import "./header.scss";
import Logo from 'assets/icons/logo.svg';
import HamBurger from 'assets/icons/icon-hamburger.svg'

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
                    <img src={Logo} alt='logo' />
                </div>
                
                <div className='nav-sm-items'>
                    <ul className={open ? 'nav-items active' : 'nav-items'}>
                        <li>Services</li>
                        <li>Industries</li>
                        <li>Cases</li>
                        <li>Contact</li>
                    </ul>
                    <div className={ open ? 'nav-btn chat-btn active' : 'nav-btn chat-btn'}>
                        <button className='btn btn--nav-btn'>Let's Talk</button>
                    </div>
                </div>
                

                <div className='hamburger'>
                    <img src={HamBurger} alt='ham-menu' onClick={handleClick}/>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header