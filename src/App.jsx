import { useState } from "react";
import styles from "./App.module.css";
import { ComponentPanel, FormElements } from "./components";
import { components } from "./constants";
import { DndContext } from "@dnd-kit/core";
import uniqid from "uniqid";
import { findItemById, findItemByKey } from "./utils";

const App = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [items, setItems] = useState([]);

  function handleDragEnd(e) {
    if (e.over?.id !== "droppable" || !e.active.data.current) return;
    const draggedItem = findItemById(e.active.data.current.id, components);
    const uId = uniqid();
    setActiveItem(uId);
    setItems((prev) => [...prev, { ...draggedItem, key: uId }]);
  }

  function handleDeleteItem(key) {
    setItems((prev) => prev.filter((item) => item.key != key));
  }

  const editedItem = findItemByKey(activeItem, items);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <main className={styles.formBuilder}>
        <ComponentPanel components={components} />
        <section className={styles.main}>
          <FormElements
            items={items}
            setItems={setItems}
            handleDeleteItem={handleDeleteItem}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            editedItem={editedItem}
          />
        </section>
        <ComponentPanel components={editedItem?.settings} />
      </main>
    </DndContext>
  );
};
export default App;
