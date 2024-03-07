import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import ImageCarousel from "./ImageCarousel";
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
        ],
        // errorElement: <ErrorPage/>
    }
];

const Router = createBrowserRouter(routes);

export default Router;
