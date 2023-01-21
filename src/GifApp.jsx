import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { AddItem } from "./components/AddItem";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export const GifApp = () => {

  const [categories, setCategories] = useState(['']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories([newCategory]);
  }

  return (
    <div className="grid justify-center bg-amber-100 dark:bg-slate-800">

      <button className="fixed top-10 right-8 z-[99]">
        <ThemeSwitcher />
      </button>

      <header className="text-center mt-10">
        <h1 className="text-6xl dark:text-slate-400">
          Gif App
        </h1>
      </header>

      <AddCategory onNewCategory={onAddCategory} />

      {
        categories.map((category) => (
          <AddItem
            key={category}
            category={category}
          />
        ))
      }

    </div>
  );
};
