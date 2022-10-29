import { Layout } from "./components/Layout/Layout";
import { BooksPage } from "./pages/BooksPage/BooksPage";

import { categories } from "./constants/mock";

export const App = () => {
    return <div>
        <Layout>
            <BooksPage categories={categories}></BooksPage>
        </Layout>
    </div>;
}