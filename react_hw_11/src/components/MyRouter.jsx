import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ListArticles from "../pages/ListArticles"
import Article from "../pages/Article"

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ListArticles />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
  )
}

export default MyRouter