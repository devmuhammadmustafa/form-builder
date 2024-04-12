import styles from "./FormItem.module.css";
import { FiEdit3 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { PiDotsSixVerticalThin } from "react-icons/pi";
const FormItem = ({ children }) => {
  return (
    <div className={styles.item}>
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
