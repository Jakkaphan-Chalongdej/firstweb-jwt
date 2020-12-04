import styles from "../styles/Home.module.css";
import About from "./about";
import Contact from "./contact";
import Form from "../components/layouts/form";
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <div>
        <Form />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}
