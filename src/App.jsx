import { useState } from "react";
import styles from "./App.module.css";
import { ComponentPanel, FormElements } from "./components";
import { components } from "./constants";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
const App = () => {
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(
    components.map((component) => ({
      title: component.title,
      items: component.items.slice(), // Copy the items array to avoid mutating the original data
    }))
  );

  const [formItems, setFormItems] = useState(components[0].items.slice(0, 2));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    console.log(event);
    const { active, over } = event;

    // Ensure active and over are defined and have id properties
    if (!active || !over || !active.id || !over.id || active.id === over.id) {
      return;
    }
    setFormItems((prev) => [...prev, { label: "test", id: 4 }]);
    setItems((prevItems) => {
      // Create a deep copy of prevItems to avoid mutating state directly
      const newItems = prevItems.map((component) => ({
        ...component,
        items: [...component.items], // Create a new array for items
      }));

      // Find the active item in newItems
      const activeItem = findItem(newItems, active.id);

      // Ensure the active item is found
      if (!activeItem) {
        return prevItems; // Return previous state if active item is not found
      }

      // Find the over item in newItems
      const overItem = findItem(newItems, over.id);

      // Ensure the over item is found
      if (!overItem) {
        return prevItems; // Return previous state if over item is not found
      }

      // Find the indexes of active and over items within their respective containers
      const activeIndex = activeItem.items.findIndex(
        (item) => item.id == active.id
      );

      const overIndex = overItem.items.findIndex((item) => item.id == over.id);
      // Move the active item to the new position
      const removedItem = activeItem.items.splice(activeIndex, 1)[0];
      overItem.items.splice(overIndex, 0, removedItem);
      return newItems; // Return the updated state
    });
  }

  // Helper function to find an item by its id within an array of components
  function findItem(components, id) {
    return components.find((component) =>
      component.items.some((item) => item.id == id)
    );
  }

  function handleDragStart(event) {
    const { active } = event;
    setActiveId(active.id);
  }

  function handleDragEnd1(event) {
    const { active, over } = event;
    console.log(2);
  }

  function handleDragStart1(event) {
    const { active } = event;
    console.log(1);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <main className={styles.formBuilder}>
        <SortableContext
          items={components}
          strategy={verticalListSortingStrategy}
        >
          <ComponentPanel components={items} activeId={activeId} />
        </SortableContext>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart1}
          onDragEnd={handleDragEnd1}
        >
          <section className={styles.main}>
            <SortableContext
              items={formItems}
              strategy={verticalListSortingStrategy}
            >
              <FormElements items={formItems} />
            </SortableContext>
          </section>
        </DndContext>
        <ComponentPanel />
      </main>
      <DragOverlay>
        {activeId ? <h1 id={activeId}>jnjn </h1> : null}
      </DragOverlay>
    </DndContext>
  );
};
export default App;
