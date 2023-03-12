import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'footer__links'}>
                <Link to={'about'} className={'link footer__link'}>Обо мне</Link>
                <Link to={'portfolio'} className={'link footer__link'}>Портфолио</Link>
                <Link to={'contacts'} className={'link footer__link'}>Контакты</Link>
                <a href={'https://google.com'} target={'_blank'} rel={'nofollow noopener noreferrer'} className={'link footer__link'}>google.com</a>
            </div>
            <div className={'footer__copyright'}>© Andrew Gulin, 2021</div>
        </footer>
    )
}

export default Footer;
