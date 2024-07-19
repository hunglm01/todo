import React, { useEffect, useState } from "react";

export default function AddTodo(props) {
  const [title, setTitle] = useState("");

  return (
    <form
      className="form-container"
      onSubmit={(e) => {
        e.preventDefault();
        props.addTodo(title);
        setTitle("");
      }}
    >
      <input
        type="text"
        placeholder="Add Todo..."
        className="input-text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input type="submit" value="Submit" className="input-submit" />
    </form>
  );
}
