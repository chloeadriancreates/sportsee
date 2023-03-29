import "./DurationTracker.scss";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

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
            />
            <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide={true} />
            <Tooltip />
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
        </LineChart>
    );
}

export default DurationTracker;