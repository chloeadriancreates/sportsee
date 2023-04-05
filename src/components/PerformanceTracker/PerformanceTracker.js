import "./PerformanceTracker.scss";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

function PerformanceTracker({data, modifier}) {

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
            <PolarRadiusAxis angle={80} domain={["dataMin - 10", "dataMax + 20"]} axisLine={false} tick={false} />
            <Radar dataKey="score" fill="#FF0101B2" fillOpacity={0.8} />
        </RadarChart>
    );
}

export default PerformanceTracker;