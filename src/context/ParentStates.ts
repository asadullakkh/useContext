import { useState } from "react";

export const defaultValue = () => {
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo(todo: string) {
    setTodos([...todos, todo]);
  }

  function removeTodo(todo: string) {
    setTodos([...todos.filter((e) => e != todo)]);
  }

  return {
    todos,
    addTodo,
    removeTodo,
  };
};
