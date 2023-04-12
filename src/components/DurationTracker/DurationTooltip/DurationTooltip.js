import "./DurationTooltip.scss";
import PropTypes from "prop-types";

function DurationTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className="durationTooltip">
          <p className="durationTooltip-text">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
};

export default DurationTooltip;

DurationTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
};