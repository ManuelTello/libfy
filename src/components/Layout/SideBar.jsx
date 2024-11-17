import "../../assets/sideBar.css"

export default function SideBar() {
    return <aside className="sideBar">
        <div>
            <span>Tracks you like</span>
            <span>Albums</span>
            <span>Playlists</span>
        </div>
        <div>
            <span>Recently added</span>
        </div>
    </aside>
}