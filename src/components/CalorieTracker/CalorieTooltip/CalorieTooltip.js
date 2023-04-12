import "./CalorieTooltip.scss";
import PropTypes from "prop-types";

/**
 * Displays the calorie tracker's tooltip.
 * @component
 * @param {Boolean} active - The status of the tooltip – passed automatically from CalorieTracker by Recharts.
 * @param {Array} payload - The weight and calorie values of the selected bar – passed automatically from CalorieTracker by Recharts.
*/
export default function CalorieTooltip({ active, payload }) {
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

CalorieTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired
};