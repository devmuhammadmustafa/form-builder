import Button from "../ui/Button/Button";
import { FormItem } from "../../components";
import styles from "./FormElements.module.css";
const FormElements = () => {
  return (
    <form className={styles.form}>
      <FormItem>
        <h1>hello</h1>
      </FormItem>
      <FormItem>
        <h1>hello</h1>
      </FormItem>
      <FormItem>
        <h1>hello</h1>
      </FormItem>
      <Button>Submit</Button>
    </form>
  );
};
export default FormElements;
