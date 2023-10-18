import styles from "./styles.module.scss";
import { useState } from "react";

enum Type {
    Feria,
    TiendaNube
}

function parameters() {
    const [type, setType] = useState(Type.Feria);

    return (
        <>
            <div className={styles.tabs}>
                <ul>
                    <li className={styles.tab} onClick={() => setType(Type.TiendaNube)}>
                        Tienda Nube
                    </li>
                    <li className={styles.tab} onClick={() => setType(Type.Feria)}>
                        Feria
                    </li>
                </ul>
            </div>
            <div className={styles.containers}></div>
        </>
    );
}

export default parameters;
