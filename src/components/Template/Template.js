import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Template.scss";

function Template({ children }) {
    return (
        <div className="template">
            <Sidebar />
            <Header />
            <div className="template-content">
                {children}
            </div>
        </div>
    );
}

export default Template;