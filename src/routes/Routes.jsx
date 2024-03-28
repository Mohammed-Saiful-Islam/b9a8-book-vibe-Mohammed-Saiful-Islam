import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayouts />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/listedbooks',
                    element: <ListedBooks />
                },
                {
                    path: 'pagestoread',
                    element: <PagesToRead />
                }
            ]
        }
    ]
)