import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
  function showName() {
    console.log("Mike");
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button
        onClick={() => {
          console.log(30);
        }}
      >
        Show age
      </button>
      <World />
      <World />
      <div className={styles.box}>Hello</div>
    </div>
  );
}
