import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import user from "../../assets/user.png";
import "./UserCard.scss";

function UserCard({ id, name }) {
    return (
        <Link to={`/user/${id}`} className="userCard">
            <img src={user} alt="Utilisateur" className="userCard-icon" />
            <p className="userCard-name">{name}</p>
        </Link>
    );
}

UserCard.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserCard;