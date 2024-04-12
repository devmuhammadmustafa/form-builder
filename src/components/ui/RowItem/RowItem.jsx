import styles from "./RowItem.module.css";

const RowItem = ({ component }) => {
  const { id, icon, label, dots } = component;
  return (
    <article className={styles.row}>
      {icon}
      <h4 className={styles.title}>{label}</h4>
      {dots}
    </article>
  );
};
export default RowItem;
