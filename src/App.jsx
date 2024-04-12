import styles from "./App.module.css";
import { ComponentPanel, FormElements } from "./components";
import { components } from "./constants";
const App = () => {
  return (
    <main className={styles.formBuilder}>
      <ComponentPanel components={components} />
      <section className={styles.main}>
        <FormElements />
      </section>
      <ComponentPanel />
    </main>
  );
};
export default App;
