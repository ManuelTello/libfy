import SideBar from "../components/sideBar.jsx";
import MainView from "../components/mainView.jsx";
import "../assets/sideBar.css"
import "../assets/mainView.css"
import "../assets/containers.css"

export default function Home(){
    return <div className="homeContainer">
        <SideBar/>
        <MainView/>
    </div>
}