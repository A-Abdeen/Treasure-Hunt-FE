import { Title, Description, HomeButton } from "../styles";
const Home = () => {
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
