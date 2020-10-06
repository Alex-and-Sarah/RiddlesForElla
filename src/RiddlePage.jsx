import React, { useState } from "react";
import riddles from "./riddles";

const RiddlePage = ({ num, open, setOpen }) => {
  const riddleNum = num - 1;
  const [imgName, setImgName] = useState("answerPhoto");

  return (
    <div className={open ? "card open" : "card"}>
      <div className="card-content">
        <div className="answer-btns">
          <a
            className="waves-effect waves-light btn right green darken-1"
            onClick={() => {
              setOpen(true);
              setImgName("answerPhoto");
            }}
          >
            {riddles[riddleNum].answerPhoto2 ? "Ответ 1" : "Ответ"}
          </a>
          {riddles[riddleNum].answerPhoto2 && (
            <a
              className="waves-effect waves-light btn right green darken-1"
              onClick={() => {
                setOpen(true);
                setImgName("answerPhoto2");
              }}
            >
              Ответ 2
            </a>
          )}
        </div>

        <p>{riddles[riddleNum].riddleText}</p>
      </div>
      <div className={open ? "card-reveal open" : "card-reveal"}>
        <a
          className="btn-floating btn-large waves-effect waves-light red right"
          onClick={() => setOpen(false)}
        >
          <i className="material-icons">close</i>
        </a>
        <img src={`/RiddlesForElla/images/${riddles[riddleNum][imgName]}`} />
      </div>
    </div>
  );
};

export default RiddlePage;
