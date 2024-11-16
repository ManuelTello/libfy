export default function SideBar() {
    const added = []
    for (let i = 0; i < 40; i++) {
        added.push(<div className="recentlyAddedEntrye"><span>Recently added</span></div>)
    }

    return <aside className="sideBarContainer">
        <div className="sideBarMenuContainer">
            <a href="">Tracks you like</a>
            <a href="">Your library</a>
            <a href="">Playlist</a>
        </div>
        <span>Recently added</span>
        <div className="recentlyAddedContainer">
            {added}
        </div>
    </aside>
}