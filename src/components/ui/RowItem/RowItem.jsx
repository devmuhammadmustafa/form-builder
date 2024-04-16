import styles from "./RowItem.module.css";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const RowItem = ({ component }) => {
  const { id, icon, label, dots } = component;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: component,
  });
  return (
    <article
      className={styles.row}
      ref={setNodeRef}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...attributes}
      {...listeners}
    >
      {icon}
      <h4 className={styles.title}>{label}</h4>
      {dots}
    </article>
  );
};
export default RowItem;
