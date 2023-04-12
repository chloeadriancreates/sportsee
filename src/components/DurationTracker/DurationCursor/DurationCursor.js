import "./DurationCursor.scss";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

function DurationCursor({ points }) {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[1].x}
        width={260}
        height={260}
      />
    );
};

export default DurationCursor;

DurationCursor.propTypes = {
  points: PropTypes.array
};