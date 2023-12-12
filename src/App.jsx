import { Header } from "./componentes/header"
import {Post} from './componentes/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./componentes/Sidebar";


const posts= [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/MarceloNFilho.png',
      name: 'Marcelo Nonato',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfolio.  🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt:  new Date('2023-09-22 10:52:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/.png',
      name: 'Caspas Balloufo',
      role: 'Back-end Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:'Acabei de iniciar um novo projeto, logo estarei adicionando ao meu portfolio!'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt:  new Date('2023-09-25 13:32:00'),
  },
];


export function App() {
  return (
    <div> 
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar name="Marcus Nonato" cargo="Web Developer"/>
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )

          })}
        </main>
      </div>
    </div>
  )
}


