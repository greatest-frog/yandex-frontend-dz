import { SmallBook } from "../../components/SmallBook/SmallBook";
import { Annotation } from "../../components/Annotation/Annotation";
import { Review } from "../../components/Review/Review";

import styles from "./styles.module.css";

import classnames from "classnames";

export const BookPage = ({book}) => {
    return <div className={styles.page}>
        <div className={styles.heading_line}>
            <SmallBook book={book}/>
            <Annotation book={book}/>
        </div>
        <div>
            {book.reviews.map((review) => <Review key={review.id} review={review}/>)}
        </div>
    </div>;
}