import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {EditUser} from "../../features/components/Users/EditUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/edit-user/:id",
        element: <EditUser/>,
    },
]);