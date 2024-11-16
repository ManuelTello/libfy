import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Root from "./routes/root"
import ErrorPage from "./routes/error-page.jsx"
import Home from "./routes/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {
          path:"home",
          element: <Home />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
)