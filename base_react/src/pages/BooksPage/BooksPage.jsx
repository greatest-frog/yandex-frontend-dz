import { useState } from "react";
import { Category } from "../../components/Category/Category";

import styles from "./styles.module.css";

import classnames from "classnames";

export const BooksPage = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0]);
    return <div className={styles.page}>
        <div className={styles.categories}>
            {props.categories.map((category) => {
                return <button key={category.id}
                            className={classnames(styles.category, {[styles.activeCategory]: category === activeCategory})} 
                            onClick={() => setActiveCategory(category)}>
                                {category.name}
                </button>;
            })}
        </div>
        <Category category={activeCategory} className={styles.mainCategory}></Category>
    </div>;
}