import "./DurationTracker.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import DurationTooltip from "../DurationTooltip/DurationTooltip";
import DurationCursor from "../DurationCursor/DurationCursor";

function DurationTracker({data}) {
    return (
        <LineChart
            width={260}
            height={260}
            data={data}
            style={{ backgroundColor: "#FF0000", borderRadius: 5 }}
        >
            <XAxis
                dataKey="name"
                tick={{ fill: "#ffffff", opacity: 0.5 }}
                tickLine={false}
                axisLine={false}
                fontSize={12}
                style={{ margin: "12px" }}
            />
            <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={true} />
            <Line
                type="natural"
                dataKey="duration"
                stroke="#FFFFFF"
                strokeWidth={2}
                dot={false}
            />
            <text
                x="5%"
                y="10%"
                textAnchor="start"
                dominantBaseline="middle"
                style={{ opacity: 0.5, fill: "#ffffff", fontSize: 15 }}
            >
                Durée moyenne des sessions
            </text>
            <Tooltip content={<DurationTooltip />} cursor={<DurationCursor />} />
        </LineChart>
    );
}

export default DurationTracker;