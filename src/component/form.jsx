import React from "react";
import { useState } from "react";
import { useTodo } from "../context/todosontext";
function TodoForm() {
  const [todo, settodo] = useState("");
  const { addtodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addtodo({ todo: todo, completed: false });
    settodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="bg-[white] w-full border border-black/10 rounded-l-lg px-3 outline-none duration-15 py-1.5"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-9 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
