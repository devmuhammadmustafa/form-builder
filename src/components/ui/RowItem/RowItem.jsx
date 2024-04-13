import styles from "./RowItem.module.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const RowItem = ({ component, activeId }) => {
  const { id, icon, label, dots } = component;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: `${id}` });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <article
      className={styles.row}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      {...style}
    >
      {icon}
      <h4 className={styles.title}>{label}</h4>
      {dots}
    </article>
  );
};
export default RowItem;
