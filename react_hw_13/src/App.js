import { connect } from "react-redux";
import Filter from "./components/Filter";
import Userlist from "./components/UserList";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>User List</h1>
      <Filter />
      <Userlist />
    </div>
  );
}

export default connect()(App);
