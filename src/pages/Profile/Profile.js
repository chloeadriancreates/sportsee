import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "../../components/Counter/Counter";
import Greeting from "../../components/Greeting/Greeting";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
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
        <div className="profile">
            <Header />
            <div className="profile-main">
                <Sidebar />
                { user &&
                    <div className="profile-main-content">
                        <Greeting name={user.data.userInfos.firstName} />
                        <div className="profile-main-content-stats">
                            <div className="profile-main-content-stats-counters">
                                <Counter value={user.data.keyData.calorieCount} type="Calories" />
                                <Counter value={user.data.keyData.proteinCount} type="Protéines" />
                                <Counter value={user.data.keyData.carbohydrateCount} type="Glucides" />
                                <Counter value={user.data.keyData.lipidCount} type="Lipides" />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Profile;