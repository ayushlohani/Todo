import Addtodo from "./component/Addtodo";
import Appname from "./component/Appname";
import "./App.css";
import Item from "./component/Item";
import { useState } from "react";
import Error from "./component/error";
function App() {
  const [todo, settodo] = useState([]);
  let handle = (e, name, date) => {
    settodo([
      ...todo,
      {
        workname: name,
        workdate: date,
      },
    ]);
  };
  let delevent = (e, name) => {
    let temp = todo.filter((val) => val.workname !== name);
    settodo(temp);
    console.log(name);
  };
  return (
    <center>
      <div id="todo">
        <Appname />
        <Addtodo addevent={handle} />
        {todo.length === 0 && <Error />}
        {todo.map((item) => (
          <Item
            len={todo}
            workname={item.workname}
            workdate={item.workdate}
            delevent={delevent}
          />
        ))}
      </div>
    </center>
  );
}

export default App;
