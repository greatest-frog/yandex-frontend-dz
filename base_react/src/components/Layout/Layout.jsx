import { Header } from "../Header/Header";
import styles from "./styles.module.css";

export const Layout = (props) => {
    return <div className={styles.root}>
        <Header></Header>
        {props.children}
    </div>;
}