import { createBrowserRouter } from "react-router-dom";

import Inicio from "../pages/Inicio"
import About from "../pages/About"
import Tech from "../pages/Tech"
import Works from "../pages/Works"
import Contact from "../pages/Contact"


export const router = createBrowserRouter([
        {
            path: "/",
            element: <Inicio />
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/tech",
            element: <Tech />,
        },
        {
            path: "/works",
            element: <Works />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
]);