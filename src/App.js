import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Profile from "./components/pages/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            {/* todo: map over links */}
            <Route path="/about" component={About} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/:profileId" component={Profile} />
            <Route path="/" component={Home} />
            <Route path="*">
              <p>404 - no page exists</p>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
