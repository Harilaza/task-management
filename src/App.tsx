import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicLayout} from "./core/presentation/layout/public.layout.tsx";
import {NotFound} from "./core/presentation/not-found";
import {SignUp} from "./presentation/sign-up";
import {SignIn} from "./presentation/sign-in";


const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <NotFound />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/sign-in',
        element: <SignIn />
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
