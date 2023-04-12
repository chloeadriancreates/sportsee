import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Template.scss";
import PropTypes from "prop-types";

/**
 * Displays the page template – the sidebar and the header around the rest of the content.
 * @component
 * @param {String} orientation - The content orientation ("row" or "column", used for styling).
 * @param {Array} children - The rest of the page's content – passed automatically by React when using <Template> around other elements.
*/
export default function Template({ orientation, children }) {
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

Template.propTypes = {
    orientation: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  };