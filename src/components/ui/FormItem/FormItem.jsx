import styles from "./FormItem.module.css";
import { FiEdit3 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { PiDotsSixVerticalThin } from "react-icons/pi";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const FormItem = ({ children, id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: `${id}` });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className={styles.item}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      {...style}
    >
      <span className={styles.title}>
        Smiley field (Example) <FiEdit3 />
      </span>
      <div className={styles.actions}>
        <IoTrashOutline />
        <PiDotsSixVerticalThin />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
export default FormItem;
