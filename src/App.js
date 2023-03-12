import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Routes, Route, Outlet} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UserPage/UserPage";
import App1 from "./App1";
import Card from "./components/Card/Card";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'portfolio'} element={<PortfolioPage/>}/>
                <Route path={'contacts'} element={<ContactsPage/>}/>
                <Route path={'users'} element={<UsersLayout/>}>
                    <Route index element={<UsersPage/>}/>
                    <Route path={':userId'} element={<UserPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

function UsersLayout() {
    return (
        <div>
            {/*<h2>Пользователи</h2>*/}
            <Outlet/>
            {/*<App1/>*/}
        </div>
    )
}

function Layout() {
    return (
        <div className="App">
            <Header/>
            <main className={'content'}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
