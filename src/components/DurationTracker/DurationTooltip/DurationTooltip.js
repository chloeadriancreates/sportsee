import "./DurationTooltip.scss";
import PropTypes from "prop-types";

/**
 * Displays the duration tracker's tooltip.
 * @component
 * @param {Boolean} active - The status of the tooltip – passed automatically from DurationTracker by Recharts.
 * @param {Array} payload - The duration value of the selected point – passed automatically from DurationTracker by Recharts.
*/
export default function DurationTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="durationTooltip">
          <p className="durationTooltip-text">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
};

DurationTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
};