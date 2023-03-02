import "./CalorieTracker.scss";
import CalorieTooltip from "../CalorieTooltip/CalorieTooltip";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

function CalorieTracker(props) {
    const data = [
        {
            name: "1",
            weight: 80,
            calories: 220
        },
        {
            name: "2",
            weight: 81,
            calories: 280
        },
        {
            name: "1",
            weight: 81,
            calories: 290
        },
        {
            name: "1",
            weight: 80,
            calories: 160
        },
        {
            name: "1",
            weight: 78,
            calories: 162
        },
        {
            name: "1",
            weight: 76,
            calories: 390
        }
    ];

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