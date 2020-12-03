import styles from "../styles/Home.module.css";
import Router from "next/router";

const handleClickIndex = () => Router.push({ pathname: "/" });
export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Team</h1>
        <a onClick={() => handleClickIndex()}>Home</a>
        <div className={styles.container}>
          <div className={styles.grid}>
            <a className={styles.card}>
              <h2>img001</h2>
            </a>
            <a className={styles.card}>
              {" "}
              <h2>img002</h2>
            </a>
            <a className={styles.card}>
              {" "}
              <h2>img003</h2>
            </a>
            <a className={styles.card}>
              {" "}
              <h2>img004</h2>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
