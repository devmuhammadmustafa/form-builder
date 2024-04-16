import { RowItem } from "../../../components";
import styles from "./ComponentRow.module.css";
const ComponentRow = ({ component }) => {
  console.log(component, "compposd");
  const { title, items, type } = component;
  return (
    <div className={styles.row}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.items}>
        {!type &&
          items?.map((item) => <RowItem key={item.id} component={item} />)}

        {type &&
          (() => {
            switch (type) {
              case "icon":
                return <h1>Edit Icon component</h1>;
              case "text":
                return <h1>Edit Text component</h1>;
              case "image":
                return <h1>Edit Image component</h1>;
              default:
                return <h1>Edit Other component</h1>;
            }
          })()}
      </div>
    </div>
  );
};
export default ComponentRow;
