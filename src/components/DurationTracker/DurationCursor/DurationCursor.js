import "./DurationCursor.scss";
import { Rectangle } from "recharts";
import PropTypes from "prop-types";

export default function DurationCursor({ points }) {
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

DurationCursor.propTypes = {
  points: PropTypes.array
};