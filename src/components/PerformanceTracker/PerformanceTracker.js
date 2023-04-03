import "./PerformanceTracker.scss";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

function PerformanceTracker({data}) {

    return (
        <RadarChart
            outerRadius={80}
            width={260}
            height={260}
            data={data}
            cx="50%"
            cy="50%"
            margin={{ left: 40, right: 40 }}
            style={{ backgroundColor: "#282D30", borderRadius: 5 }}
        >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="type" tick={{ fill: "#FFFFFF", fontSize: 12 }} dy={5} />
            <PolarRadiusAxis angle={80} domain={["dataMin - 10", "dataMax + 20"]} axisLine={false} tick={false} />
            <Radar dataKey="score" fill="#FF0101B2" fillOpacity={0.8} />
        </RadarChart>
    );
}

export default PerformanceTracker;