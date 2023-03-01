import "./Greeting.scss";
import PropTypes from "prop-types";

function Greeting(props) {
    const { name } = props;

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

export default Greeting;