import { Header } from "../Header/Header";

export const Layout = (props) => {
    return <div>
        <Header></Header>
        {props.children}
    </div>;
}