import styles from "./styles.module.scss";
import { Routes, Route } from "react-router-dom";
import Menu from "../Menu";
import Parameters from "../Parameters";
import Calculator from "../Calculator";
import logo from "../../assets/logo.png";

function App() {
    return (
        <div className={styles.wrapper}>
            <img src={logo} alt="logo" />
            <div className={styles.container}>
                <Menu />
                <div className={styles.section}>
                    <Routes>
                        <Route path="/parametros" element={<Parameters />} />
                        <Route path="/calculadora" element={<Calculator />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
