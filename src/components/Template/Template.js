import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Template.scss";
import PropTypes from "prop-types";

function Template({ orientation, children }) {
    return (
        <div className="template">
            <Sidebar />
            <Header />
            <div className={`template-content template-content--${orientation}`}>
                {children}
            </div>
        </div>
    );
}

export default Template;

Template.propTypes = {
    orientation: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  };