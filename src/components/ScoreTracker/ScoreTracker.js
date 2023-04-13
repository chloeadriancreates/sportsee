import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";

/**
 * Displays the score tracker.
 * @component
 * @param {Number} data - The user's score (from user.score).
 * @param {Number} modifier - The size modifier for the graph, calculated in Profile.
*/
export default function ScoreTracker({data, modifier}) {
    const formattedData = [
      {
        "name": "score",
        "score": data * 100,
        "fill": "#FF0000"
      }
    ];

    return (
          <RadialBarChart
            width={260 * modifier}
            height={260 * modifier}
            data={formattedData}
            startAngle={90}
            endAngle={90 + 360}
            innerRadius={70 * modifier}
            barSize={10 * modifier}
            style={{ backgroundColor: "#FBFBFB", borderRadius: 5 }}
          >
            <circle cx="50%" cy="50%" fill="white" r={75 * modifier}></circle>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="score" cornerRadius="10" />
            <text fontWeight="700" fill="#282D30" x="50%" y="45%" textAnchor="middle" fontSize={26 * modifier}>{`${data * 100}%`}</text>
            <text fontWeight="500" fill="#74798C" x="50%" y="54%" textAnchor="middle" fontSize={16 * modifier}>de votre</text>
            <text fontWeight="500" fill="#74798C" x="50%" y="62%" textAnchor="middle" fontSize={16 * modifier}>objectif</text>
            <text fontWeight="500" fill="#20253A" x="12%" y="15%" textAnchor="start" fontSize={15 * modifier} dominantBaseline="middle">Score</text>
          </RadialBarChart>
    );
}

ScoreTracker.propTypes = {
  data: PropTypes.number.isRequired,
  modifier: PropTypes.number.isRequired
};