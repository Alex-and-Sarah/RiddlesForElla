import React from "react";
import riddles from "./riddles";

const RiddlePage = ({ num }) => {
  return (
    <div class="card">
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          <a class="activator waves-effect waves-light btn right green darken-1">
		  	показывай	
          </a>
        </span>
        <p>{riddles[num - 1].riddleText}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          <a class="btn-floating btn-large waves-effect waves-light red right">
            <i class="material-icons">close</i>
          </a>
        </span>
        <img
          class="activator"
          src={`/RiddlesForElla/images/${riddles[num - 1].answerPhoto}`}
        />
      </div>
    </div>
  );
};

export default RiddlePage;
