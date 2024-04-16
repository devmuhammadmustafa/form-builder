import { FormItem, IconComponent, Button } from "../../components";
import styles from "./FormElements.module.css";
import { DndContext, useDroppable } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

const FormElements = ({ items, setItems, handleDeleteItem, setActiveItem }) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
  };

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    setItems((prevItems) => arrayMove(prevItems, oldIndex, newIndex));
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <form onSubmit={handleSubmit} className={styles.form} ref={setNodeRef}>
        <SortableContext
          items={items}
          key={items.map((item) => item.id).join("-")}
        >
          {items.map((item) => (
            <FormItem
              key={item.key}
              id={item.id}
              handleDeleteItem={handleDeleteItem}
              setActiveItem={setActiveItem}
              uId={item.key}
            >
              {(() => {
                switch (item.type) {
                  case "icon":
                    return <IconComponent item={item} />;
                  case "text":
                    return <TextComponent />;
                  case "image":
                    return <ImageComponent />;
                  default:
                    return <h1>{item.label}</h1>;
                }
              })()}
            </FormItem>
          ))}
        </SortableContext>
        {items.length > 0 && <Button type="submit">Submit</Button>}
      </form>
    </DndContext>
  );
};

export default FormElements;
