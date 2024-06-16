import { useState } from 'react';
import './Header.css';

function Header() {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        //add the box shadow to header when the scroll is higher than 200 viewport
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    // to show and hide menu in mobile devices
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className='header'>
            <nav className='nav container'>
                {/* first child */}
                <a href="index.html" className="nav__logo">Vishal</a>

                {/* second child */}
                <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
                    {/* I removed grid class from ul element here 👇 */}
                    <ul className="nav__list ">
                        <li className="nav__item">
                            <a href="#home"
                                onClick={() => setActiveNav("#home")}
                                className={activeNav == "#home" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-estate nav__icon'></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={activeNav == "#about" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills"
                                onClick={() => setActiveNav("#skills")}
                                className={activeNav == "#skills" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-file-alt nav__icon'></i>Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services"
                                onClick={() => setActiveNav("#services")}
                                className={activeNav == "#services" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-briefcase-alt nav__icon'></i>Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio"
                                onClick={() => setActiveNav("#portfolio")}
                                className={activeNav == "#portfolio" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-scenery nav__icon'></i> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={activeNav == "#contact" ? 'nav__link active-link' : "nav__link"}>
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(!Toggle)}>
                    </i>
                </div>

                {/* third child */}
                <div className='nav__toggle'>
                    <i
                        className="uil uil-apps"
                        onClick={() => showMenu(!Toggle)}>

                    </i>
                </div>

            </nav >
        </header >
    )
};

export default Header;