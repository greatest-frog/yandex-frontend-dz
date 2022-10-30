import styles from "./styles.module.css";

export const Review = ({review}) => {
    return <div className={styles.review}>
        <div className={styles.head}>
            <div className={styles.name}>{review.author.name}</div>
            <div>{review.rating}/5</div>
        </div>
        <p>
            {review.text}
        </p>
    </div>;
}