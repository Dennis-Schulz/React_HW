import { Link } from "react-router-dom"
import styles from '../styles/ListArticles.module.css'

const ListArticles = () => {
const articles = [
    { id: 1, title: "Статья 1" },
    { id: 2, title: "Статья 2" },
    { id: 3, title: "Статья 3" },
];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Список статей</h1>
      <ul className={styles.articleCard}>
        {articles.map((article) => (
          <li key={article.id} className={styles.articleSnippet}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListArticles