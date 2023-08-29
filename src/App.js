import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Homes from "./components/Homes";
import Realtors from "./components/Realtors";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story/Story";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
