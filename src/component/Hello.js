import World from "./World";
import styles from "./Hello.module.css";

export default function Hello() {
  function showName() {
    console.log("Mike");
  }
  function showText(txt) {
    console.log(txt);
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
      <input
        type="text"
        onChange={(e) => {
          const txt = e.target.value;
          showText(txt);
        }}
      />
      <World />
      <World />
      <div className={styles.box}>Hello</div>
    </div>
  );
}
