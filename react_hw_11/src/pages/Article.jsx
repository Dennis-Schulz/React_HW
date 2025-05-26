import { useParams, useNavigate } from 'react-router-dom'
import styles from '../styles/Article.module.css'

const Article = () => {
  const articles = {
    1: 'Текст статьи 1',
    2: 'Текст статьи 2',
    3: 'Текст статьи 3',
  }
  const { id } = useParams()
  const navigate = useNavigate()
  const content = articles[id]

  if (!content) {
    return <h2>Статья не найдена</h2>
  }

  return (
    <div  className={styles.container}>
      <h1 className={styles.title}>Статья {id}</h1>
      <p className={styles.content}>Содержание статьи: {content}</p>
      <p className={styles.content}>Текущий путь: {window.location.pathname}</p>
      <button className={styles.button} onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default Article
