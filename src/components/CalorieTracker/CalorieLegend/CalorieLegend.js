import "./CalorieLegend.scss";
import PropTypes from "prop-types";

export default function CalorieLegend({ payload }) {
    return (
        <div className="calorieLegend">
            <h2 className="calorieLegend-title">Activité quotidienne</h2>
            <ul className="calorieLegend-list">
                {
                payload.map((entry, index) => {
                    return (<li className="calorieLegend-list-item" key={`item-${index}`}>
                                <svg className="calorieLegend-list-item-bullet" height="8" width="8">
                                    <circle cx="4" cy="4" r="4" fill={entry.color} />
                                </svg>
                                {entry.value}
                            </li>);
                })}
            </ul>
        </div>
    );
};

CalorieLegend.propTypes = {
    payload: PropTypes.array.isRequired
};