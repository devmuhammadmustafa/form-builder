import { useSortable } from "@dnd-kit/sortable";
import styles from "./FormItem.module.css";
import { FiEdit3 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { PiDotsSixVerticalThin } from "react-icons/pi";

const FormItem = ({ children, id, uId, handleDeleteItem, setActiveItem }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "",
    transition,
  };

  return (
    <div className={styles.item}>
      <span className={styles.title} onClick={() => setActiveItem(uId)}>
        Smiley field (Example) <FiEdit3 />
      </span>
      <div className={styles.actions}>
        <IoTrashOutline onClick={() => handleDeleteItem(uId)} />
        <PiDotsSixVerticalThin />
      </div>
      <div
        className={styles.content}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};

export default FormItem;
