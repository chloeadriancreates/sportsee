import "./Greeting.scss";

function Greeting(props) {
    const { name } = props;

    return (
        <div className="greeting">
            <h1 className="greeting-heading">Bonjour <span className="greeting-heading-highlight">{name}</span></h1>
            <p className="greeting-subheading">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Greeting;