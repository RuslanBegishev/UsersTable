import './Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>
                <Link to={'/'} className={'link'}>Пользователи сайта</Link>
            </h1>
            {/*<div className={'header__links'}>*/}
                <Link to={'users'} className={'link header__link'}>Users</Link>
                {/*<Link to={'portfolio'} className={'link header__link'}>Портфолио</Link>*/}
                {/*<Link to={'contacts'} className={'link header__link'}>Контакты</Link>*/}
            {/*</div>*/}
        </header>
    )
}

export default Header;
