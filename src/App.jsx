import React, { useState, useEffect } from "react";
import "./App.css";
import RiddlePage from "./RiddlePage";
import { introText } from "./riddles";
import riddles from "./riddles";

const IntroCard = () => {
  return (
    <div className="card">
      <div className="card-content black-text">
        <p>{introText}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [currPage, setCurrPage] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [currPage]);

  return (
    <div className="App">
      {currPage ? (
        <RiddlePage num={currPage} open={open} setOpen={setOpen} />
      ) : (
        <IntroCard />
      )}

      <ul className="pagination">
        <li className={currPage ? "waves-effect" : "disabled"}>
          <a onClick={() => currPage > 0 && setCurrPage(currPage - 1)}>
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className={currPage === 0 ? "active" : "waves-effect"}>
          <a onClick={() => setCurrPage(0)}>Начало</a>
        </li>

        {[...Array(riddles.length)].map((e, i) => {
          const num = i + 1;
          return (
            <li
              className={currPage === num ? "active" : "waves-effect"}
              key={num}
            >
              <a
                onClick={() => {
                  setCurrPage(num);
                  return false;
                }}
              >
                {num}
              </a>
            </li>
          );
        })}

        <li
          className={currPage === riddles.length ? "disabled" : "waves-effect"}
        >
          <a
            onClick={() =>
              currPage < riddles.length && setCurrPage(currPage + 1)
            }
          >
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
