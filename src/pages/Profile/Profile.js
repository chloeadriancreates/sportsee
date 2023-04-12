import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CalorieTracker from "../../components/CalorieTracker/CalorieTracker";
import Counter from "../../components/Counter/Counter";
import DurationTracker from "../../components/DurationTracker/DurationTracker";
import Greeting from "../../components/Greeting/Greeting";
import PerformanceTracker from "../../components/PerformanceTracker/PerformanceTracker";
import ScoreTracker from "../../components/ScoreTracker/ScoreTracker";
import Template from "../../components/Template/Template";
import { getUserData } from "../../services/getUserData";
import "./Profile.scss";

function Profile() {
    let { id } = useParams();
    const [user, setUser] = useState({});
    const [windowWidth, setWindowWidth] = useState(0);
    const [modifier, setModifier] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(id);
            setUser(data);
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
      }, []);

    useEffect(() => {
    if(windowWidth < 1100) {
        setModifier(0.6);
    } else if(windowWidth < 1350) {
        setModifier(0.8);
    } else {
        setModifier(1);
    }
    }, [windowWidth]);

    if (Object.keys(user).length) {
        return (
            <Template orientation="column">
                        <Greeting name={user.name} />
                        <div className="stats">
                            <div className="stats-graphs">
                                <CalorieTracker data={user.pastWeek} modifier={modifier} />
                                <div className="stats-graphs-row">
                                    <DurationTracker data={user.pastWeek} modifier={modifier} />
                                    <PerformanceTracker data={user.performance} modifier={modifier} />
                                    <ScoreTracker data={user.score} modifier={modifier} />
                                </div>
                            </div>
                            <div className="stats-counters">
                                <Counter value={user.overview.calories} type="Calories" />
                                <Counter value={user.overview.protein} type="Protéines" />
                                <Counter value={user.overview.carbs} type="Glucides" />
                                <Counter value={user.overview.lipids} type="Lipides" />
                            </div>
                        </div>
            </Template>
        );
    }
}

export default Profile;