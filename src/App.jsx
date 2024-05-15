import {Post} from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Jonathan Reis"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam vero cumque pariatur, provident libero unde alias quibusdam reprehenderit facere quo quidem quasi molestiae iste assumenda est corrupti nesciunt inventore?"
      />
      <Post
        author="Diego Fernandes"
        content="Novo post"
      />
    </div>
  )
}

