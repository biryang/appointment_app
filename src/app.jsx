import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Appstore from "./component/appstore/appstore";
import Footer from "./component/footer/footer";
import Introduce from "./component/introduce/introduce";
import Main from './component/main/main';
import KakaoMap from './component/map/kakaoMap';
import Navbar from './component/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navbar />
        <Introduce />
        {/* <Main />
      <Appstore /> */}
        <Footer />
        {/* <KakaoMap/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
