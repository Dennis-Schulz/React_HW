import ReactDOM from 'react-dom/client';
import App from './App';
import styles from './styles/Index.module.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={styles.index}>
    <App />
  </div>
);


