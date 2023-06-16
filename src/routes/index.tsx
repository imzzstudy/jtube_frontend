import { RouteObject, createBrowserRouter } from "react-router-dom";
import RootLayout from "components/wrapperd/RootLayout";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import Card from "components/atoms/Card/Card";
import Button from "components/atoms/Button/Button";

const routes: RouteObject[] = [
    { 
        path:'/', 
        element: <RootLayout/>, 
        errorElement: <ErrorPage/>,
        children:[
          { index:true, 
            element:
              <Card>
                <Button>asd</Button>
              </Card>
          }
        ], 
      }
]

const router = createBrowserRouter(routes)

export default router;