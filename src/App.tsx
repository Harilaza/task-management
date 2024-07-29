import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicLayout} from "./core/presentation/layout/public.layout.tsx";
import {NotFound} from "./core/presentation/not-found";
import {SignUp} from "./presentation/sign-up";
import {SignIn} from "./presentation/sign-in";
import {UserLayout} from "./core/presentation/layout/user.layout.tsx";
import {ListTask} from "./presentation/list-task";


const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
        ],
        errorElement: <NotFound />
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: '/user/',
                element: <ListTask />
            }
        ]
    }
]);
function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
