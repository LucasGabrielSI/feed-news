import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/LucasGabrielSI.png"
        />

        <strong>Lucas Bento</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine width={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}