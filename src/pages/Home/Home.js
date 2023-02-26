import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.scss";
import UserCard from "../../components/UserCard/UserCard";

function Home() {
  return (
    <div className="home">
            <Header />
            <div className="home-main">
                <Sidebar />
                <div className="home-main-content">
                  <UserCard id="12" />
                  <UserCard id="18" />
                  <UserCard id="18" />
                </div>
            </div>
        </div>
  );
}

export default Home;
