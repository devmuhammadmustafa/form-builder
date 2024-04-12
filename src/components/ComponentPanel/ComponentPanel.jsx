import { ComponentRow } from "../../components";
import styles from "./ComponentPanel.module.css";
const ComponentPanel = ({ components }) => {
  return (
    <aside className={styles.column}>
      {components?.map((component, index) => (
        <ComponentRow component={component} key={index} />
      ))}
    </aside>
  );
};
export default ComponentPanel;
