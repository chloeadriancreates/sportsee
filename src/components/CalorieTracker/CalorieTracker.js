import "./CalorieTracker.scss";
import CalorieTooltip from "./CalorieTooltip/CalorieTooltip";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import CalorieLegend from "./CalorieLegend/CalorieLegend";

function CalorieTracker({data, modifier}) {
    return (
        <BarChart
            width={835 * modifier}
            height={320 * modifier}
            data={data}
            barSize={7 * modifier}
            barGap={8 * modifier}
            barCategoryGap={40 * modifier}
            margin={{
                top: 25 * modifier,
                right: 30 * modifier,
                left: 30 * modifier,
                bottom: 25 * modifier
            }}
            style={{ backgroundColor: "#FBFBFB", borderRadius: 5 }}
        >
            <CartesianGrid vertical={false} strokeDasharray="2" />
            <XAxis
                dataKey="day"
                tickLine={false}
                stroke="#DEDEDE"
                tick={{
                    fill: "#9B9EAC",
                    fontWeight: 500,
                    fontSize: 14 * modifier
                }}
            />
            <YAxis dataKey="calories" hide={true} tickCount={3} />
            <YAxis
                yAxisId="weight"
                dataKey="weight"
                orientation="right"
                domain={["dataMin - 3", "dataMax + 2"]}
                tickLine={false}
                axisLine={false}
                tickMargin={20 * modifier}
                tickCount={3}
                stroke="#DEDEDE"
                tick={{
                    fill: "#9B9EAC",
                    fontWeight: 500,
                    fontSize: 14 * modifier
                }}
            />
            <Tooltip content={CalorieTooltip} />
            <Bar dataKey="weight" fill="#282D30" radius={[50, 50, 0, 0]} name="Poids (kg)" />
            <Bar dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} name="Calories (kCal)" />
            <Legend content={CalorieLegend} verticalAlign="top" />
        </BarChart>
    );
}

CalorieTracker.propTypes = {
    data: PropTypes.array.isRequired
};

export default CalorieTracker;