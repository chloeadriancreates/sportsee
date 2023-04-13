import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import PropTypes from "prop-types";

/**
 * Displays the performance tracker.
 * @component
 * @param {Array} data - The user's performance data in each category (from user.performance).
 * @param {Number} modifier - The size modifier for the graph, calculated in Profile.
*/
export default function PerformanceTracker({data, modifier}) {
    return (
        <RadarChart
            width={260 * modifier}
            height={260 * modifier}
            outerRadius={80 * modifier}
            data={data}
            cx="50%"
            cy="50%"
            margin={{ left: 40 * modifier, right: 40 * modifier }}
            style={{ backgroundColor: "#282D30", borderRadius: 5 }}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="type" tick={{ fill: "#FFFFFF", fontSize: 12 * modifier }} />
            <PolarRadiusAxis angle={80} domain={["dataMin - 20", "dataMax + 20"]} axisLine={false} tick={false} />
            <Radar dataKey="score" fill="#FF0101" fillOpacity={0.8} />
        </RadarChart>
    );
}

PerformanceTracker.propTypes = {
    data: PropTypes.array.isRequired,
    modifier: PropTypes.number.isRequired
};