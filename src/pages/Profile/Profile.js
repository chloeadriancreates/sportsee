import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import Greeting from "../../components/Greeting/Greeting";
import Template from "../../components/Template/Template";
import { getData } from "../../utils/getData";
import "./Profile.scss";

function Profile() {
    let { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        getData(`http://localhost:3000/user/${id}`, setUser);
    }, [id]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <Template>
            { user &&
                <div>
                    <Greeting name={user.name} />
                    <div className="stats">
                        <div className="stats-counters">
                            <Counter value={user.calories} type="Calories" />
                            <Counter value={user.protein} type="Protéines" />
                            <Counter value={user.carbs} type="Glucides" />
                            <Counter value={user.lipids} type="Lipides" />
                        </div>
                    </div>
                </div>
            }
        </Template>
    );
}

export default Profile;