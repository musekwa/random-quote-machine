import React from 'react';

export function Button(props){

  return (
    <div>
      <button 
          className={`btn btn-${props.bg} text-white`}
          id="new-quote" onClick={ props.callback }
      >
          New Quote
      </button>
</div>
  )
}