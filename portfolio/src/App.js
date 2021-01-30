import React from "react";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path={"/"}>
          <About/>
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio/>
        </Route>
        <Route exact path={"/contact"}>
          <Contact/>
        </Route>
        <Route>
          <About/>
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;