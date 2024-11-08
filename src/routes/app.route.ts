import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layout/page.layout";
import LoginPage from "../modules/authentication/Login Page/login.page";

export const router = createBrowserRouter([
    {
        path: '',
        Component: PageLayout,
        children: [
            {
                index: true,
                Component: LoginPage
            }
        ]
    }
])

export default router;