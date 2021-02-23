import React from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Home from "./components/Home.js";
import NavBar from "./components/NavBar";
import TreasureList from "./components/treasure/TreasureList";
import ThingList from "./components/thing/ThingList";

const theme = {
  mainColor: "#000000",
  backgroundColor: "#4f3a12",
  rust: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/things">
          <ThingList />
        </Route>
        <Route path="/treasures">
          <TreasureList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;
