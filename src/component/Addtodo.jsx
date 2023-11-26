import { useState } from "react";
import "./addtodo.css";

function Addtodo({ addevent }) {
  const [inname, setinname] = useState("Name not Mentioned");
  const [indate, setindate] = useState("Date not Mentioned");
  let addto = (e) => {
    addevent(e, inname, indate);
    setinname("");
    setindate("");
  };
  return (
    <div class="container text-center">
      <div class="row m-4">
        <div class="col-sm-4">
          <input
            type="text"
            placeholder="Write Todo here"
            value={inname}
            onChange={(e) => {
              setinname(e.target.value);
            }}
          ></input>
        </div>
        <div class="col-sm-4">
          <input
            type="date"
            value={indate}
            onChange={(e) => {
              setindate(e.target.value);
            }}
          ></input>
        </div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-success" onClick={addto}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
