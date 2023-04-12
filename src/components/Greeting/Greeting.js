import "./Greeting.scss";
import PropTypes from "prop-types";

export default function Greeting({name}) {

    return (
        <div className="greeting">
            <h1 className="greeting-heading">Bonjour <span className="greeting-heading-highlight">{name}</span></h1>
            <p className="greeting-subheading">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

Greeting.propTypes = {
    name: PropTypes.string
};