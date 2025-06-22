import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Main from "./pages/Main/Main";
import Contacts from "./pages/Contacts/Contacts";
import News from "./pages/News/News";
import { Route, Routes } from "react-router-dom";
import "./global.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  
  );
}

export default App;
