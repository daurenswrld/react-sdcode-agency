import './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Добро пожаловать <em>это sdcode</em></strong><br />
                    {/* a frontend developer */}
                </h1>
                <div className="header__text">
                    <p>Сайты
                        под ключ, которые приводят к
                        результатам.</p>
                </div>
                <Link to="https://wa.link/qcsiv2" target="_blank" download className="btn">обсудить проект</Link>
            </div>
        </header>
    );
}

export default Header;