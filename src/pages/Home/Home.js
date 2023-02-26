import UserCard from "../../components/UserCard/UserCard";
import Template from "../../components/Template/Template";
import "./Home.scss";

function Home() {
    return (
        <Template>
            <UserCard id="12" />
            <UserCard id="18" />
            <UserCard id="18" />
        </Template>
    );
}

export default Home;
