import { Layout } from "./components/Layout/Layout";
import { BooksPage } from "./pages/BooksPage/BooksPage";
import { BookPage } from "./pages/BookPage/BookPage";

import { categories } from "./constants/mock";

export const App = () => {
    return <div>
        <Layout>
            <BooksPage categories={categories}></BooksPage>
            {/*<BookPage book={categories[0].books[0]}></BookPage>*/}
        </Layout>
    </div>;
}