import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
            <Header />
            <div className="home-main">
                <Sidebar />
                <div className="home-main-content">
                  <Link to="/user/12">User 12</Link>
                  <Link to="/user/18">User 18</Link>
                </div>
            </div>
        </div>
  );
}

export default Home;
