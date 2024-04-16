import style from "./Button.module.css";
const Button = ({ children }) => {
  return <button className={`btn btnDark ${style.submit}`}>{children}</button>;
};
export default Button;
