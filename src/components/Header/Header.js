import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo de Sportsee" />
            </Link>
            <Link to="/" className="header-link">Accueil</Link>
            <p className="header-link">Profil</p>
            <p className="header-link">Réglages</p>
            <p className="header-link">Communauté</p>
        </header>
    );
}

export default Header;