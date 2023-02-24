import logo from "../../assets/logo.svg";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo de Sportsee" />
            <p className="header-link">Accueil</p>
            <p className="header-link">Profil</p>
            <p className="header-link">Réglages</p>
            <p className="header-link">Communauté</p>
        </header>
    );
}

export default Header;