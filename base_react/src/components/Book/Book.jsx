import { Counter } from "../Counter/Counter";

import styles from "./styles.module.css";

export const Book = ({book}) => {
    return <div className={styles.book}>
        <div className={styles.information}>
            <h4 className={styles.title}>{book.name}</h4>
            <div>{book.author.name}</div>
            <div>{book.category}</div>
            <div>{book.rating}/5</div>
            <div className={styles.price}>{book.price}&#8381;</div>
        </div>
        <Counter book={book}></Counter>
    </div>;
}