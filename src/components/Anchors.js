import React from 'react';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

export function Anchors(props) {

  return(
      <div id="tweeter">
        <a className={`text-${props.bg}`} id="tweet-quote"  target="_blank" rel="noreferrer"
            href="https://twitter.com/intent/tweet">
        <FaTwitter />
        </a>
        <a className={`text-${props.bg}`} id="facebook-quote" target="_top"
        href="https://facebook.com" >
        <FaFacebookSquare />
        </a>
      </div>
  )
}