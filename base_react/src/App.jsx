import { Layout } from "./components/Layout/Layout";
import { BooksPage } from "./pages/BooksPage/BooksPage";

import { categories } from "./constants/mock";

export const App = () => {
    return <div>
        <Layout>
            <BooksPage books={categories}></BooksPage>
        </Layout>
    </div>;
}