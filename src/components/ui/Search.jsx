import { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    document.querySelector("#audio").play();
    setText(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters"
          value={text}
          autoFocus
          className="form-control"
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
