import { useState } from "react";
import classnames from "classnames";

import styles from "./styles.module.css"

export const Counter = () => {
    const [count, setCount] = useState(0);
    return <div className={styles.counter}>
        <button onClick={() => setCount(count - 1)} disabled={count === 0} className={styles.button}>-</button>
        <span className={classnames({[styles.activeCount]: count > 0})}>{count}</span>
        <button onClick={() => setCount(count + 1)} disabled={count === 10} className={styles.button}>+</button>
    </div>
}