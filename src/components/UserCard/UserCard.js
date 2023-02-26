import { Link } from "react-router-dom";
import user from "../../assets/user.png";
import "./UserCard.scss";

function UserCard(props) {
    const { id } = props;
    return (
        <Link to={`/user/${id}`} className="userCard">
            <img src={user} alt="Utilisateur" className="userCard-icon" />
            <p className="userCard-name">User {id}</p>
        </Link>
    );
}

export default UserCard;