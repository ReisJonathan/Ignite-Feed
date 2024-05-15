import styles from './Sidebar.module.css';
import { PencilLine } from '@phosphor-icons/react';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1516656690944-e76698b2aa38?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/ReisJonathan.png" />

        <strong>Jonathan Reis</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}