import {Outlet} from "react-router-dom"
import SideBar from "./components/Layout/SideBar.jsx";
import MainView from "./components/Layout/MainView.jsx";
import SearchBar from "./components/Layout/SearchBar.jsx";
import "./assets/base.css"

export default function Root() {
    return <div id="detail" className="container">
        <div className="subContainer">
            <SideBar/>
            <MainView>
                <SearchBar/>
                <Outlet/>
            </MainView>
        </div>
    </div>
}