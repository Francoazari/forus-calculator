import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className={styles.menu}>
            <li>
                <Link to="/parametros">Parametos</Link>
            </li>

            <li>
                <Link to="/calculadora">Calculadora</Link>
            </li>
            <li>
                <Link to="/excel">Cargar archivo de excel</Link>
            </li>
        </ul>
    );
}

export default Menu;
