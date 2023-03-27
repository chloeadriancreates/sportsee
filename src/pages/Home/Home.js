import UserCard from "../../components/UserCard/UserCard";
import Template from "../../components/Template/Template";
import "./Home.scss";

function Home() {
    return (
        <Template orientation="row">
            <UserCard id="12" name="Karl" />
            <UserCard id="18" name="Cecilia" />
            <UserCard id="3" name="Emma" />
        </Template>
    );
}

export default Home;
