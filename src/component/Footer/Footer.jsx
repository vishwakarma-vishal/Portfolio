import './Footer.css';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <h1 className="footer__title">Vishal</h1>

                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About</a>
                        </li>

                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>

                        <li>
                            <a href="#testimonials" className="footer__link">Testimonials</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__container">
                    <div className="footer__social">
                        <a href="https://www.linkedin.com/in/vishwakarma-vishal2001/" className="footer__social-link" target="_blank">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>

                        <a href="https://github.com/vishwakarma-vishal" className="footer__social-link" target="_blank">
                            <i class="uil uil-github"></i>
                        </a>

                        <a href="#" className="footer__social-link" target="_blank">
                            <i class="uil uil-times"></i>
                        </a>
                    </div>
                    <span className="footer__copy">&#169; Momentcoder, All rights reserved</span>
                </div>
            </div>
        </footer>
    )
};