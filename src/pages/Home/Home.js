import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import UserCard from "../../components/UserCard/UserCard";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Header />
            <div className="home-content">
                <UserCard id="12" />
                <UserCard id="18" />
                <UserCard id="18" />
            </div>
        </div>
    );
}

export default Home;
