import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import BgMusic from "./components/ui/BgMusic";
import CharacterGrid from "./components/characters/CharacterGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    getItems();
  }, [query]);

  const getQuery = (q) => {
    setQuery(q);
  };

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <BgMusic />
    </div>
  );
};

export default App;
