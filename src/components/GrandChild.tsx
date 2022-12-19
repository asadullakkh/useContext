import { useContext, useState } from "react";
import { ParentContext } from "../context/ParentContext";

const GrandChild = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(ParentContext);

  function onSubmit(e: any): void {
    e.preventDefault();
    addTodo(input);

    setInput("");
  }

  return (
    <div>
      <h2>GrandChild</h2>
      <form onSubmit={onSubmit}>
        <span> add todo</span>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default GrandChild;
