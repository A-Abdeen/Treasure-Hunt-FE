import { Title, Description, HomeButton } from "../styles";
import ThingList from "./thing/ThingList";
import TreasureList from "./treasure/TreasureList";

const Home = () => {
  return (
    <>
      <Title>TREASURE HUNT</Title>
      <Description>What you may seek:</Description>
      {/* <HomeImage src="./RustBros.jpg" alt="logoname" /> */}
      <HomeButton to="/things">
        <ThingList />
        Thing List
      </HomeButton>
      <HomeButton to="/treasures">
        <TreasureList />
        Treasure List
      </HomeButton>
    </>
  );
};

export default Home;
