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
                </div>
            </div>
        </div>
    );
}

export default Profile;