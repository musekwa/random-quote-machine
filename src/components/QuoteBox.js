import React from "react";
import { Anchors } from "./Anchors";
import "../App.css";
import { Button } from "./Button";
import { QuoteText } from "./QuoteText";

export const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <div className="bg-white">
        <QuoteText bg={props.bg} quote={props.quote} quoter={props.quoter} />
        <div className="container">
          <Anchors bg={props.bg} />
          <div id="buttons">
            <Button bg={props.bg} callback={props.callback} />
          </div>
        </div>
      </div>
      <div>
        <footer id="footer">
          <p>by Musekwa</p>
        </footer>
      </div>
    </div>
  );
};
