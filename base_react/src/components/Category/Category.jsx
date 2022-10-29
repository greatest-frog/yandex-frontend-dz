import { Book } from "../Book/Book";

export const Category = ({category}) => {
    return <div>
        {category.books.map((book) => <Book key={book.id} book={book}/>)}
    </div>;
}