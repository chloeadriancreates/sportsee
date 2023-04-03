import "./ScoreTracker.scss";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

function ScoreTracker({data}) {
    console.log(data);
    const formattedData = [
      {
        "name": "score",
        "score": data * 100,
        "fill": "#FF0000"
      }
    ];

    return (
        <RadialBarChart
          width={260}
          height={260}
          data={formattedData}
          startAngle={90}
          endAngle={90 + 360}
          innerRadius={70}
          barSize={10}
          style={{ backgroundColor: "#FBFBFB", borderRadius: 5 }}
        >
          <circle cx="50%" cy="50%" fill="white" r="75"></circle>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius="10" />
          <text fontWeight="700" fill="#282D30" x="50%" y="45%" textAnchor="middle" fontSize={26}>{`${data * 100}%`}</text>
          <text fontWeight="500" fill="#74798C" x="50%" y="54%" textAnchor="middle" fontSize={16}>de votre</text>
          <text fontWeight="500" fill="#74798C" x="50%" y="62%" textAnchor="middle" fontSize={16}>objectif</text>
          <text fontWeight="500" fill="#20253A" x="12%" y="15%" textAnchor="start" fontSize={15} dominantBaseline="middle">Score</text>
        </RadialBarChart>
    );
}

export default ScoreTracker;