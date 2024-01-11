import { useState } from "react";
import "./App.css";
import TodoForm from "./component/form";
import TodoItem from "./component/item";
import { Todoprovider } from "./context/todosontext";
import { useEffect } from "react";

function App() {
  const [todos, settodos] = useState([]);

  const addtodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updatetodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };
  const deletetodo = (id) => {
    settodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  };
  const togglecomplete = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);
  return (
    <Todoprovider
      value={{ todos, addtodo, updatetodo, deletetodo, togglecomplete }}
    >
      <div className="bg-[#eaeaedaa] min-h-screen py-8">
        <div className="w-full bg-[#69a1f460] max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-black">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {todos.length != 0 ? (
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[50vh] text-2xl border-b-4 justify-center flex-col">
              Nothing in your to do list
            </div>
          )}
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
