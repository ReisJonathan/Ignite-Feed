import {Post} from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css'
import { Sidebar } from './components/Sidebar';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Jonathan Reis"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam vero cumque pariatur, provident libero unde alias quibusdam reprehenderit facere quo quidem quasi molestiae iste assumenda est corrupti nesciunt inventore?"
          />
          <Post
            author="Diego Fernandes"
            content="Novo post"
          />
        </main>
      </div>
      
    </div>
  )
}

