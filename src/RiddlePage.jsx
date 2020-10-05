import React from "react";
import riddles from "./riddles";

const RiddlePage = ({ num, open, setOpen }) => {
  return (
    <div className={open ? "card open" : "card"}>
      <div className="card-content">
        <a
          className="waves-effect waves-light btn right green darken-1"
          onClick={() => setOpen(true)}
        >
          Ответ
        </a>
        <p>{riddles[num - 1].riddleText}</p>
      </div>
      <div className={open ? "card-reveal open" : "card-reveal"}>
        <a
          className="btn-floating btn-large waves-effect waves-light red right"
          onClick={() => setOpen(false)}
        >
          <i className="material-icons">close</i>
        </a>
        <img src={`/RiddlesForElla/images/${riddles[num - 1].answerPhoto}`} />
      </div>
    </div>
  );
};

export default RiddlePage;
