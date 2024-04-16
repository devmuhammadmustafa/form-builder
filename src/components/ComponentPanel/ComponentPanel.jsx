import { ComponentRow } from "../../components";
import styles from "./ComponentPanel.module.css";
const ComponentPanel = ({ components }) => {
  return (
    <aside className={styles.column}>
      {components?.map((component, i) => (
        <ComponentRow component={component} key={i} />
      ))}
    </aside>
  );
};
export default ComponentPanel;
