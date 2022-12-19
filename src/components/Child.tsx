import GrandChild from "./GrandChild";
import { useContext } from "react";
import { ParentContext } from "../context/ParentContext";
import "../assets/child.css";

const Child = () => {
  const { todos, removeTodo } = useContext(ParentContext);

  return (
    <div className="child">
      <div>
        <h2>Child</h2>

        <h4>Todos:</h4>
        {todos.map((e, i) => (
          <span key={i}>
            <p>{e}</p>
            <p onClick={() => removeTodo(e)}>x</p>
          </span>
        ))}
      </div>
      <GrandChild />
    </div>
  );
};
export default Child;
