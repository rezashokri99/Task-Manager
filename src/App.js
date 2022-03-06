import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className={styles.App}>
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default App;
