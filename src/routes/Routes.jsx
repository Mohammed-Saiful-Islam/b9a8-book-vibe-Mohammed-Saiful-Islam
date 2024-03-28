import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import Books from "../components/Books";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayouts />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('../books.json')
                },
                {
                    path: '/listedbooks',
                    element: <ListedBooks />
                },
                {
                    path: '/pagestoread',
                    element: <PagesToRead />
                },
                {
                    path: '/book',
                    element: <Books />,
                    loader: () => fetch('../books.json')
                }
            ]
        }
    ]
)