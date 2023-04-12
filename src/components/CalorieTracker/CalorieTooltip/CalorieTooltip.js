import "./CalorieTooltip.scss";
import PropTypes from "prop-types";

function CalorieTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="calorieTooltip">
          <p className="calorieTooltip-text">{`${payload[0].value}kg`}</p>
          <p className="calorieTooltip-text">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }

    return null;
};

export default CalorieTooltip;

CalorieTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired
};