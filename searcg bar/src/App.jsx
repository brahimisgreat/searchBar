import { useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import SearchResultsList from "./Components/SearchResultsList";

export default function App() {
  const [results, setResults] = useState([]);

  
  return (
    <div className="wrapper">
      <div className="search-bar-container">
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  );
}
