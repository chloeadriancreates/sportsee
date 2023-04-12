import UserCard from "../../components/UserCard/UserCard";
import Template from "../../components/Template/Template";
import "./Home.scss";

/**
 * Displays the home page.
 * @component
*/
export default function Home() {
    return (
        <Template orientation="row">
            <UserCard id="12" name="Karl" />
            <UserCard id="18" name="Cecilia" />
            <UserCard id="3" name="Emma" />
        </Template>
    );
}
