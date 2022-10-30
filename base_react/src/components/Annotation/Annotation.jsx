import styles from "./styles.module.css";

export const Annotation = ({book}) => {
    return <div className={styles.annotation}>
        <h5>Аннотация</h5>
        <p>{book.annotation}</p>
    </div>;
}