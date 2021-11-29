import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [itemList, setItemList] = useState(items);
  const [newItem, setNewItem] = useState({
    name: '',
    category: 'Produce',
  })

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = itemList.filter((item) => {
    if(search === '' || item.name.includes(search)){
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    }
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleNewItem(e) {
    setNewItem({
      ...newItem,
      id: e.target.id,
      [e.target.name]: e.target.value
    });
  }
  
  function onItemFormSubmit(e){
    e.preventDefault();

    setItemList([...itemList, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onNewInput={handleNewItem} onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
