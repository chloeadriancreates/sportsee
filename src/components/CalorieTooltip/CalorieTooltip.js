import "./CalorieTooltip.scss";

function CalorieTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        console.log(payload);
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