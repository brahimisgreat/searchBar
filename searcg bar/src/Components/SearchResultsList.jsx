import React from "react";
import './SearchList.css'

export default function SearchResultsList({results}) {
  return (
    <div className="results-list">
        {
            results.map((result, id) => {
                return <div  className={'lists'} key={id}>{result.name}</div>
            })
        }
    </div>
  );
}
