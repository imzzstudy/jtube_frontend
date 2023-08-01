import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "components/wrapperd/RootLayout/RootLayout";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Card from "components/atoms/Card/Card";
import Button from "components/atoms/Button/Button";
import { Login } from "pages/Login/Login";

import VideoDetail from "pages/VideoDetail/VideoDetail";
import { ChannelDetail } from "pages/ChannelDetail/ChannelDetail";

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
      {
        path: "/videos",
        // id:'video-detail',
        element: <VideoDetail />,
      },
      {
        path: "/channels",
        element: <ChannelDetail/>,
      }
    ],
  },
  {
    
  }
];

const router = createBrowserRouter(routes);

export default router;
