import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>Apㅇㅈp</div>
    </div>
  );
}
