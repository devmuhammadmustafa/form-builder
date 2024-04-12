import styles from "./Button.module.css";
const Button = ({ children }) => {
  return <a className={styles.btn}>{children}</a>;
};
export default Button;
