import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import RiddlePage from "./RiddlePage";
import { introText } from "./riddles";
import riddles from "./riddles";

const IntroCard = () => {
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">Загадки Эллы</span>
        <p>{introText}</p>
      </div>
      <div className="card-action">
        <a className="waves-effect waves-light btn" href="/1">
          Идти
        </a>
      </div>
    </div>
  );
};

const App = () => {
  console.log(riddles.length);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/RiddlesForElla/"
            exact
            component={() => <IntroCard />}
          />

          {[...Array(riddles.length)].map((e, i) => (
            <Route
              key={i + 1}
              path={`/RiddlesForElla/${i + 1}`}
              exact
              component={() => <RiddlePage num={i + 1} />}
            />
          ))}
        </Switch>

        <ul className="pagination">
          <li className="disabled">
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          <li className="active">
            <a href="/RiddlesForElla/">Intro</a>
          </li>

          {[...Array(riddles.length)].map((e, i) => (
            <li className="waves-effect" key={i}>
              <a href={`/RiddlesForElla/${i + 1}`}>{i + 1}</a>
            </li>
          ))}

          <li className="waves-effect">
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </Router>
    </div>
  );
};

export default App;
