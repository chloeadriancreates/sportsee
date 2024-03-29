import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import DurationTooltip from "./DurationTooltip/DurationTooltip";
import DurationCursor from "./DurationCursor/DurationCursor";
import PropTypes from "prop-types";

/**
 * Displays the duration tracker.
 * @component
 * @param {Array} data - The user's session duration data for the past week (from user.pastWeek).
 * @param {Number} modifier - The size modifier for the graph, calculated in Profile.
*/
export default function DurationTracker({data, modifier}) {
    return (
        <LineChart
            width={260 * modifier}
            height={260 * modifier}
            data={data}
            margin={{
                top: 15 * modifier,
                right: 25 * modifier,
                left: 25 * modifier,
                bottom: 15 * modifier
            }}
            style={{ backgroundColor: "#FF0000", borderRadius: 5 }}
        >
            <XAxis
                dataKey="name"
                tick={{ fill: "#ffffff", opacity: 0.5 }}
                tickLine={false}
                axisLine={false}
                fontSize={12 * modifier}
            />
            <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={true} />
            <Line
                type="natural"
                dataKey="duration"
                stroke="#FFFFFF"
                strokeWidth={2 * modifier}
                dot={false}
            />
            <text
                x="5%"
                y="10%"
                textAnchor="start"
                dominantBaseline="middle"
                style={{ opacity: 0.5, fill: "#ffffff", fontSize: 15 * modifier }}
            >
                Durée moyenne des sessions
            </text>
            <Tooltip content={<DurationTooltip />} cursor={<DurationCursor />} />
        </LineChart>
    );
}

DurationTracker.propTypes = {
    data: PropTypes.array.isRequired,
    modifier: PropTypes.number.isRequired
};