import Counter from "../../components/Counter/Counter";
import Greeting from "../../components/Greeting/Greeting";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Profile.scss";

function Profile() {
    return (
        <div className="profile">
            <Header />
            <div className="profile-main">
                <Sidebar />
                <div className="profile-main-content">
                    <Greeting name="Thomas" />
                    <div className="profile-main-content-stats">
                        <div className="profile-main-content-stats-counters">
                            <Counter value="1,930" type="Calories" />
                            <Counter value="155" type="Protéines" />
                            <Counter value="290" type="Glucides" />
                            <Counter value="50" type="Lipides" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;