import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "../pages/Home";
import ImageCarousel from "../pages/ImageCarousel";
import ImageCollection from "../pages/ImageCollection";
// import ErrorPage from "./pages/ErrorPage";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "carousel/",
                element: <ImageCarousel />
            },
            {
                path: "collection/",
                element: <ImageCollection />
            },
        ],
        // errorElement: <ErrorPage/>
    }
];

const Router = createBrowserRouter(routes);

export default Router;
