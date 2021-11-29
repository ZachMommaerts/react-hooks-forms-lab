import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, onNewInput}) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" id={uuid()} onChange={onNewInput}/>
      </label>

      <label>
        Category:
        <select name="category" id={uuid()} onChange={onNewInput}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
