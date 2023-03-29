import "./DurationTooltip.scss";

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