import "./DurationCursor.scss";
import { Rectangle } from "recharts";

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