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
            barGap={8 * modifier}
            barCategoryGap={40 * modifier}
        >
            <XAxis
                dataKey="day"
                tickLine={false}
                fontSize={14 * modifier}
                style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    color: "#74798C"
                }}
            />
            <YAxis dataKey="calories" hide={true} />
            <YAxis
                yAxisId="weight"
                dataKey="weight"
                orientation="right"
                domain={["dataMin - 3", "dataMax + 2"]}
                tickLine={false}
                axisLine={false}
                tickMargin={20 * modifier}
                tickCount={3}
                fontSize={14 * modifier}
                style={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    color: "#74798C"
                }}
            />
            <CartesianGrid vertical={false} strokeDasharray="2" />
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