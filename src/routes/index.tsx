import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "components/wrapperd/RootLayout";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Card from "components/atoms/Card/Card";
import Button from "components/atoms/Button/Button";
import { Login } from "pages/Login/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Card>
            <Button>asd</Button>
          </Card>
        ),
      },
      { path: "/login", element: <Login /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
