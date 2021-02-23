import { Redirect } from "react-router";
import { Title, Description, HomeButton } from "../styles";
import ThingList from "./thing/ThingList";
import TreasureList from "./treasure/TreasureList";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      <Title>TREASURE HUNT</Title>
      <Description>What you may seek:</Description>
      {/* <HomeImage src="./RustBros.jpg" alt="logoname" /> */}
      <HomeButton to="/things">Thing List</HomeButton>

      <HomeButton to="/treasures">Treasure List</HomeButton>
    </>
  );
};

export default Home;
