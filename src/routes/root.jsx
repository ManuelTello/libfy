import React from "react"
import {Outlet} from "react-router-dom"
import "../assets/containers.css"

export default function Root() {
    return <React.Fragment>
        <div id="detail" className="mainContainer">
            <div className="subContainer">
                <Outlet/>
            </div>
        </div>
    </React.Fragment>
}