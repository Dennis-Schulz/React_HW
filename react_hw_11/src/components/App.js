import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";
import Navbar from "./Navbar";
import styles from '../styles/App.module.css'


function App() {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Navbar />
      <main className={styles.mainContent}> 
        <div className={styles.pageTransition}> 
      <MyRouter />
      </div>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
