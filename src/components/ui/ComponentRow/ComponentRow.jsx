import { RowItem } from "../../../components";
import styles from "./ComponentRow.module.css";
const ComponentRow = ({ component }) => {
  const { title, items } = component;
  return (
    <div className={styles.row}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.items}>
        {items?.map((item) => (
          <RowItem key={item.id} component={item} />
        ))}
      </div>
    </div>
  );
};
export default ComponentRow;
