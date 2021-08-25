import React from 'react';

export function QuoteText(props) {

  return(
    <div id="quote">
      <q id="text" className={`text-${props.bg}`}>
          {props.quote}
      </q>
      <p className={`text-${props.bg}`} id="author">-{props.quoter}</p>
    </div>
  )
}