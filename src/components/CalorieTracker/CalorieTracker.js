import "./CalorieTracker.scss";
import CalorieTooltip from "../CalorieTooltip/CalorieTooltip";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

function CalorieTracker({ data }) {
    return (
        <ResponsiveContainer width={835} height={320}>
            <BarChart
                width={800}
                height={300}
                data={data}
                barGap={8}
                barCategoryGap={40}
            >
                <XAxis dataKey="name" tickLine={false} />
                <YAxis orientation="right" axisLine={false} tickLine={false} />
                <CartesianGrid vertical={false} strokeDasharray="1.5" />
                <Tooltip content={CalorieTooltip} />
                <Legend />
                <Bar dataKey="weight" fill="#282D30" radius={[50, 50, 0, 0]} />
                <Bar dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CalorieTracker;