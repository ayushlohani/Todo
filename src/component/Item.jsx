import { useState } from "react";
import "./itemtod.css";
function Item({ workname = "nothing", workdate = "01/01/0001", delevent }) {
  let deli = (e) => {
    delevent(e, workname);
  };
  return (
    <div class="row p-4 itemtodo d-flex main">
      <div class="col-sm-4 p-3 name">{workname}</div>
      <div class="col-sm-4 p-3 name">{workdate}</div>
      <div class="col-sm-2 float-end">
        <button type="button" class="btn btn-danger but" onClick={deli}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Item;
