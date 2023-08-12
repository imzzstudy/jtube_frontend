import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "components/wrapperd/RootLayout/RootLayout";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Card from "components/atoms/Card/Card";
import Button from "components/atoms/Button/Button";
import VideoDetail from "pages/VideoDetail/VideoDetail";
import { ChannelDetail } from "pages/ChannelDetail/ChannelDetail";
import Authentication, {
  action as authAction,
} from "pages/Authentication/Authentication";

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

      {
        path: "/videos",
        // id:'video-detail',
        element: <VideoDetail />,
      },
      {
        path: "/channels",
        element: <ChannelDetail />,
      },
    ],
  },

  {
    path: "auth",
    element: <Authentication />,
    action: authAction,
  },
];

const router = createBrowserRouter(routes);

export default router;
