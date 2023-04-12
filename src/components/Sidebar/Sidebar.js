import "./Sidebar.scss";
import bike from "../../assets/bike.svg";
import lift from "../../assets/lift.svg";
import swim from "../../assets/swim.svg";
import yoga from "../../assets/yoga.svg";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-box">
                <div className="sidebar-box-button">
                    <img className="sidebar-box-button-icon" src={yoga} alt="Yoga" />
                </div>
                <div className="sidebar-box-button">
                    <img className="sidebar-box-button-icon" src={swim} alt="Natation" />
                </div>
                <div className="sidebar-box-button">
                    <img className="sidebar-box-button-icon" src={bike} alt="Vélo" />
                </div>
                <div className="sidebar-box-button">
                    <img className="sidebar-box-button-icon" src={lift} alt="Musculation" />
                </div>
            </div>
                <p className="sidebar-copyright">Copyright, SportSee 2020</p>
        </div>
    );
}