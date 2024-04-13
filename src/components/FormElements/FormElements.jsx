import Button from "../ui/Button/Button";
import { FormItem } from "../../components";
import styles from "./FormElements.module.css";
const FormElements = ({ items }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submit");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {items.map((item) => (
        <FormItem key={item.id} id={item.id}>
          <h1>{item.label}</h1>
        </FormItem>
      ))}

      <Button>Submit</Button>
    </form>
  );
};
export default FormElements;
