import React, { useState } from "react";
import { items } from "../data";
import { Categories } from "./Categories";
import { MenuForm } from "./MenuForm";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

export const Menu = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, serCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuForm items={menuItems} />
    </>
  );
};
