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
      // },
      // {
      //   "name": "score-max",
      //   "score": 1,
      //   "fill": "#FBFBFB"
      // }
    ];

    return (
        // <RadialBarChart cx="50%" cy="50%" style={{ backgroundColor: "#FBFBFB" }} width={260} height={260} margin={{ top: 30, right: 30, bottom: 30, left: 30 }} innerRadius={70} barSize={10} data={formattedData} startAngle={100} endAngle={420} >
        //   <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={1} tick={false} />
        //   <RadialBar background dataKey="uv" angleAxisId={1} fill="#E60000" cornerRadius="10" data={[data[0]]} />
        //   <text className="scoreSize" fontWeight="700" fontSize={26} fill="#282D30" x="50%" y="44%" textAnchor="middle">{`${data * 100}%`}</text>
        //   <text className="graphTitle" fontWeight="500" fill="#74798C" x="50%" y="51%" textAnchor="middle">de votre</text>
        //   <text className="graphTitle" fontWeight="500" fill="#74798C" x="50%" y="59%" textAnchor="middle">objectif</text>
        //   <text className="graphTitle" x="12%" y="15%" width={147} height={48} textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 500 }} >
        //       Score </text>
        // </RadialBarChart>
        <RadialBarChart
          width={260}
          height={260}
          data={formattedData}
          startAngle={90}
          endAngle={90 + 360}
          innerRadius={70}
          barSize={10}
          style={{ backgroundColor: "#FBFBFB" }}
        >
          <circle cx="50%" cy="50%" fill="white" r="75"></circle>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={1} tick={false} />
          <RadialBar dataKey="score" angleAxisId={1} cornerRadius="10" />
          <text fontWeight="700" fontSize={26} fill="#282D30" x="50%" y="45%" textAnchor="middle">{`${data * 100}%`}</text>
          <text fontWeight="500" fill="#74798C" x="50%" y="54%" textAnchor="middle">de votre</text>
          <text fontWeight="500" fill="#74798C" x="50%" y="62%" textAnchor="middle">objectif</text>
          <text x="12%" y="15%" width={147} height={48} textAnchor="start" dominantBaseline="middle" fill="#20253A" style={{ fontWeight: 500 }} >Score </text>
        </RadialBarChart>
    );
}

export default ScoreTracker;